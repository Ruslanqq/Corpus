// import React from 'react';
// import Layout from '../../../../components/Layout/Layout';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react/cjs/react.production.min';
// import Image from 'next/image';

// // const Subcartegory = ({ title, id, subcategories }) => {
// const Subcartegory = ({}) => {
//     // console.log(title, id);
//     // console.log(subcategories);

//     // if (subcategories.length == 0) {
//     //     return (
//     //         <Layout title='id'>
//     //             <h3>пусто</h3>
//     //         </Layout>
//     //     );
//     // }

//     return (
//         <Layout title='id'>
//             {/* {subcategories.map((item) => (
//                 <div key={item.name}>
//                     <div>{item.name}</div>
//                     <Image
//                         id='img'
//                         src={item.image}
//                         alt='image'
//                         width={500}
//                         height={500}
//                     />
//                 </div>
//             ))} */}
//             subcat
//         </Layout>
//     );
// };

// export default Subsubcartegory;

// export async function getServerSideProps({ query }) {
//     const strValue = query.category;
//     const title = strValue.slice(0, -1);
//     const id = strValue.slice(-1);
//     const res = await fetch(
//         `http://212.42.103.101:8920/subcategory/?category=${id}`
//     );
//     const subcategories = await res.json();
//     return { props: { title, subcategories } };
// }
