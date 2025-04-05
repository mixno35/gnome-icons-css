# GNOME Icons CSS
 A collection of GNOME-themed custom web icons as CSS.

### CDN Installation Instructions

To use the GNOME-themed custom web icons as CSS, follow these steps:

1. Link the CSS file to your HTML project:
   ```html
   <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mixno35/gnome-icons-css@latest/css/gnome-icons.css">
   ```
   
### Local Installation Instructions

1. Install the CSS file locally by command: 
   ```shell
   git clone https://github.com/mixno35/gnome-icons-css.git
   ```
1. Alternatively, you can install the CSS file locally by downloading it and linking it directly in your project from the [repository](https://github.com/mixno35/gnome-icons-css).
3. Link the local CSS file in your HTML project:
   ```html
   <link rel="preload" href="css/gnome-icons.css" as="style">
   <link rel="stylesheet" href="css/gnome-icons.css">
   ```

### Usage Instructions

1. Add the required `<link>` tags to your HTML file using the instructions provided above (CDN or local installation).

2. Use the GNOME icons in your HTML elements by applying the appropriate classes. For example:
   ```html
   <i class="gnome-icon gnome-icon-edit-copy"></i>
   <i class="gnome-icon gnome-icon-process-stop"></i>
   <i class="gnome-icon gnome-icon-folder-documents"></i>
   ```

   Replace `gnome-icon-edit-copy`, `gnome-icon-process-stop`, and `gnome-icon-folder-documents` with the specific icon class names you
   need. Refer to the full list of supported icons in the [website](https://mixno35.github.io/gnome-icons-css).

3. (Optional) Customize the icons' size or color using CSS. Example:
   ```css
   .gnome-icon {
       font-size: 24px;
       color: #4caf50;
   }
   ```