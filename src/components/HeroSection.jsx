import avatarImg from "../assets/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-text-section">
        <p className="hello-text"><span>👋</span> Hello I am,</p>
        <h2>Anushka Verma</h2>
        <p>A Frontend Developer, trying to be good also at Data Structures & Algorithms</p>
        <div className="btn-section">
            <button type="button">Contact Me <span><PermIdentityIcon /></span></button>
            <button type="button">Resume <span><DownloadIcon /></span></button>
        </div>
      </div>
      <div className="hero-avatar-section">
        <img src={avatarImg} alt="avatar image" />
      </div>
    </div>
  )
}

export default HeroSection
