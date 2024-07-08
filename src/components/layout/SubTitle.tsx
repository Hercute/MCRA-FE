import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type SubTitleProps = {
  title: string;
  explanation?: string;
  showButton?: boolean;
  icon: IconType;
  href?: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ title, explanation, showButton, icon: Icon, href }) => {
  return (
    <div className="subTitle">
      <h2>
        <Icon />
        <span>{title}</span>
      </h2>
      <span className="subExplanation">{explanation}</span>
      {showButton && href && (
        <Link href={href} className="subTitle_Btn">
          <button type="button">더보기</button>
        </Link>
      )}
    </div>
  );
};

export default SubTitle;
