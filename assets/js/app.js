jQuery('.style-picker div').click(function() {
  var target = $(this).attr('id');
  $(this).addClass('item_warna active').siblings().removeClass('item_warna active');
  $('#' + target).show().siblings('div').hide();
});

$('.btn_ticker li').click(function() {
  $(this).toggleClass('item_varian picker').siblings().removeClass('item_varian picker');
});

/*$('.style-picker div').click(function() {
  var target = $('#viewStock');
  $(target).addClass('active').siblings().removeClass('active');
  $(target).show().siblings('span').hide();
});
// Ambil elemen tombol pembelian
var tombolBeli = document.getElementById("cartButton");

// Ambil elemen jumlah stok
const jumlahStok = document.querySelector('#stokHabis');

// Cek apakah jumlah stok kosong pada varian tertentu
if (jumlahStok.active = false) {
  // Nonaktifkan tombol pembelian
  tombolBeli.disabled = true;
} else {
  // Aktifkan tombol pembelian
  tombolBeli.disabled = false;
}*/

function gridster() {
    var grid = document.getElementById("grid");
        if (grid.className == "blog_section") {
        grid.className = "blog_gridster";
    } else {
        grid.className = "blog_section";
    }
}
const animateOnScroll = document.querySelector('.animate_on_scroll');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = animateOnScroll.offsetTop + animateOnScroll.offsetHeight / 2;
  if (scrollPosition >= elementPosition) {
    animateOnScroll.classList.add('animate');
  }
});

function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
  var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
  var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

$(".like-btn").click( function() {
	$(this).toggleClass('clicked');
  event.preventDefault();
});
$(".fav_btn span").click(function(){
    var btnStorage = $(this).attr("id");
        if($(this).hasClass("clicked")) {
        localStorage.setItem(btnStorage, 'true');
    } else {
        localStorage.removeItem(btnStorage, 'true');
    }
});
$( ".fav_btn span" ).each(function() {
    var mainlocalStorage = $( this ).attr( "id" );
        if(localStorage.getItem(mainlocalStorage) == 'true') {
        $(this).addClass("clicked");
    } else {
        $(this).removeClass("clicked");
    }
});    

function setLanguage(lang) {
      var elements = document.getElementsByClassName('lang');
       if (lang === 'en') {
      } else if (lang === 'id') {
}

  var date = new Date();
  date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = "language=" + lang + ";" + expires + ";path=/";

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var key = element.getAttribute('data-key');
    var translation = translations[key][lang];
        element.innerHTML = translation;
      }
}

document.getElementById("en-btn").addEventListener("click", function() {
  setLanguage('en');
});

document.getElementById("id-btn").addEventListener("click", function() {
  setLanguage('id');
});

window.onload = function() {
    var language = getCookie("language");
    if (language) {
        setLanguage(language);
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

const popup = document.getElementById("PopUp");
const closeButton = document.getElementById("closeBtn");

function showPopup() {
  popup.style.display = "flex";
}

function hidePopup() {
  popup.style.display = "none";
}

function setLastShownTime() {
  const currentTime = Date.now();
  localStorage.setItem("lastShownTime", currentTime);
}

function getLastShownTime() {
  return localStorage.getItem("lastShownTime");
}

function isSixHoursSinceLastShown() {
  const lastShownTime = getLastShownTime();
  if (!lastShownTime) {
    return true;
  }
  const currentTime = Date.now();
  const timeDifference = currentTime - lastShownTime;
  const sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
  return timeDifference >= sixHoursInMilliseconds;
}

if (isSixHoursSinceLastShown()) {
  showPopup();
}

closeButton.addEventListener("click", () => {
  hidePopup();
  setLastShownTime();
});


function setCookie() {
	document.cookie = "cookieNotificationShown=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
	document.querySelector(".popup-container").style.display = "none";
}

function checkCookie() {
	if (document.cookie.indexOf("cookieNotificationShown=true") == -1) {
		document.querySelector(".popup-container").style.display = "flex";
	}
}

window.onload = checkCookie;

