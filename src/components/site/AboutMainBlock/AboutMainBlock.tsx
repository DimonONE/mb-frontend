import * as React from 'react';
import * as classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { NavBarContainer } from '@containers/student/NavBar';
import { LayoutContainer } from '@components/student/LayoutContainer';
import IndexMainImageMobile380 from '@static/img/about/main-block-380-2x-min.jpg';
import IndexMainImageMobile420 from '@static/img/about/main-block-420-2x-min.jpg';
import IndexMainImageDesktop1x from '@static/img/about/main-block-1x-min.jpg';
import IndexMainImageDesktop2x from '@static/img/about/main-block-2x-min.jpg';

import * as s from './AboutMainBlock.sss';

type AboutMainBlockProps = {
  className?: string
};

export const AboutMainBlock: React.FC<AboutMainBlockProps> = ({
  className
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.root, className)}>
      <NavBarContainer
        position="fixed"
        theme="primary"
      />

      <LayoutContainer className={s.layout}>
        <div className={s.desktopInlineGroup}>
          <div className={s.titleGroup}>
            <div className={s.title}>
              {t('site~Давай знайомитись ближче!')}
            </div>
            <div className={s.subtitle}>{t('site~Всю свою професійну експертизу і любов до балету ми втілили в компанії Mary Ballet.')}</div>
          </div>

          <div className={s.imageOuter}>
            <picture>
              <source
                data-srcset={`${IndexMainImageDesktop1x} 1x, ${IndexMainImageDesktop2x} 2x`}
                media="(min-width: 1268px)"
              />
              <source
                data-srcset={`${IndexMainImageMobile380} 760w, ${IndexMainImageMobile420} 840w, ${IndexMainImageDesktop2x} 1750w`}
                media="(max-width: 1268px)"
              />
              <img
                className={classNames(s.image, 'lazyload')}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP////////////////////////////////////////////////8BUFBQUFVQWmRkWn2HeId9uaqbm6q5/8jXyNfI///////////////////////////////////////////////////CABEIAVMBfAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAgBAQAAAADsAAAAAAAAAAAAAAAAAAAAAAAAAAAARJsAAAAAAQM+KdfXQAAAAAgDhwPZpQAAAAIAHHi9dKAAAAEABjN3RQAAACAZ4vRvHNcb6QoAAAEAeblOvrnNlvpCgAACYxvvJIJjPWzO+d6QUAABmcXp6KTm4uubbMtwKAABxmHfrdyTz6uOvNsy3AoAAM8EdOmtpOEdXO7XnvUCgAA588jr0usznydcY67OfXeQUAAGOBl17azlx6Zw11TPa5BQAAb48s5xv12Zt59+fB1Ld5BQAAqc+Oc69ao57wx0Rq46BQAA1ib48c69S2TGsakxO3NbrRQAA3zazznUrUxMas8++/m2uuoAAG8xrMs3ZgwkbzXDZ001YAAusGsk66zzgzi6s4tLpV3AAN5RqQ6anPNkRrLOd25k3dwAFshqI6azxu+cajnrYGLdwAFIVDpqeCevOW8Zl3shk2ACaINZOmnl4XvFmJq9LcoTYAhpAsOmnDhdENDqklubQEGkBY6acvDveqmd1nskmkm4ANRAWOtZ8mO0VnF3n0XObSUBQALOlZ5XNYzLWe9koVBSkoBOlmcZi3GF59eoDWQVQAE1cZkKOc1jvVBFgqoqhLJmIxq6hibuqAIKpQEmYJmMd2Y592wCyBVFJmLbjOYkzrrz6azqqAIFKNTlNatY5Yhau9G7IAQCiky0DPOFppFugCAFCFCgAIAIABQKABAAIAAFAAAAgAAABQABAAAAAACwAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oACAECEAAAAKAAAAAAAAAAigAACTQAACBQACCUUAAhFFAAIQVQARSXJVABCpcy0KASywKiGgJUsNKzLFAlSw2JmyWgBC6JmwoRSBdJlUoSiELdYVFAJAN5oAQICqAEUAAAAAAAAAAAAAAP/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oACAEDEAAAAKAAAAAAAAAAAAAAqAAACkAABUAAAGkgAAC1EAAALYgAAC2SkAFgKihAAQClQAEqBVQAEakFWAWBFIUAWAUSUAAUoxQAKiixAAAAAAAAAAAAAAAAAP/EACoQAAICAQMEAgICAgMAAAAAAAABAhExECAhAxJAQRNRMDJQYSJxUnCA/9oACAEBAAE/AP8Aq1ySyz5Yff8AHSl2psbcnb0hNxL/AIzq80h0iXCEuCH6x/jKXsl01ZKDIp4Fwl/GNWiVpEXeUOMYstfw8pKKtj6wut9kWpYGPBJ28CkkP3Jibz9kWP8AhZpzkNU9OjOpksnoa5KrJzN16HnT15VjkWQj3OykdqO07XsjBK2NJ+jsiOCU4JE9KvTCErZl+U+XRJ0tYfqt1IbiSb7OCMpHerErkmTFhaPT7YiPkqX7P+yWsXxonsb4YhSE17Ki2Il7IfqtEMYvJm6iz0h51WCL4LIsZemG9KdkYnp6Q/XTDGSfL/pCF5HUTZWNidOiOkcj0ROkORHjJGRLqI7iDWnovgzovJcMtbJZF1GiE+5iGxiZNWiMGxpUdnB2jRHVi7U+RGF5OETjaTQ1pIaOj++yhaPIxpEiGdiSFwx48hZJsjhokqGn7KGdL91seryOeTuGhKnq+EJurE7Q5+iL8eJIi6ZJE1rBPv2UVpVsfaVG7MlHtIfUimfKhR4HPtmJ6WJ+K+EMofKGjss+LdY0mVRWSmJiY1/kmdRVMh0/bG6TZHnkvWJZRXgpexvVYY9kUmjsQ4jv0IdnJb+hsYmXaHBMTJySixbFpZfgJWxvYsMeyGNGPY2NJo7eci1Z1MIiiimLxMLbH2PZHGjHqz2PSjA3zQicRKtKKGjk7vAWSW1bY40nJRVs+WH2Jp4ekxbLI8tsWlbp0LC0eF+WOdyHsjjSSUk0ycJRb4IT7JDadEiOWLIxk3USHCQuWRe5larH5Y78rZHGvVTY0sIhOmXaI4Ys6ex03bwNtlVEjhidrRba0j+VYe9D1jjXq0uR2K/6LoWNbyLtaQkh8o9P/R09j0Q9F5Eca9SPfFoffHgUhi0aTHFVRcC0IlwmdPOx7H+Wl+SONWSIwcj4/wCxwawX968NNM7Ppi70Sf8AgQfOi1W1fjQ/w+tFjY4WzhKkWWNJji1gvZNXQlq/wPxFpHGrZ3bbHGzlZLRjBbtkedHnRJraseOyLHIbG9q2SgRdcMlCyLpli5/AxeIhossvZIV0rE9slaIS9McUyq4/El4ncXpWr/2cDGzvSIu4l6NlnsR78qyy9KO0oY2WXscDp/4j4LbwRjR2RZ8ZRXkUSxquStjQ0WWWWXozJFJa9xZY/Gsb0aKRaLL2NWPpHxHxHxHxHxHxHxf2dj/5HbL7O2X2dsvtCUvsqX35HJz/AOFf/8QAHBEBAAMBAAMBAAAAAAAAAAAAAQARQCAQUGAw/9oACAECAQE/APln1ruPWmg5vDUqBE0vmsJw8n7VDAd3Lg6bg+GGwxXL+n//xAAbEQEAAgIDAAAAAAAAAAAAAAARAEABcCBQYP/aAAgBAwEBPwDy5o/NZjHrMQsMzYIVTgVjQn//2Q=="
                alt="..."
              />
            </picture>
          </div>
        </div>

        <div className={s.stats}>
          <div className={s.stat}>
            <div className={s.statValue}>5000+</div>
            <div className={s.statName}>{t('site~Учениць в студії')}</div>
          </div>

          <div className={s.stat}>
            <div className={s.statValue}>25+</div>
            <div className={s.statName}>{t('site~Експертів з різних сфер в команді')}</div>
          </div>

          <div className={s.stat}>
            <div className={s.statValue}>1000+</div>
            <div className={s.statName}>{t('site~Учениць онлайн')}</div>
          </div>

          <div className={s.stat}>
            <div className={s.statValue}>7</div>
            <div className={s.statName}>{t('site~Студій в Києві')}</div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};
