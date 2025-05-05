import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';
import { FaSquareXTwitter, FaGoogle } from 'react-icons/fa6';
import { FaA } from "react-icons/fa6";


const socialIcons = [
  { icon: FaGithub, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "GitHub", href: "https://github.com/kanuj21" },
  { icon: FaLinkedin, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "LinkedIn", href: "https://www.linkedin.com/in/ambuj-vats-649a7b11b/" },
  { icon: SiLeetcode, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "LeetCode", href: "https://leetcode.com/u/Amb_code/" },
  { icon: FaSquareXTwitter, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "Twitter", href: "https://x.com/ambuj8848" },
  { icon: FaGoogle, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "GFG", href: "https://www.geeksforgeeks.org/user/kanuj2151/" },
  { icon: FaA, size: 32, color: "#70B8FF", className: "hover:text-slate-600", title: "Ambuj", href: "https://my-portfolio-green-omega.vercel.app/" },
];

export default function Footer() {
    return (
    <div className="flex flex-col w-full bg-teal-800 justify-center items-center">
      <div className="py-16 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-white lg:text-4xl text-xl font-medium">
          Visit My Portfolio <span className="text-gray-900 opacity-80">
            <a target="_blank" href="https://my-portfolio-green-omega.vercel.app/">Click Here</a></span>
        </h1>

        <div className='flex flex-row gap-5 justify-center items-center'>
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" title={icon.title}>
              <span>
                <icon.icon
                  style={{
                    width: `${icon.size}px`,
                    height: `${icon.size}px`,
                    color: icon.color
                  }}
                  className={icon.className}
                />
              </span>
            </a>
          ))}
        </div>

        <div className='flex justify-center items-center'>
          <a href="mailto:tomail.ambuj@gmail.com" className='text-xl text-orange-600'>
            tomail.ambuj@gmail.com
          </a>
        </div>

        <div className='flex justify-center flex-col'>
          <p className='text-slate-400 text-sm'>Crafting Scalable Solutions with Passion & Code.</p>
          <p className='text-slate-400 text-sm flex justify-center'>&#169;2025 built by @ambuj.</p>
        </div>
      </div>
    </div>
  );
}
