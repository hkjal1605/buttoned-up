import React from 'react';

import Main from '../../components/main/main.component';
import SectionWomen from '../../components/section-women/sectionWomen.component';
import SectionMen from '../../components/section-men/sectionMen.component';
import FashionEssentials from '../../components/fashion-essentials/fashionEssentials.components';
import Footer from '../../components/footer/footer.components';

import './homepage.styles.scss';

const HomePage = () => (
    <section>
        <Main />
        <SectionWomen />
        <SectionMen />
        <FashionEssentials />
        <Footer />
    </section>   
)

export default HomePage;