import TextExpander from "./components/TextExpander";

export default function App() {
  return (
    <div className="container">
      <TextExpander>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta
        aliquid itaque sed perferendis excepturi reiciendis libero
        exercitationem. Ipsam minima illum voluptate, ea labore eos rerum libero
        voluptates ipsum vitae.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="card"
        btnColor="#748ffc"
        btnOpen="Read more"
        btnClose="Read less"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa autem
        labore inventore deleniti! Sit dignissimos natus quae ex alias esse
        sapiente quod, incidunt recusandae debitis architecto qui animi, neque
        nulla voluptatem placeat vel perspiciatis in sunt doloribus voluptates!
        Voluptas voluptate amet libero odio! In unde nihil officia doloribus
        provident veritatis harum eveniet quaerat. Optio aspernatur hic totam,
        perspiciatis illum, nulla asperiores debitis perferendis cupiditate sunt
        eveniet repudiandae deserunt nobis consequatur, quo cumque ipsa id
        repellendus est praesentium blanditiis laborum minima! Nulla mollitia
        quos dignissimos laboriosam voluptas illo provident maiores a
        praesentium, voluptatem fugit eveniet perspiciatis laborum pariatur ipsa
        officia facere!
      </TextExpander>
    </div>
  );
}
