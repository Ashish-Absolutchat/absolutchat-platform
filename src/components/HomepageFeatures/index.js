import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Explore the articles about Account, User,. Design and build a chatbot to automate tasks and turn conversion.
       Build stronger relationships with customers by delivering targeted content and anticipating their reactions.
      </>
    ),
  },
  {
    title: 'Flow Builder',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The power, flexibility and ease of use of the visual flow builder enables rapid intelligent chatbot development for everyone.
        No coding or technical skills required.
      </>
    ),
  },
  {
    title: 'Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend your chatbot functionality to create a truly personalized experience, AbsolutChat provides a rich set of actions that easily integrates with external services such as
        Slack, Google Spreadsheet, SendGrid, Zapier, and countless others.
      </>
    ),
  },
  {
    title: 'Create',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       You can create an automated(bot) or Human (Human Hybrid) chatbot. No coding or technical skills required.
      </>
    ),
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Design conversations to utilise "Simple" or "Multiple Choice" or something more complex such as action buttons, translation, collect payments, send receipts and more. No coding or technical skills required.
      </>
    ),
  },
  {
    title: 'Publish',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Publish your bot everywhere your users are. No coding or technical skills required.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
