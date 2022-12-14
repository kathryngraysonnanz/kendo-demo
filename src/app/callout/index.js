import React, {Component} from 'react';
import './callout.scss';

export default function Callout(props) {
 const { as: Element, children } = props;
 return <Element className="callout">{children}</Element>
}

Callout.defaultProps = {
 as: 'p',
};
