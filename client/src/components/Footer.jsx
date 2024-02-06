import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  // BsGithub,
  // BsDribbble,
  BsYoutube,
  BsLinkedin,
  BsMailbox,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <div className=" container flex">
                <div>
                  <img
                    className="h-8"
                    src="https://velocitytech.in/images/v.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="mx-1 text-2xl text-black">Blogs</div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="http://www.velocitytech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VelocityTech
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Velocitytech Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sahandghavidel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://www.velocitytech.in"
            by="velocitytech"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/people/Velocity-Tech/61550579938102/?sk=photos"
              icon={BsFacebook}
            />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon
              href="https://twitter.com/Velocity_Tech_"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.youtube.com/@VelocityTechJnp"
              icon={BsYoutube}
            />
            <Footer.Icon
              href="https://www.linkedin.com/company/velocitytechinfo/?viewAsMember=true"
              icon={BsLinkedin}
            />
            <Footer.Icon href="mailto:info@velocitech.in" icon={BsMailbox} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
