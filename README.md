# NGO Website

## The Problem
A lot of small, local NGOs are doing incredible work on the ground, but you’d never know it by looking at their websites. Most of them are either outdated or non-existent, which kills their visibility on Google and makes it hard for people to actually find and support them. On top of that, it makes them look less professional and trustworthy.

## The Solution
I’m building a high-performance, one-page template designed specifically to get these NGOs online quickly to gain visibility on Google. I wanted to use vanilla HTML, CSS, and JS to ensure that the website stays fast, reliable, and incredibly easy to host (for free) without any tech stack or deployment headaches. I wanted it to be simple, efficient and SEO-friendly.

## Thought Process
### Project Structure:
I started by creating the file structure for the project and making sure it stays simple yet efficient and modular in order to make it easy to change and add files on the go.
### Variables:
I put in place the CSS variables I need in order to have a consistent design language that looks professional and clean.
### Reset:
I implemented CSS reset attributes to get a consistent design on all browsers.
### Override:
I put in place some default reusable classes that I can use to style HTML components directly to speed up the development process and avoid repetitive and time-consuming tasks.
### HTML:
I wrote some base HTML and added links to the font and RemixIcon CDN.
### Website Structure:
I thought about the website structure and overall layout. I decided to go for a classic multi-section design to keep it simple for the users and also to minimize development time (since it's the simplest way to design a website).
### Website CSS:
I fixed and polished the CSS attributes and made sure to use my variables to get a consistent design all over the website.
### Current Navbar Link:
I added some JS and CSS to make the navbar link of the current section the user is in to light up in blue to make sure the user knows what section of the website he's in. This is a glow-up for accessibility and user experience.
### Animations:
I added on scroll and on refresh animations to the website to make it feel more premium, modern and less boring. I did this using CSS keyframes and JS to find out when the user is going to scroll.
### SEO Best Practices:
I tried to make the website more SEO-friendly by including meta tags, use semantic tags instead of generic divs, and use alt and aria-label attributes for accessibility. I got 100 SEO on lighthouse report. This is crucial for the website's visbility on search engines.
### Multi-Language Support:
I added a JSON-based translation system that lets the user swap between French, English, and Arabic instantly. I used JS to handle the text injection on the page and added right to left text logic to the CSS to make sure the layout flips and looks good for arabic. This is important for local moroccan NGOs since english, french and arabic are the main languages used in morocco.

## Issues Encountered
### Transitions:
The implementation of transitions caused a weird color change on all components when changing theme from light to dark and vice versa. I couldn't find a way to control this without it looking weird.
### Readability:
I couldn't figure out how to get good contrast on text in buttons.
### Footer Position:
I had some issues putting the footer at the very end of the page. I fixed this issue by giving the body the flex property and added flex:1 to the main tag of the HTML, which caused the footer to go all the way down on the page.
### Timeline Layout:
In the our story section, I struggled to build a clean timeline layout with cards and dates. After a long time of debugging and finding the problem with the help of AI, I managed to fix it and get a decent result.
### Photo Gallery Layout:
On tablet size, the photo gallery had some issues where the images were mispositioned, causing them to show up in a weird kind of way. I added some media queries for that screen size, which solved the issue (the images now get stacked up on top of each other when the screen is smaller than a certain size).
### Performance Score on Lighthouse:
I got 75 performance score after I did a lighthouse report in the browser. After learning about SEO best practices online, I figured that my images make the score drop down because of loading times. I fixed this later on by adding some attributes to the images and font links. After putting in place the fixes and changes, I managed to get as high as 99 in performance.
### Animations:
Currently, the user can hover over a component before the animation plays which makes it come up on the screen before it's supposed to. I still didn't figure out how to fix this, I marked it as an issue to fix for later since it's a minor bug.
### Multi-Language support:
I was first going to use a framework to achieve this, but then I figured that this might complicate the website and add uneccessary  loading times, making the website slower and more difficult to manage. Since the website is small anyway, I decided to use a json file with translations and some JS to add multi-language support, ensuring that the websites stays lighting-fast and light.

## Future Fixes & Enhancements
* [ ] Enhance text contrasts on buttons.
* [X] Add animations.
* [X] Add multi-language support.
* [] Fix minor animations issues (Hover, delay).
* [X] Enhance performance.
* [X] Enhance SEO and accessibility.
* [ ] Add social media feed.

## Tech Stack
As mentioned before, I used vanilla HTMl, CSS, JS for this project to keep it lighting-fast, efficient, and SEO-friendly to have good ranking on Google search results (critical for visibility).

## Project Structure

## AI Use
I have tried my best to use AI chabots (primarly Gemini) as a learning tool rather than letting it build things for me. It helped me brainstorm ideas, find inspiration, fix annoying bugs, and learn new things such as Git commands, new CSS properties, or even best web dev practices.

## License
This project is open-source and released under the **MIT License**. Click the `License` tab for more information.