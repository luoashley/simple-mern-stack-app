import meImage from './me.jpg';
import './Aboutus.css'


const Aboutus = () => {
  return (
    <div>
      <h1>About me!</h1>
      <p>Hello, World! My name is Ashley Luo. My hometown is in Shenzhen, China.
        I'm a junior majoring in Computer Science and Mathematics with a Web Development
      and Application minor in New York University. I went local in NYU Shanghai for my freshman year.
        In my spare time, I love exploring some good restaurants here in NYC. I miss my home a lot, so I learn how to cook Cantonese
      food when I'm free, and it taste pretty good! I also love skiing and travelling a lot, despite the fact that I have never seen
        snow until last winter.
      </p>
      <p>Here is a photo of me!</p>
      <img src={meImage} alt="null"></img>
    </div>
  )
};

export default Aboutus;