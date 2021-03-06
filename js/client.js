/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
.navbar-brand.topnav a:not(:first-child) {display: none;}
.navbar-brand a.icon {
        float: right;
        display: block;
    }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
.navbar-brand.topnav .responsive {position: relative;}
.navbar-brand.topnav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }
.navbar-brand.topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}