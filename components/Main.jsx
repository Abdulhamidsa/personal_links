export default function Main() {
  return (
    <div className="Main_content">
      <h1>Personal Links</h1>
      <a
        href="https://designslayer.dk/portfolio_v2/portfolio.html"
        onClick={() => {
          this.handleClick;
        }}
      >
        Link To Portfolio
      </a>
      {
        <a
          href="https://www.linkedin.com/in/abdulhamid-alsaati-844572204/"
          onClick={() => {
            this.handleClick;
          }}
        >
          Link To LinkedIn
        </a>
      }
      {
        <a
          href="https://drive.google.com/file/d/1qPN7ctD7yqDx-QDj0PM54-lgXV40GzPX/view?usp=sharing"
          onClick={() => {
            this.handleClick;
          }}
        >
          Link To CV
        </a>
      }
    </div>
  );
}
