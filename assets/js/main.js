simpleCart({
	cartColumns: [
{ attr: "gambar", label: false, view: "gambar" },
{ attr: "nama", label: false, view: "link" },
{ view: "remove", text: false, label: !1 },
{ attr: "harga", label: false, view: "harga" },
{ attr: "warna", label: false, view: "warna" },
{ attr: "varian", label: 'false', view: "varian" },
{ view: "decrement", label: false },
{ attr: "quantity", label: 'false', view: "qty" },
{ view: "increment", label: false },
{ attr: "total", label: false, view: "currency" },
{ attr: "link", label: false, view: "link" },
],
	currency: "IDR",
});
