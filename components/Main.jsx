export default function Main() {
  return (
    <>
      <div className="Main_content">
        <h1>Abdulhamid Alsaati</h1>
        <div>
          <a
            href="https://portfolio-abdulhamid.vercel.app"
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
              href="https://drive.google.com/file/d/1EnQmQ7wPzzjnc41SdM6qqZA1gzEsYq7B/view?usp=sharing"
              onClick={() => {
                this.handleClick;
              }}
            >
              Link To CV
            </a>
          }
        </div>
      </div>
    </>
  );
}
