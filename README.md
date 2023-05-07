# Learning web design
this project contains my learning process form web design with focus on **HTML,** **CSS** and **JavaScript**

## HTML
This stands for _hypertext markup language_ is a systemized way of tagging text file.The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets **CSS** and scripting languages such as **JavaScript**.

**In this project, i learnt**
- ## The HTML document structure ##

An HTML document is divided into two parts: _Head part:_ The title and metadata of a web document are contained in the head element. _Body part:_ The body element includes the information that you wish to display on a web page.

1.The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag. Metadata is data about the HTML document. Metadata is not displayed.

2.The `<body>` tag defines the document's body. The `<body>` element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        <P>Hello world</P>
    </body>
</html>
```
- The `<header>` tag 

```html
<>This is a header tag</header>
```

 The `<header>` HTML tag represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, and other elements, etc.



- The paragraph tag
```html
<p>This is a paragraph</p>
```
The `<p>` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields

- Table tag
```html
<table></table> this is a table tag
<tr></tr> this is a table rule tag
<th></th> this is a table header tag 
<tbody> this tag entail the content of the table
<tr></tr>this is a table rule tag
<td></td>
  ```
Table tag in html is used to classify data into columns and row hence producing a table 




- The Heading tag 
```html
<h1>this is a h1 (The largest heading tag) tag</h1>
```
The heading tag is used in HTML to define headings of a page. Headings are defined by `<hn>` , with `“n”` being a number between `1` and `6`, and determines which position a heading has in the hierarchy of the heading structure. Heading tags have a particularly important function within an HTML structure.

- Hexadecimal colors in css

Hex color codes start with a pound sign or hashtag (#) and are followed by six letters and/or numbers. The first two letters/numbers refer to red, the next two refer to green, and the last two refer to blue. The color values are defined in values between 00 and FF (instead of from 0 to 255 in RGB).
```html
White	#FFFFFF	rgb(255, 255, 255)
Silver	#C0C0C0	rgb(192, 192, 192)
Gray	#808080	rgb(128, 128, 128)
Black	#000000	rgb(0, 0, 0)
Red	#FF0000	rgb(255, 0, 0)
Maroon	#800000	rgb(128, 0, 0)
Yellow	#FFFF00	rgb(255, 255, 0)
Olive	#808000	rgb(128, 128, 0)
Lime	#00FF00	rgb(0, 255, 0)
Green	#008000	rgb(0, 128, 0)
Aqua	#00FFFF	rgb(0, 255, 255)
Teal	#008080	rgb(0, 128, 128)
Blue	#0000FF	rgb(0, 0, 255)
Navy	#000080	rgb(0, 0, 128)
Fuchsia	#FF00FF	rgb(255, 0, 255)
Purple	#800080	rgb(128, 0, 128)
```


## 05/04/2023
# Git commands
- command to initialize a project
```git
git init
```
- command to add folders
> files can be added individually like this 
```git
git add filename
```
>Multiple files could also be added, like this
(asterix* marks file type) 

 ```git
git add .\html\* (foldername) .html(every file saved as an html inselected .\html\. folder)
```
- command to configure name globally
```git
git config --global user.name "name"
git config --global user.email "email"
```
- command to commit a project

```git
git commit -m "initialized project"
```

- command to view project 
```git
git log
```
- To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main
