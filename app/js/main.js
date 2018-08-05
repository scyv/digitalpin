var rootMenuId = "root";
var wallContent = "";

var headerElement = document.querySelector(".header");
var shortCutsElement = document.querySelector(".shortcuts");
var wall = document.querySelector("#menu-" + rootMenuId);

if (typeof wallData === "undefined") {
  alert("No data.js found.");
  throw new Error("No data.js found");
}

function applyTheme(theme) {
  var css = (function () {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
  })();

  if (theme.bodyBackground) {
    css.insertRule("body { background: " + theme.bodyBackground + ";}");
  }
  if (theme.containerBackground) {
    css.insertRule(".header { background: " + theme.containerBackground + ";}");
    css.insertRule(".shortcuts { background: " + theme.containerBackground + ";}");
    css.insertRule(".card { background: " + theme.containerBackground + ";}");
  }
  if (theme.containerFontColor) {
    css.insertRule(".header { color: " + theme.containerFontColor + ";}");
    css.insertRule(".shortcuts { color: " + theme.containerFontColor + ";}");
    css.insertRule(".card { color: " + theme.containerFontColor + ";}");
  }
  if (theme.mainMenuBackground) {
    css.insertRule(".depth-0 > .card-header > div { background: " + theme.mainMenuBackground + ";}");
  }
  if (theme.mainMenuFontColor) {
    css.insertRule(".depth-0 > .card-header > div { color: " + theme.mainMenuFontColor + ";}");
  }
  if (theme.menuItemHoverBackground) {
    css.insertRule(".card-header:hover { background: " + theme.menuItemHoverBackground + ";}");
    css.insertRule(".card-header:active { background: " + theme.menuItemHoverBackground + ";}");
    css.insertRule(".card-header:focus { background: " + theme.menuItemHoverBackground + ";}");
  }
  if (theme.menuItemHoverFontColor) {
    css.insertRule(".card-header:hover { color: " + theme.menuItemHoverFontColor + ";}");
    css.insertRule(".card-header:active { color: " + theme.menuItemHoverFontColor + ";}");
    css.insertRule(".card-header:focus { color: " + theme.menuItemHoverFontColor + ";}");
  }
}

function getMenuItemHtml(item, id, parentId, depth) {
  var body = "";

  if (item.image) {
    body += '<img class="" src="images/' + item.image + '" alt="' + item.image + '">';
  }

  if (item.text) {
    body += item.text;
  }

  var isLeaf = "";
  if (item.menuitems) {
    body += '<div class="accordion" id="menu-' + id + '">';
    item.menuitems.forEach(function (child, idx) {
      body += getMenuItemHtml(child, id + "-" + idx, id, depth + 1);
    });
    body += '</div > ';
  } else {
    isLeaf = "leaf";
  }

  if (item.link) {
    body += ' <a href="' + item.link + '" class="btn btn-link btn-sm" title="' + item.link + '">' + item.link + '</a>';
  }

  if (item.files) {
    var files = '<p class="card-text"><ul class="list-group">';
    item.files.forEach(function (file) {
      files += '<li class="list-group-item"><a href="files/' + file + '" target="_blank" title="' + file + '">&raquo;  ' + file + '</a></li>';
    });
    files += '</ul></p>';
    body += files;
  }

  var parentRef = '';
  if (item.closeParent) {
    parentRef = 'data-parent="#menu-' + parentId + '"';
  }

  var widthStyle = 'style="clear:both;"';
  if (item.size) {
    widthStyle = 'style="width: ' + item.size + '; float: left; ' + (item.clearFloat ? "clear:both;" : "") + '"';
  }

  var show = item.open ? "show" : "";

  return (
    '<div class="card depth-' + depth + '" ' + widthStyle + '>' +
    '<div class="card-header" id="heading-' + id + '">' +
    '  <div data-toggle="collapse" data-target="#collapse-' + id + '" aria-expanded="true" aria-controls="collapse-' + id + '">' + item.title + '</div>' +
    '</div>' +
    '<div id="collapse-' + id + '" class="collapse ' + show + '" aria-labelledby="heading-' + id + '" ' + parentRef + '>' +
    '  <div class="card-body ' + isLeaf + '">' + body + '  </div>' +
    '</div>' +
    '</div>'
  );
}

headerElement.textContent = wallData.title ? wallData.title : "";
document.title = wallData.title ? wallData.title : "";

var shortCuts = wallData.shortcuts;
if (shortCuts) {
  var shortCutsParts = "";
  shortCuts.forEach(function (sc) {
    shortCutsParts += '<a href="' + sc.link + '" title="' + sc.title + '">&raquo;&nbsp;' + sc.title + '&nbsp;&laquo;</a>';
  });
  shortCutsElement.innerHTML = shortCutsParts;
} else {
  shortCutsElement.innerHTML = "";
}

var menuItems = wallData.menuitems;
if (menuItems) {
  menuItems.forEach(function (item, idx) {
    wallContent += getMenuItemHtml(item, idx, rootMenuId, 0);
  });
  wall.innerHTML = wallContent;
}

if (wallData.theme) {
  applyTheme(wallData.theme);
}

