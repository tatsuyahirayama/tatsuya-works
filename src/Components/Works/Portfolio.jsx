import React from 'react';
import LayoutLeft from './Layout-left/LayoutLeft';
import LayoutRight from './Layout-right/LayoutRight';
import PortfolioImg from '../../img/portfolio-top.png';
import './works.css';


const Portfolio = (props) =>{
    return(
    <div className='container-introduction'>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div className='grid-list'>
        <LayoutLeft 
        picture={PortfolioImg} 
        link="https://portfolio-ce4ea.web.app/"
        language="HTML, CSS, JavaScript"
        skill="Sass, Firebase Hosting"
        />
        <LayoutRight
        summary1="ポートフォリオサイト"
        background1="ポートフォリオサイトとして、自身の経歴、スキルや制作物をご紹介するため。"
        function1="・レスポンシブデザインを意識したレイアウト設計。"
        function2="・カルーセルスライダーやアコーディオンメニューなどを用いたUI/UXの向上。"
        function3="・CSSはSassを使用して、なるべくシンプルに。"
        struggled1="・レスポンシブ設計の経験が浅かったため、苦戦しながらも何度もデベロッパーツールでスマホレイアウトを確認しながらコーディング。
                      "
        struggled2="・ハンバーガーメニューやアコーディオンメニュー、カルーセルスライダーなどの実装。
                      "
        struggled3="・animate.cssやSwiper.jsなど初めて使用するツールに挑戦。"
        actionItem1="プロフィールページやお問い合わせフォームの実装などコンテンツを充実させると共に、レイアウトにも更にこだわっていきたいです。"
        />
        </div>

    </div>
    )
};

export default Portfolio;