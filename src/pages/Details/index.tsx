import React from 'react';

import {
  Container,
  Cover,
  CriticsReview,
  Platforms,
  Developer,
} from './styles';
import GameHero from '../../components/GameHero';
import Screenshots from '../../components/Screenshots';
import Review from '../../components/Review';

const Details: React.FC = () => (
  <Container>
    <Cover>
      <img
        src="https://cdn.gamer-network.net/2014/usgamer/AC-Guide-Header-01.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/10-05-2017-which-assassins-creed-should-i-start-with-a-gateway-guide.jpg"
        alt="Cover"
      />
    </Cover>
    <GameHero />
    <div className="divider" />
    <section className="about">
      <h4>About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        quasi et officia ratione eligendi aspernatur commodi sunt minus libero
        optio autem, eaque necessitatibus pariatur quibusdam beatae repellendus
        quam ad enim! Labore vel iste veritatis soluta laborum dicta delectus
        ipsa, quas sapiente explicabo enim ipsam doloribus culpa modi suscipit
        quam alias magni dolor debitis ipsum beatae? Doloremque fuga laborum
        fugit labore eum, placeat aspernatur voluptatum nisi omnis est cum
        tempora assumenda nihil molestias excepturi officia deserunt accusamus
        numquam nobis veniam unde ad!
      </p>
    </section>
    <div className="divider" />
    <Screenshots />
    <div className="divider" />
    <CriticsReview>
      <h4>Critics Review</h4>
      <Review />
      <Review />
      <Review />
      <Review />
    </CriticsReview>
    <div className="divider" />
    <section id="platforms-developer">
      <Platforms>
        <h5>Platforms</h5>
        <div>
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
          <img
            src="https://assets.stickpng.com/thumbs/58481947cef1014c0b5e49b6.png"
            alt="ps4 logo"
          />
        </div>
      </Platforms>
      <Developer>
        <div>
          <h5>Developer</h5>
          <img
            src="https://img.pngio.com/hd-web-ubisoft-paris-logo-free-unlimited-download-37598-ubisoft-logo-png-570_511.png"
            alt="developer logo"
          />
        </div>
        <div>
          <h5>Publisher</h5>
          <img
            src="https://img.pngio.com/hd-web-ubisoft-paris-logo-free-unlimited-download-37598-ubisoft-logo-png-570_511.png"
            alt="publisher logo"
          />
        </div>
      </Developer>
    </section>
    <div className="divider" />
  </Container>
);

export default Details;
