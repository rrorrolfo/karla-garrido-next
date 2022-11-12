import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MovieIcon from "@mui/icons-material/Movie";

const menuLinks = [
  {
    text: "instagram",
    title: "text",
    url: "instagram.com",
    icon: <InstagramIcon />,
  },
  {
    text: "facebook",
    title: "text",
    url: "instagram.com",
    icon: <FacebookIcon />,
  },
  {
    text: "youtube",
    title: "text",
    url: "instagram.com",
    icon: <YouTubeIcon />,
  },
  {
    text: "reel",
    title: "text",
    url: "instagram.com",
    icon: <MovieIcon />,
  },
  {
    text: "idm",
    title: "text",
    url: "instagram.com",
    icon: <YouTubeIcon />,
  },
];

const MenuPods = () => {
  return (
    <ul>
      {menuLinks.map(({ url, text, title, icon }) => (
        <li key={text}>
          <a
            href={url}
            title={title}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {icon}
            <span>{text.toUpperCase()}</span>
          </a>
        </li>
      ))}
      <style jsx>
        {`
          ul {
            list-style: none;
            display: flex;
            padding: 0;
            flex-wrap: wrap;
            justify-content: space-evenly;
            padding: auto;
            width: 85%;
            margin: auto;
          }

          li {
            margin: 0 10px 15px 0;
            background-color: rgb(0, 0, 0);
            color: rgb(255, 255, 255);
            border-radius: 25px;
            font-size: 18px;
          }

          a {
            height: 100%;
            padding: 15px;
            border-radius: 25px;
            display: flex;
            alignitems: center;
            flexwrap: "wrap";
          }

          span {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 900;
          }

          @media (min-width: 960px) {
            ul {
              justify-content: flex-start;
              margin: 0;
              width: 90vw;
              margin: auto;
            }
          }
        `}
      </style>
    </ul>
  );
};

export default MenuPods;
