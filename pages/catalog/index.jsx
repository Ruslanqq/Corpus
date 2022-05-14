import React from 'react';
import Catalog from '../../components/catalog/catalog';
import Layout from '../../components/Layout/Layout';

const index = () => {
    return <Layout title='О нас'>
        <Catalog/>
    </Layout>;
};

export default index;



// const Card = ({ item }) => {
//     return (
//         <div>
//             <Link
//                 href='catalog/[category]'
//                 as={`/catalog/${item.name}${item.id}/`}
//             >
//                 <a>
//                     <Image
//                         id='img'
//                         src={item.image}
//                         alt='image'
//                         width={500}
//                         height={500}
//                     />
//                     <p>{item.name}</p>
//                 </a>
//             </Link>
//         </div>
//     );
// };

// const index = ({ categories }) => {
//     return (
//         <Layout title='Каталог'>
//             <div>
//                 {categories.map((item) => (
//                     <Card key={item.name} item={item} />
//                 ))}
//             </div>
//         </Layout>
//     );
// };

// export async function getServerSideProps() {
//     const res = await fetch(`http://212.42.103.101:8920/categories`);
//     const categories = await res.json();
//     // console.log(categories);
//     return { props: { categories } };
// }

// export default index;
