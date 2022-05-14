// import React from 'react';
// import Layout from '../../../components/Layout/Layout';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react/cjs/react.production.min';
// import Image from 'next/image';
// import Link from 'next/link';

// const Subcategory = ({ subcategories, title, id }) => {
//     const query = useRouter();
//     const path = query.query.category;
//     // console.log(pathName);
//     // console.log(query);

//     if (subcategories.length == 0) {
//         return (
//             <Layout title={title}>
//                 <h3>пусто</h3>
//             </Layout>
//         );
//     }

//     return (
//         <Layout title={title}>
//             {subcategories.map((item) => (
//                 <div key={item.name}>
//                     <Link
//                         href='/[category]/[subcategory]'
//                         as={`/${path}/${item.name}${item.id}`}
//                     >
//                         <a>
//                             <div>{item.name}</div>
//                             <Image
//                                 id='img'
//                                 src={item.image}
//                                 alt='image'
//                                 width={500}
//                                 height={500}
//                             />
//                         </a>
//                     </Link>
//                 </div>
//             ))}
//         </Layout>
//     );
// };

// export default Subcategory;

// export async function getServerSideProps({ query }) {
//     const strValue = query.category;
//     const title = strValue.slice(0, -1);
//     const id = strValue.slice(-1);
//     const res = await fetch(
//         `http://212.42.103.101:8920/subcategory/?category=${id}`
//     );
//     const subcategories = await res.json();
//     return { props: { title, subcategories, id } };
// }

