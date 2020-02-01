// export default {
//   title: 'Картинка',
//   name: 'picture',
//   type: 'image',
//   options: {
//     hotspot: true,
//   },
//   fields: [
//     {
//       title: 'Описание картинки',
//       description: 'Важно для СЕО',
//       name: 'alt',
//       type: 'string',
//       options: {
//         isHighlighted: true,
//       },
//     },
//   ],
// };

export default {
  title: 'Картинка',
  name: 'picture',
  type: 'document',
  fields: [
    {
      title: 'Картинка',
      name: 'img',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Описание картинки',
      description: 'Важно для СЕО',
      name: 'alt',
      type: 'string',
    },
  ],
};
