import React from 'react'
import {
  FaRegEnvelope as Email,
  FaFacebookSquare as Facebook,
  FaInstagram as Instagram,
  FaFacebookMessenger as Messenger,
  FaTwitter as Twitter,
  FaWhatsapp as Whatsapp
} from 'react-icons/fa'

const Icons = {
  Email,
  Facebook,
  Instagram,
  Messenger,
  Twitter,
  Whatsapp
}

const Social = ({ socialLinks }) => (
  <ul className="flex space-x-8 m-0 p-0 list-none">
    {socialLinks.map((social, i) => {
      const Icon = Icons[social.label]

      return (
        <li key={i}>
          {social.url && (
            <a
              href={social.url}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-default hover:text-highLight"
            >
              <div>
                <Icon size="22px" />
              </div>
            </a>
          )}
        </li>
      )
    })}
  </ul>
)

export default Social
