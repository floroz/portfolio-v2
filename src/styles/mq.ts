const mqXSmall = (styles: string) =>
  `@media screen and (max-width: 350px) { ${styles} }`;

const mqSmall = (styles: string) =>
  `@media screen and (max-width: 500px) { ${styles} }`;

const mqMedium = (styles: string) =>
  `@media screen and (max-width: 700px) { ${styles} }`;

const mqLarge = (styles: string) =>
  `@media screen and (max-width: 900px) { ${styles} }`;

const mqXLarge = (styles: string) =>
  `@media screen and (max-width: 1200px) { ${styles} }`;

export { mqSmall, mqLarge, mqMedium, mqXLarge, mqXSmall };
