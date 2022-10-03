let left = document.getElementById("left");
let right = document.getElementById("right");

let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let a4 = document.createElement("a");

let h = document.createElement("h1");
let para = document.createElement("p");

left.innerHTML = ` <a href="" onClick="getTable(event)">Table</a>
<a href="" onClick="getList(event)">List</a>
<a href="" onClick="getImage(event)">Image</a>
<a href="" onClick="getForm(event)">Forms</a>`;

right.innerHTML = `<h1>HTML Tables Concept</h1>
<p><br>
  HTML Table is an arrangement of data in rows and columns, or possibly
  in a more complex structure. Tables are widely used in communication,
  research, and data analysis. Tables are useful for various tasks such
  as presenting text information and numerical data. It can be used to
  compare two or more items in the tabular form layout.
</p>`;

let getHtml = (e) => {
  e.preventDefault();

  left.innerHTML = ` <a href="" onClick="getTable(event)">Table</a>
<a href="" onClick="getList(event)">List</a>
<a href="" onClick="getImage(event)">Image</a>
<a href="" onClick="getForm(event)">Forms</a>`;

  right.innerHTML = `<h1>HTML Tables Concept</h1>
<p><br>
  HTML Table is an arrangement of data in rows and columns, or possibly
  in a more complex structure. Tables are widely used in communication,
  research, and data analysis. Tables are useful for various tasks such
  as presenting text information and numerical data. It can be used to
  compare two or more items in the tabular form layout.
</p>`;
};

let getCss = (e) => {
  e.preventDefault();

  left.innerHTML = ` <a href="" onClick="getPosition(event)">Positions</a>
<a href="" onClick="getFlex(event)">Flex</a>
<a href="" onClick="getGrid(event)">Grid</a>
<a href="" onClick="getMedia(event)">Media Queries</a>`;

  right.innerHTML = `<h1>CSS Position Concept</h1>
<p><br>
The position property in CSS tells about the method of positioning for an element or an HTML entity. <br>
The positioning of an element can be done using the top, right, bottom, and left properties. These specify the distance of an HTML element from the edge of the viewport. To set the position by these four properties, we have to declare the positioning method.
</p>`;
};

let getJavascript = (e) => {
  e.preventDefault();

  left.innerHTML = ` <a href="" onClick="getPromises(event)">Promises</a>
<a href="" onClick="getAjax(event)">Ajax</a>
<a href="" onClick="getDom(event)">DOM</a>
<a href="" onClick="getEvents(event)">Events</a>`;

  right.innerHTML = `<h1>JavaScript Promises Concept</h1>
<p><br>
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. <br><br>
Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation. Promises do provide a better chance to a user to read the code in a more effective and efficient manner especially it that particular code is used for implementing multiple asynchronous operations.
</p>`;
};

let getBootstrap = (e) => {
  e.preventDefault();

  left.innerHTML = ` <a href="" onClick="getBootGrid(event)">Grid</a>
<a href="" onClick="getCard(event)">Card</a>
<a href="" onClick="getBootTable(event)">Table</a>
<a href="" onClick="getCarousel(event)">Carousel</a>`;

  right.innerHTML = `<h1>Bootstrap Grid Concept</h1>
<p><br>
Bootstrap grid is a very powerful tool that makes developing websites easier. It is made with flexbox hence fully responsive and also adjusts the items in the container according to the device width. The container is a wrapping element that wraps all other items and content on the web page. <br><br>
The bootstrap grid has 12 columns present it, although it is not necessary to make use of all the columns, the sum must not go beyond 12. They can also be merged to make wider columns as per the preference.<br><br>
The .row and .col classes can be used to create and manipulate the rows and columns of the grid respectively.
</p>`;
};

let getTable = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>HTML Tables Concept</h1>
  <p><br>
    HTML Table is an arrangement of data in rows and columns, or possibly
    in a more complex structure. Tables are widely used in communication,
    research, and data analysis. Tables are useful for various tasks such
    as presenting text information and numerical data. It can be used to
    compare two or more items in the tabular form layout.
  </p>`;
};

let getList = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>HTML List Concept</h1>
  <p><br>
  A list is a record of short pieces of related information or used to display the data or any information on web pages in the ordered or unordered form. For instance, to purchase the items, we need to prepare a list that can either be ordered or unordered list which helps us to organize the data & easy to find the item. Please refer to the HTML li type Attribute article for the various types of attributes that can be used with the ordered & unordered list.
  </p>`;
};

