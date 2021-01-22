import React from 'react';

import { Container, Cover } from './styles';
import GameHero from '../../components/GameHero';
import Screenshots from '../../components/Screenshots';

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
    <div className="about">
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
    </div>
    <div className="divider" />
    <Screenshots />
  </Container>
);

export default Details;
