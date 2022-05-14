import Head from 'next/head';
import Image from 'next/image';
import Best from '../components/Best/Best';
import Hero from '../components/Hero/Hero';
import Last from '../components/Last/Last';
import Layout from '../components/Layout/Layout';
import Look from '../components/Looked/Looked';
import Navbar from '../components/Navbar/Navbar';
import New from '../components/new/New';
import Withus from '../components/Withus/Withus';


export default function Home() {
    return (
        <Layout title='Главная'>
            <Hero />
            <Withus />
            <New />
            <Best />
            <Last />
            <Look />
        </Layout>
    );
}
