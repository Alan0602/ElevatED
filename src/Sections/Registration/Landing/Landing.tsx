import styles from "./Landing.module.css";
import Logo from "../../../Logo.png";
import { useNavigate } from "react-router-dom";
import women from './landingPgImgs/women.png'
import quiz from './landingPgImgs/quiz.png'
import subject from "./landingPgImgs/subject.png";
import courseFeatImg from "./landingPgImgs/courseFeatImg.png"
import quizFeatImg from "./landingPgImgs/quizFeatImg.png"
import monitoringFeatImg from "./landingPgImgs/monitoringFeatImg.png"
import facultyFeatImg from "./landingPgImgs/facultyFeatImg.png"


type Props = {};

export const Landing = (_props: Props) => {
  const navigate = useNavigate();
  const handleSignUP = async () => {
    navigate("/signup");
  };
  const handleLogin = async () => {
    navigate("/login");
  };

  const mainFeatures = [
    {
      featureName: "Courses",
      desc: "Enroll now for top-tier courses with dedicated instructors at your pace.",
      img: courseFeatImg,
    },
    {
      featureName: "Daily Quizzes",
      desc: "Daily quizzes: an engaging way to boost and test your knowledge.",
      img: quizFeatImg,
    },
    {
      featureName: "Student Monitoring",
      desc: "Monitor progress and performance to gauge improvement and achievements.",
      img: monitoringFeatImg,
    },
    {
      featureName: "Faculty Engagement",
      desc: "Engage with instructors and peers to foster connections and collaborative learning.",
      img: facultyFeatImg,
    },
  ];

  const Functionss = [
    {
      name: "Daily Quizzes",
      description: "Enhance learning through daily quizzes, reinforcing key concepts and fostering active engagement with course materials",
      image: quiz,
    },
    {
      name: "Featured Courses",
      description: "Discover expert-curated courses, handpicked to inspire learning and cater to diverse educational interests and goals.",
      image: quiz,
    },
    {
      name: "Student Monitoring",
      description: "Monitor student progress in real-time, identifying strengths and areas for improvement to provide tailored support and optimize learning outcomes.",
      image: quiz,
    },
    {
      name: "Faculty Engagement",
      description: "Empower educators to upload resources, interact with students, and track progress, fostering a collaborative and dynamic learning environment.",
      image: subject,
    },
    {
      name: "Organization Management",
      description: "Streamline course organization and management tasks, ensuring smooth operations and optimized learning experiences for all stakeholders.",
      image: subject,
    },
    {
      name: "Reports and Statistics",
      description: "Gain valuable insights with comprehensive reports and statistics, enabling informed decision-making and continuous improvement in educational outcomes.",
      image: subject,
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopNavbar}>
        <img src={Logo} alt="" />
        <div className={styles.Registration}>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignUP}>SignUp</button>
        </div>
      </div>

      <div className={styles.bodyWrapper}>

        <section>
          <div className={styles.landingHomeWrapper}>
            <div className={styles.TextLandingHome}>
              <h1 className={styles.underline} >Knowledge, collaboration, academic journey!</h1>
              <p>Tailored quizzes aid students in addressing weaknesses, enhancing comprehension, tracking progress, and receiving personalized study recommendations for continued improvement.</p>
            </div>
            <img src={women} alt="" />
          </div>
        </section>

        <section>
          <div className={styles.featuresWrapper}>
            <div className={styles.featuresSecHeading} >
              <h2>Student Enrichment</h2>
              <p>Tailored quizzes aid students in addressing weaknesses, enhancing comprehension, tracking progress, and receiving personalized study recommendations for continued improvement.</p>
            </div>
            <div>
              {mainFeatures.map(({ featureName, desc, img }) => {
                return (
                  <div className={styles.featuresName}>
                    <img src={img} alt="" />
                    <div className={styles.featuresNameTextDiv}>
                      <h4>{featureName}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section>
          <div className={styles.functionWrapper}>
            <div>
              <h2>Discover how ElevatED transforms your learning!</h2>
              <h4>Your one-stop destination for online learning</h4>
            </div>
            <div className={styles.functionWrapWrapper}>
              {Functionss.map(({ image, name, description }) => {
                return (
                  <div className={styles.eachFunctionWrapper}>
                    <img src={image} alt="" />
                    <div className={styles.eachFunctionWrapperText}>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </div>
      <section>
        <div className={styles.landingFooterWrapper}>

        </div>
      </section>
    </div>
  );
};
// };
