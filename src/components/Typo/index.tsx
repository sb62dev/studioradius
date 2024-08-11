import React from 'react';
import Link from 'next/link';

interface Props {
  className?: any;
  tag?: any;
  content?: any;
  link?: boolean;
  href?: any;
  target?: string;
  ariaLabel?: any;
}

export const Typo: React.FC<Props> = (props: Props) => {
  const typoClass = props?.className;
  const TagName = props?.tag;
  const innerHTML = props?.content; 
  const linkTrue = !!props?.link;
  const href = props?.href;
  const target = props?.target;
  const ariaLabel = props?.ariaLabel;

  return (
    <>  
        {innerHTML && (
            <TagName className={typoClass}>
                {linkTrue ? ( 
                    <Link href={href} target={target} aria-label={ariaLabel}>{innerHTML}</Link>
                ) : (
                    <>{innerHTML}</>
                )}
            </TagName>
        )}  
    </>
  );
};

export default Typo;
