import React from 'react'
import {
  FaRegEnvelope as Email,
  FaFacebookSquare as Facebook,
  FaInstagram as Instagram,
  FaFacebookMessenger as Messenger,
  FaTwitter as Twitter,
  FaWhatsapp as WhatsApp
} from 'react-icons/fa'

const Icons = {
  Email,
  Facebook,
  Instagram,
  Messenger,
  Twitter,
  WhatsApp
}

const Social = ({ socialLinks }) => (
  <ul className="flex space-x-8 m-0 p-0 list-none">
    {socialLinks.map(({ label, url }, i) => {
      const Icon = Icons[label]

      return (
        <li key={i}>
          <a
            href={url}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-default hover:text-highlight"
          >
            <div>
              <Icon size="22px" />
            </div>
          </a>
        </li>
      )
    })}
  </ul>
)

export default Social
