import React, { useEffect } from 'react'
import { NavBarContainer } from '@containers/student/NavBar';
import * as classNames from 'classnames';
import * as s from './AnswersToQuestions.sss';
import { Footer } from '@components/site/Footer';
import { QABlock } from '@/components/site/QABlock';


type AnswersToQuestionsProps = {
    theme?: keyof typeof themeClassName
    className?: string
};

const themeClassName = {
    orange: s.themeOrange,
  };

export const AnswersToQuestions: React.FC<AnswersToQuestionsProps> = ({
    theme = 'orange',
    className
}) => {
    
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className={classNames(s.root, themeClassName[theme], className)}>
        <NavBarContainer
            position="fixed"
            theme="bright"
        />
        <QABlock hiddenLink />
        <Footer />
    </div>
  )
}

export default AnswersToQuestions;