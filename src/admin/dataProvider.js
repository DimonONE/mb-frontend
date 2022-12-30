import jsonServerProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'ra-core';
import { stringify } from 'query-string';

const countHeader = 'x-total-count';

const provider = (apiUrl) => {
  const baseProvider = jsonServerProvider(apiUrl);
  const httpClient = fetchUtils.fetchJson;
  return Object.assign(
    {},
    baseProvider,
    {
      getList: function (resource, params) {
        let _a = params.pagination;
        let page = _a.page;
        let perPage = _a.perPage;
        let _b = params.sort;
        let field = _b.field;
        let order = _b.order;
        let query = {
          _sortField: field,
          _sortDir: order,
          _page: page,
          _perPage: perPage,
          _filters: JSON.stringify(params.filter),
        };
        var url = apiUrl + "/" + resource + "?" + stringify(query);
        return httpClient(url).then(function (_a) {
            var headers = _a.headers, json = _a.json;
            if (!headers.has('x-total-count')) {
                throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
            }

            let data = json;
            if (resource === 'landingblock') {
              data = json.map(row => ({ ...row, id: row.name }));
            } else if (resource === 'page') {
              data = json.map(row => ({ ...row, id: row.slug }));
            }
            return {
                data,
                total: parseInt(headers
                    .get('x-total-count')
                    .split('/')
                    .pop(), 10),
            };
        });
      },

      getOne: async (resource, params) => {
        const url = apiUrl + '/' + resource + '/' + params.id;
        const response = await httpClient(url);

        let data = response.json;
        if (resource === 'landingblock') {
          data = {
            id: data.name,
            ...data.data
          };
        } else if (resource === 'page') {
          data = {
            id: data.slug,
            ...data,
          }
        }

        return ({
          data
        });
      },

      update: async (resource, params) => {
        const { data } = params;
        if (resource === 'hall') {
          for (const field of ['image_1', 'image_2', 'image_3']) {
            if (data[field] && data[field].rawFile) {
              data[field] = await convertFileToBase64(data[field]);
            }
          }
        } else if (resource === 'landingreview' && data.reviewer_avatar && data.reviewer_avatar.rawFile) {
          data.reviewer_avatar = await convertFileToBase64(
            data.reviewer_avatar
          );
        } else if (resource === 'landingblock') {
          for (let field of Object.keys(data.data)) {
            const fieldValue = data.data[field];
            console.log(fieldValue);
            if (fieldValue && fieldValue.rawFile) {
              const image64 = await convertFileToBase64(fieldValue);
              data.data[field] = { base64: image64 };
            } else if (fieldValue === null) {
              delete data.data[field];
            }
          }
        } else if (resource === 'article' && data.image && data.image.rawFile) {
          data.image = await convertFileToBase64(
            data.image
          )
        }

        return baseProvider.update(resource, params);
      },

      create: async (resource, params) => {
        const { data } = params;
        if (resource === 'hall') {
          for (const field of ['image_1', 'image_2', 'image_3']) {
            if (data[field] && data[field].rawFile) {
              data[field] = await convertFileToBase64(data[field]);
            }
          }
        } else if (resource === 'landingreview' && data.reviewer_avatar) {
          data.reviewer_avatar = await convertFileToBase64(
            data.reviewer_avatar
          );
        } else if (resource === 'albumimage' && data.original) {
          data.original = await convertFileToBase64(
            data.original
          );
        } else if (resource === 'article' && data.image) {
          data.image = await convertFileToBase64(
            data.image
          )
        }
        try {
          return await baseProvider.create(resource, params)
        } catch (e) {
          e.message = e.body.error;
          throw e;
        }
      },

      getMany: (resource, params) => {
        const query = {
          _filters: JSON.stringify({ id: { in: params.ids }}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
      },

      getManyReference: (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;

        const rangeStart = (page - 1) * perPage;
        const rangeEnd = page * perPage - 1;

        const query = {
          _sortField: field,
          _sortDir: order,
          _page: page,
          _perPage: perPage,
          _filters: JSON.stringify({
            ...params.filter,
            [params.target]: params.id,
          }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const options =
          countHeader === 'Content-Range'
            ? {
              // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
              headers: new Headers({
                Range: `${resource}=${rangeStart}-${rangeEnd}`,
              }),
            }
            : {};

        return httpClient(url, options).then(({headers, json}) => {
          if (!headers.has(countHeader)) {
            throw new Error(
              `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
            );
          }
          return {
            data: json,
            total:
              countHeader === 'Content-Range'
                ? parseInt(
                headers.get('content-range').split('/').pop(),
                10
                )
                : parseInt(headers.get(countHeader.toLowerCase())),
          };
        });
      },
    }
  )
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file.rawFile);

  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

export default provider('/admin/api');
