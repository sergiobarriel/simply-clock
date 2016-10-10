### **Description**
**Simply Clock** it's script to show really simple clock.

### **How to use**

Add the reference to **simply-clock.js** or **simply-clock.min.js** script:

```html
<script type="text/javascript" src="simply-clock.js"></script>
```

Add the HTML container and includes an identifier:

```html
<div id="mySimplyClock"></div>
```

Finally, you need instace the object:

```html
<script type="text/javascript">
    window.onload = function() {
        clock = new SimplyClock('mySimplyClock', ':', 'hms');
        clock.start();
    };
</script>
```
### **Parameters**

You need to pass 3 parameters:

  * **Identifier**: The Id of your HTML container.
  * **Separator**: Character to separate digits.
  * **Format**: Available characters are "h" for hours, "m" for minutes and "s" for seconds. Combine them as you need.
  
### **Style**

**Simply clock** outputs the next HTML structure:

```html
<div id="mySimplyClock">
    <div class="simple-clock" id="36b6-eb83-2b44-431d-fa23">
        <span class="hours">11</span>
        <span class="separator">:</span>
        <span class="minutes">29</span>
        <span class="separator">:</span>
        <span class="seconds">40</span>
    </div>
</div>
```

You can add to the stylesheet the properties you need by using this CSS selectors:

```css
.simple-clock { }
.simple-clock > span.hours { }
.simple-clock > span.minutes { }
.simple-clock > span.seconds { }
.simple-clock > span.separator { }
```

### **Contact**
You can contact me via Twitter [@s3rgiobc](https://twitter.com/s3rgiobc)
