# holbertonschool-web_front_end

![Imgur](https://i.imgur.com/er3CYqk.jpg)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

### General
- Which guidelines to follow for HTML
- How to create the skeleton of an HTML5 page
- How to use semantic HTML tags to structure a web page
- Which use cases to use div vs span
- The semantic value’s of header, main, footer, article, nav, section, aside
- How to use headings (and why it’s important to follow the hierarchical order) 
- How to make lists in HTML
- The differences between medias (SVG, GIF, PNG, JPG)
- How to structure data in a table
- How to integrate a video in a webpage
- How to integrate an audio file in a webpage
- How to embed external content
- How to correctly structure an HTML page

---

## 0. Create your first webpage

Create your first HTML file 0-index.html with:

- Add the doctype on the first line (without any comment)
- After the doctype, open and close a html tag
- Add the language tag, specify English for ISO language code and add the direction tag (ltr or rtl) on the html tag.
- Open your file in your browser (the page should be blank)


## 1. Structure your webpage mandatory

Copy the content of 0-index.html into 1-index.html

Create the head and body sections
- inside the html tag, create the head and body tags (empty) in this order

## 2. The head - meta charset, viewport, title, description, favicons mandatory

Copy the content of 1-index.html into 2-index.html

Meta charset:

- add a meta tag inside the head:
    - add the charset attribute with the value utf-8

Viewport:

- add a meta tag inside the head:
    - add an attribute name on the tag and specify that it is the meta viewport
    - add the key width with the value device-width
    - add the key initial-scale with the value 1.0
    - add the key viewport-fit with the value cover

Title:

- add the title tag just after the meta viewport with value: Homepage - Techium

Description:

- add a meta tag inside the head section
    - add an attribute name on the tag and specify that is the meta description
    - add another attribute called content
    - add the following description: Techium is a digital agency

Favicons:

- download the image above to use as a favicon
- Use the tool at https://realfavicongenerator.net/ to generate all the favicon formats
- take the favicon.ico and favicon.png and place these at the root of your project directory, so that it is siblings with your [0-9]+-index.html files.
- inside the head, create 2 link tags with these 3 attributes: rel, type, and href.
    - the first link tag:
        - rel: icon
        - type: image/x-icon
        - href: ./favicon.ico
    - the second link tag:
        - rel: icon
        - type: image/png
        - href: ./favicon.png


## 3. Simple header, main, footer mandatory

Copy the content of 2-index.html into 3-index.html

Header:
- create the header of your page between the open and close body tag put the text Header inside the header

Main:
- create the main tag after the header tag put the text Main content inside your main tags

Footer:
- create the footer tag after the main tag put the text Footer inside the footer tags

## 4. Aside mandatory

Copy the contents of 3-index.html into article.html

- change the <title> to put: Article - Techium
- inside the main tags after the text, create the aside tags with text Aside

##  5. Section mandatory

Copy the content of 3-index.html into 5-index.html

- inside your <main> section remove the text in main, create these sections:
    - create first section and put the text Hero section inside
    - create second section and put the text Services section inside
    - create third section and put the text Works section inside
    - create fourth section and put the text About section inside
    - create fifth section and put the text Latest news section inside
    - create sixth section and put the text Testimonials section inside
    - create seventh section and put the text Contact section inside

##  6. Work, News, Testimonial articles mandatory

Copy the content of 5-index.html into 6-index.html

Work articles:
- inside the section Works section add 3 article tags inside each article write Work # where the hashtag will be the ordered number (1, 2, or 3)

News articles:
- inside the section Latest news section add 3 article tags inside each article write Article # where the hashtag will be the ordered number (1, 2, or 3)

Testimonial articles:
- inside the section Testimonials section add 3 article tags inside each article write Testimonial # where the hashtag will be the ordered number (1, 2, or 3)

##  7. Navigation mandatory

Copy the content of 6-index.html into 7-index.html

- remove the Header text inside the <header>
- create the nav tag inside the header tag
    - it should remain empty for now

##  8. Level 1 headings mandatory

Copy the content of 7-index.html into 8-index.html

- create the level 1 heading inside your main before your sections
    - put text Homepage in your heading tag


##  9. Level 2 headings mandatory

Copy the content of 8-index.html into 9-index.html

- in the section tag with the the text Hero section, remove the text and create a level 2 heading with text We help you build your brand!
- in the section tag with the the text Services section, remove the text and create a level 2 heading with text Services
- in the section tag with the the text Works section, remove the text and create a level 2 heading with text Works
- in the section tag with the the text About section, remove the text and create a level 2 heading with text About Us
- in the section tag with the the text Latest news section, remove the text and create a level 2 heading with text Latest news
- in the section tag with the the text Testimonials section, remove the text and create a level 2 heading with text Testimonials
- in the section tag with the the text Contact section, remove the text and create a level 2 heading with text Contact


##  10. Level 3 headings mandatory

Copy the content of 9-index.html into 10-index.html

Services headings:

- Inside the section containing the h2 heading Services, add these elements right after the h2:
    - create a level 3 heading with text Design & Concept
    - create a level 3 heading with text Digital Strategy
    - create a level 3 heading with text Content Strategy
    - create a level 3 heading with text UX Design
    - create a level 3 heading with text Web Development
    - create a level 3 heading with text Social Media

Works headings:

- Inside the section containing the h2 heading Works:
    - in the first article, replace the text with a level 3 heading with text Interior Design
    - in the second article, replace the text with a level 3 heading with text Web Development
    - in the third article, replace the text with a level 3 heading with text Personal Brand

About Us headings:

- Inside the section containing the h2 heading About Us, after the h2 heading, create these elements in this order:
    - a level 3 heading with text Who are we
    - a level 3 heading with text Our culture
    - a level 3 heading with text How we work

Latest news headings:

- Inside the section containing the h2 heading Latest news:
    - in the first article replace the text with a level 3 heading with text Hoc loco tenere se Triarius non potuit.
    - in the second article replace the text with a level 3 heading with text Ut alios omittam, hunc appello, quem ille unum secutus est.
    - in the third article replace the text with a level 3 heading with text Bestiarum vero nullum iudicium puto.


##  11. styleguide mandatory

Copy the content of 3-index.html into 11-styleguide.html

- change the title to Styleguide - Techium
- remove the text from header, main, and footer
- create a new <section> inside your main tag
    - create a header in this section
        - in the header add a level 2 heading with text Headings
    - after the header:
        - add a level 1 heading with text Heading level 1
        - add a level 2 heading with text Heading level 2
        - add a level 3 heading with text Heading level 3
        - add a level 4 heading with text Heading level 4
        - add a level 5 heading with text Heading level 5
        - add a level 6 heading with text Heading level 6


---

## Author
* **Mafe** - [Madez17](https://github.com/Madez17)