let getImage = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>HTML Image Concept</h1>
  <p><br>
  In this article, we will know the HTML Image, how to add the image in HTML, along with knowing its implementation & usage through the examples. In earlier times, the web pages only contains textual contents, which made them appear quite boring and uninteresting. Fortunately, it wasn’t long enough that the ability to embed images on web pages was added for users. In this article, we will know how to add images to the web page that will make the website attractive & various methods to insert the images.
  </p>`;
};

let getForm = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>HTML Form Concept</h1>
  <p><br>
  HTML Form is a document which stores information of a user on a web server using interactive controls. An HTML form contains different kind of information such as username, password, contact number, email id etc. 
  The elements used in an HTML form are check box, input box, radio buttons, submit buttons etc. Using these elements the information of an user is submitted on a web server.
  The form tag is used to create an HTML form.
  </p>`;
};

let getPosition = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>CSS Position Concept</h1>
  <p><br>
  The position property in CSS tells about the method of positioning for an element or an HTML entity. <br>
  The positioning of an element can be done using the top, right, bottom, and left properties. These specify the distance of an HTML element from the edge of the viewport. To set the position by these four properties, we have to declare the positioning method.
  </p>`;
};

let getFlex = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>CSS Flex Concept</h1>
  <p><br>
  The flex CSS shorthand property is the combination of flex-grow, flex-shrink, and flex-basis property. It is used to set the length of flexible items. The flex property is much responsive and mobile-friendly. It is easy to position child elements and the main container. The margin doesn’t collapse with the content margins. The order of any element can be easily changed without editing the HTML section.
  </p>`;
};

let getGrid = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>CSS Grid Concept</h1>
  <p><br>
  It is a CSS property that offers a grid-based layout system, with rows and columns, making it easier to design web pages without floats and positioning.
  </p>`;
};

let getMedia = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>CSS Media Queries Concept</h1>
  <p><br>
  The Media query in CSS is used to create a responsive web design. It means that the view of a web page differs from system to system based on screen or media types. The breakpoint specifies for what device-width size, the content is just starting to break or deform.
  </p>`;
};

let getPromises = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>JavaScript Promises Concept</h1>
<p><br>
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. <br><br>
Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation. Promises do provide a better chance to a user to read the code in a more effective and efficient manner especially it that particular code is used for implementing multiple asynchronous operations.
</p>`;
};

let getAjax = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>JavaScript Ajax Concept</h1>
<p><br>
Ajax stands for Asynchronous JavaScript and XML. It is used to make asynchronous communication with the server. Ajax is used to read data from the server and update the page or send data to the server without affecting the current client page. Ajax is a programming concept. 
</p>`;
};

let getDom = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>JavaScript DOM Concept</h1>
<p><br>
Create an web interface to select and update elements from the webpage.  Add and remove elements using the form input and select options.  Demonstrates how to apply DOM manipulation, make element selection all while creating a fun interactive web application.
</p>`;
};

let getEvents = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>JavaScript Events Concept</h1>
<p><br>
Javascript has events to provide a dynamic interface to a webpage. These events are hooked to elements in the Document Object Model(DOM). 
These events by default use bubbling propagation i.e, upwards in the DOM from children to parent. We can bind events either as inline or in an external script. 
</p>`;
};

let getBootGrid = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>Bootstrap Grid Concept</h1>
<p><br>
Bootstrap grid is a very powerful tool that makes developing websites easier. It is made with flexbox hence fully responsive and also adjusts the items in the container according to the device width. The container is a wrapping element that wraps all other items and content on the web page. <br><br>
The bootstrap grid has 12 columns present it, although it is not necessary to make use of all the columns, the sum must not go beyond 12. They can also be merged to make wider columns as per the preference.<br><br>
The .row and .col classes can be used to create and manipulate the rows and columns of the grid respectively. 
</p>`;
};

let getCard = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>Bootstrap Card Concept</h1>
<p><br>
A Bootstrap card is a flexible box containing some padding around the content. It includes the options for headers and footers, color, content, and powerful display options. It replaces the use of panels, wells, and thumbnails. It can be used in a single container called card. 
</p>`;
};

let getBootTable = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>Bootstrap Table Concept</h1>
<p><br>
Bootstrap provides a series of classes that can be used to apply various styling to the tables such as changing the heading appearance, making the rows stripped, adding or removing borders, making rows hoverable, etc. Bootstrap also provides classes for making tables responsive.
</p>`;
};

let getCarousel = (e) => {
  e.preventDefault();
  right.innerHTML = `<h1>Bootstrap Carousel Concept</h1>
<p><br>
In this article, we will see how to create an image slide show for your webpage to make it look more attractive. For this, we will use bootstrap Carousel.<br>

It can be included in your webpage using “bootstrap.js” or “bootstrap.min.js”. Carousels are not supported properly in Internet Explorer, this is because they use CSS3 transitions and animations to achieve the slide effect.
</p>`;
};
