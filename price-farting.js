// Bookmarklet code:
// javascript:(function()%7B%2F%2F%20Get%20all%20text%20nodes%20in%20the%20DOM%0Afunction%20getAllTextNodes(node)%20%7B%0A%20%20var%20allTextNodes%20%3D%20%5B%5D%3B%0A%20%20if%20(node.nodeType%20%3D%3D%20Node.TEXT_NODE)%20%7B%0A%20%20%20%20%20%20allTextNodes.push(node)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20var%20children%20%3D%20node.childNodes%3B%0A%20%20%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20children.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20allTextNodes%20%3D%20allTextNodes.concat(getAllTextNodes(children%5Bi%5D))%3B%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20allTextNodes%3B%0A%7D%0A%0A%2F%2F%20Replace%20all%20occurrences%20of%20a%20given%20text%20with%20a%20new%20text%0Afunction%20replaceTextInDOM(oldText%2C%20newText)%20%7B%0A%20%20var%20textNodes%20%3D%20getAllTextNodes(document.body)%3B%0A%20%20textNodes.forEach(function(node)%20%7B%0A%20%20%20%20%20%20node.nodeValue%20%3D%20node.nodeValue.replace(new%20RegExp(oldText%2C%20%22g%22)%2C%20newText)%3B%0A%20%20%7D)%3B%0A%7D%0A%0A%2F%2F%20Replace%20src%20attribute%20of%20img%20elements%20that%20are%20children%20of%20a%20div%20with%20a%20specific%20class%0Afunction%20replaceImgSrc(className%2C%20newSrc)%20%7B%0A%20%20var%20divElements%20%3D%20document.querySelectorAll(%22div.%22%20%2B%20className)%3B%0A%20%20divElements.forEach(function(div)%20%7B%0A%20%20%20%20%20%20var%20img%20%3D%20div.querySelector(%22img%22)%3B%0A%20%20%20%20%20%20if%20(img)%20%7B%0A%20%20%20%20%20%20%20%20%20%20img.src%20%3D%20newSrc%3B%0A%20%20%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D%0A%0A%0A%2F%2F%20Call%20the%20function%20with%20the%20text%20to%20replace%20and%20the%20new%20text%2C%20and%20src%20attribute%20to%20replace%20on%20page%20load%0AreplaceTextInDOM(%22Ape%20Escape%22%2C%20%22Little%20Samson%22)%3B%0AreplaceImgSrc(%22cover%22%2C%20%22https%3A%2F%2Fcommondatastorage.googleapis.com%2Fimages.pricecharting.com%2Ffb36d496cfda7b0e115eb37441bea298f74f4670243232acc7f9a70e05251d97%2F240.jpg%22%20)%3B%0Aalert(%22Price%20Farted!%22)%7D)()%3B
// When the below code is updated, copy paste it into https://caiorss.github.io/bookmarklet-maker/ to get the up-to-date bookmarklet
// For information on saving and executing bookmarklets, see https://android.stackexchange.com/questions/159308/how-can-a-bookmarklet-be-added-on-mobile-chrome-without-copying-and-pasting

// Get all text nodes in the DOM
function getAllTextNodes(node) {
  var allTextNodes = [];
  if (node.nodeType == Node.TEXT_NODE) {
      allTextNodes.push(node);
  } else {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
          allTextNodes = allTextNodes.concat(getAllTextNodes(children[i]));
      }
  }
  return allTextNodes;
}

// Replace all occurrences of a given text with a new text
function replaceTextInDOM(oldText, newText) {
  var textNodes = getAllTextNodes(document.body);
  textNodes.forEach(function(node) {
      node.nodeValue = node.nodeValue.replace(new RegExp(oldText, "g"), newText);
  });
}

// Replace src attribute of img elements that are children of a div with a specific class
function replaceImgSrc(className, newSrc) {
  var divElements = document.querySelectorAll("div." + className);
  divElements.forEach(function(div) {
      var img = div.querySelector("img");
      if (img) {
          img.src = newSrc;
      }
  });
}


// Call the function with the text to replace and the new text, and src attribute to replace on page load
replaceTextInDOM("Ape Escape", "Little Samson");
replaceImgSrc("cover", "https://commondatastorage.googleapis.com/images.pricecharting.com/fb36d496cfda7b0e115eb37441bea298f74f4670243232acc7f9a70e05251d97/240.jpg" );
alert("Price Farted! *toot*")
