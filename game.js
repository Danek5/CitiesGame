const STORAGE_KEY = "citiesGameSettings";

const BASE_MAP_WIDTH = 1320;
const BASE_MAP_HEIGHT = 680;

const MAP_BOUNDS_WGS84 = {
    lonMin: 12.09,
    lonMax: 18.86,
    latMin: 48.55,
    latMax: 51.06
};

const CAL_SCALE_X = 171.0;
const CAL_SCALE_Y = 222.0;
const CAL_OFFSET_X = 58.0;
const CAL_OFFSET_Y = 22.0;

const POHORI_OUTLINE = {
    np: { dot: "#2563eb", line: "#2563eb" },
    chko: { dot: "#c0392b", line: "#c0392b" }
};

function lonLatToMapPixels(lon, lat) {
    const b = MAP_BOUNDS_WGS84;
    const x = CAL_OFFSET_X + (lon - b.lonMin) * CAL_SCALE_X;
    const y = CAL_OFFSET_Y + (b.latMax - lat) * CAL_SCALE_Y;
    return { X: Math.round(x), Y: Math.round(y) };
}

function geoRingWgs84ToPixels(ring) {
    return ring.map(function (pair) {
        return lonLatToMapPixels(pair[0], pair[1]);
    });
}

const datasets = {
    mesta: [
        { name: "Hradec Králové", X: 704, Y: 229 },
        { name: "Třinec", X: 1189, Y: 374 },
        { name: "Jihlava", X: 659, Y: 442 },
        { name: "Písek", X: 407, Y: 462 },
        { name: "Nový Jičín", X: 1076, Y: 390 },
        { name: "Plzeň", X: 270, Y: 344 },
        { name: "Tábor", X: 500, Y: 432 },
        { name: "Havlíčkův Brod", X: 659, Y: 384 },
        { name: "Krnov", X: 1019, Y: 262 },
        { name: "Praha", X: 457, Y: 262 },
        { name: "Děčín", X: 423, Y: 80 },
        { name: "Znojmo", X: 732, Y: 584 },
        { name: "Liberec", X: 568, Y: 79 },
        { name: "Karviná", X: 1163, Y: 319 },
        { name: "Litvínov", X: 312, Y: 128 },
        { name: "Brno", X: 836, Y: 499 },
        { name: "Kroměříž", X: 970, Y: 469 },
        { name: "Kladno", X: 402, Y: 246 },
        { name: "Šumperk", X: 892, Y: 291 },
        { name: "Hodonín", X: 917, Y: 582 },
        { name: "Jablonec nad Nisou", X: 584, Y: 94 },
        { name: "Olomouc", X: 941, Y: 392 },
        { name: "Chrudim", X: 693, Y: 295 },
        { name: "Přerov", X: 978, Y: 432 },
        { name: "Chomutov", X: 277, Y: 166 },
        { name: "Teplice", X: 345, Y: 116 },
        { name: "Příbram", X: 381, Y: 365 },
        { name: "České Budějovice", X: 463, Y: 545 },
        { name: "Pardubice", X: 691, Y: 275 },
        { name: "Břeclav", X: 881, Y: 604 },
        { name: "Zlín", X: 1011, Y: 489 },
        { name: "Český Těšín", X: 1182, Y: 349 },
        { name: "Ostrava", X: 1122, Y: 325 },
        { name: "Orlová", X: 1151, Y: 325 },
        { name: "Ústí nad Labem", X: 395, Y: 107 },
        { name: "Cheb", X: 99, Y: 262 },
        { name: "Frýdek-Místek", X: 1139, Y: 362 },
        { name: "Vsetín", X: 1076, Y: 454 },
        { name: "Havířov", X: 1150, Y: 341 },
        { name: "Třebíč", X: 713, Y: 492 },
        { name: "Karlovy Vary", X: 179, Y: 227 },
        { name: "Kolín", X: 592, Y: 274 },
        { name: "Mladá Boleslav", X: 543, Y: 173 },
        { name: "Uherské Hradiště", X: 984, Y: 527 },
        { name: "Trutnov", X: 708, Y: 134 },
        { name: "Česká Lípa", X: 473, Y: 103 },
        { name: "Prostějov", X: 917, Y: 421 },
        { name: "Most", X: 318, Y: 151 },
        { name: "Opava", X: 1055, Y: 299 },
        { name: "Litoměřice", X: 406, Y: 146 }
    ],
    pamatky: [
        { name: "Pražský hrad", X: 443, Y: 255 },
        { name: "Karlštejn", X: 428, Y: 286 },
        { name: "Křivoklát", X: 349, Y: 266 },
        { name: "Konopiště", X: 500, Y: 323 },
        { name: "Hluboká nad Vltavou", X: 472, Y: 531 },
        { name: "Český Krumlov - zámek", X: 427, Y: 573 },
        { name: "Lednice", X: 871, Y: 608 },
        { name: "Valtice", X: 858, Y: 610 },
        { name: "Bouzov", X: 904, Y: 370 },
        { name: "Pernštejn", X: 760, Y: 438 },
        { name: "Kost", X: 580, Y: 187 },
        { name: "Sychrov", X: 582, Y: 108 },
        { name: "Hrad Loket", X: 178, Y: 231 },
        { name: "Kynžvart", X: 124, Y: 241 },
        { name: "Hrad Bezděz", X: 525, Y: 140 },
        { name: "Hrad Helfštýn", X: 1013, Y: 415 },
        { name: "Hrad Špilberk", X: 833, Y: 498 },
        { name: "Zámek Telč", X: 621, Y: 468 },
        { name: "Zámek Litomyšl", X: 756, Y: 292 }
    ],
    vodniPlochy: [
        { name: "Lipno", X: 392, Y: 596 },
        { name: "Orlík", X: 452, Y: 405 },
        { name: "Slapy", X: 447, Y: 335 },
        { name: "Nové Mlýny", X: 846, Y: 608 },
        { name: "Dalešice", X: 746, Y: 505 },
        { name: "Nechranice", X: 262, Y: 197 },
        { name: "Máchovo jezero", X: 478, Y: 132 },
        { name: "Slezská Harta", X: 963, Y: 316 }
    ],
    pohori: [
        {
            name: "Šumava",
            parkKind: "np",
            points: [
                { X: 217, Y: 472 }, { X: 270, Y: 467 }, { X: 353, Y: 526 }, { X: 385, Y: 530 }, { X: 423, Y: 602 },
                { X: 427, Y: 657 }, { X: 394, Y: 642 }, { X: 360, Y: 605 }, { X: 317, Y: 552 }, { X: 296, Y: 558 },
                { X: 219, Y: 475 }
            ]
        },
        {
            name: "Krkonoše",
            parkKind: "np",
            points: [
                { X: 647, Y: 69 }, { X: 718, Y: 85 }, { X: 737, Y: 127 }, { X: 665, Y: 117 }, { X: 643, Y: 81 }
            ]
        },
        {
            name: "České Švýcarsko",
            parkKind: "np",
            points: [
                { X: 467, Y: 39 }, { X: 472, Y: 61 }, { X: 430, Y: 63 }, { X: 465, Y: 37 }
            ]
        },
        {
            name: "Podyjí",
            parkKind: "np",
            points: [
                { X: 721, Y: 569 }, { X: 761, Y: 592 }, { X: 743, Y: 604 }, { X: 709, Y: 584 }, { X: 722, Y: 564 }
            ]
        },
        {
            name: "Beskydy",
            parkKind: "chko",
            points: [
                { X: 1244, Y: 414 }, { X: 1239, Y: 379 }, { X: 1200, Y: 375 }, { X: 1177, Y: 409 }, { X: 1115, Y: 413 },
                { X: 1128, Y: 453 }, { X: 1103, Y: 481 }, { X: 1131, Y: 495 }, { X: 1145, Y: 473 }, { X: 1181, Y: 458 },
                { X: 1211, Y: 411 }, { X: 1245, Y: 413 }
            ]
        },
        {
            name: "Jeseníky",
            parkKind: "chko",
            points: [
                { X: 1001, Y: 218 }, { X: 1013, Y: 265 }, { X: 989, Y: 301 }, { X: 952, Y: 313 }, { X: 937, Y: 300 },
                { X: 951, Y: 273 }, { X: 932, Y: 257 }, { X: 999, Y: 211 }
            ]
        },
        {
            name: "Křivoklátsko",
            parkKind: "chko",
            points: [
                { X: 363, Y: 250 }, { X: 410, Y: 275 }, { X: 380, Y: 319 }, { X: 346, Y: 328 }, { X: 326, Y: 290 }, { X: 359, Y: 251 }
            ]
        },
        {
            name: "Český kras",
            parkKind: "chko",
            points: [
                { X: 452, Y: 303 }, { X: 410, Y: 329 }, { X: 402, Y: 313 }, { X: 424, Y: 290 }, { X: 459, Y: 296 }, { X: 453, Y: 301 }
            ]
        },
        {
            name: "Bílé Karpaty",
            parkKind: "chko",
            points: [
                { X: 1132, Y: 495 }, { X: 1105, Y: 545 }, { X: 1073, Y: 565 }, { X: 1024, Y: 596 }, { X: 973, Y: 588 },
                { X: 1016, Y: 573 }, { X: 1079, Y: 537 }, { X: 1073, Y: 502 }, { X: 1104, Y: 492 }, { X: 1129, Y: 497 }
            ]
        },
        {
            name: "Český ráj",
            parkKind: "chko",
            points: [
                { X: 614, Y: 127 }, { X: 632, Y: 171 }, { X: 593, Y: 170 }, { X: 579, Y: 159 }, { X: 600, Y: 145 }, { X: 609, Y: 124 }
            ]
        },
        {
            name: "Orlické hory",
            parkKind: "chko",
            points: [
                { X: 859, Y: 249 }, { X: 844, Y: 221 }, { X: 809, Y: 186 }, { X: 797, Y: 187 }, { X: 823, Y: 249 }, { X: 859, Y: 252 }
            ]
        },
        {
            name: "Moravský kras",
            parkKind: "chko",
            points: [
                { X: 887, Y: 495 }, { X: 894, Y: 447 }, { X: 883, Y: 436 }, { X: 873, Y: 459 }, { X: 873, Y: 497 }, { X: 886, Y: 497 }
            ]
        },
        {
            name: "České středohoří",
            parkKind: "chko",
            points: [
                { X: 360, Y: 198 }, { X: 480, Y: 130 }, { X: 495, Y: 96 }, { X: 473, Y: 85 }, { X: 407, Y: 89 },
                { X: 398, Y: 114 }, { X: 420, Y: 122 }, { X: 349, Y: 162 }, { X: 354, Y: 197 }
            ]
        },
        {
            name: "Brdy",
            parkKind: "chko",
            points: [
                { X: 370, Y: 417 }, { X: 347, Y: 418 }, { X: 342, Y: 387 }, { X: 353, Y: 354 },
                { X: 385, Y: 333 }, { X: 398, Y: 349 }, { X: 370, Y: 386 }, { X: 370, Y: 409 }
            ]
        },
        {
            name: "Jizerské hory",
            parkKind: "chko",
            points: [
                { X: 626, Y: 51 }, { X: 579, Y: 59 }, { X: 579, Y: 82 }, { X: 597, Y: 92 },
                { X: 633, Y: 106 }, { X: 637, Y: 82 }, { X: 625, Y: 55 }
            ]
        }
    ]
};

(function scaleLegacyPixelCoordsTo1320x680() {
    const w0 = 1280;
    const h0 = 670;
    const sx = BASE_MAP_WIDTH / w0;
    const sy = BASE_MAP_HEIGHT / h0;
    function scaleItem(item) {
        if (typeof item.X === "number" && typeof item.Y === "number") {
            item.X = Math.round(item.X * sx);
            item.Y = Math.round(item.Y * sy);
        }
    }
    ["mesta", "pamatky", "vodniPlochy"].forEach(function (key) {
        datasets[key].forEach(scaleItem);
    });
})();

function densifyClosedPolygon(points, subdivisionsPerEdge) {
    if (!points || points.length < 3 || subdivisionsPerEdge < 2) {
        return points;
    }
    const n = points.length;
    const out = [];
    for (let i = 0; i < n; i += 1) {
        const a = points[i];
        const b = points[(i + 1) % n];
        out.push({ X: a.X, Y: a.Y });
        for (let k = 1; k < subdivisionsPerEdge; k += 1) {
            const t = k / subdivisionsPerEdge;
            out.push({
                X: Math.round(a.X + (b.X - a.X) * t),
                Y: Math.round(a.Y + (b.Y - a.Y) * t)
            });
        }
    }
    return out;
}

(function resolvePohoriWgs84Rings() {
    datasets.pohori.forEach(function (item) {
        if (item.geoRing && item.geoRing.length) {
            item.points = geoRingWgs84ToPixels(item.geoRing);
            delete item.geoRing;
        }
    });
})();

(function densifyPohoriPolygons() {
    const steps = 3;
    datasets.pohori.forEach(function (item) {
        if (item.points) {
            item.points = densifyClosedPolygon(item.points, steps);
        }
        if (item.regions) {
            item.regions = item.regions.map(function (poly) {
                return densifyClosedPolygon(poly, steps);
            });
        }
    });
})();

const datasetLabels = {
    mesta: "Města",
    pamatky: "Památky (hrady/zámky)",
    vodniPlochy: "Vodní plochy",
    pohori: "Pohoří"
};

const difficultyRadius = {
    lehka: 70,
    stredni: 45,
    tezka: 28
};

let activePool = [];
let activeGroups = ["mesta"];
let activeDifficulty = "stredni";
let index = 0;
let blink = false;
let show = false;
let allVisible = false;
let blinkInterval = null;
let activeItem = null;
let revealVisible = false;
let attempts = 0;
let hits = 0;
let mapDebugMode = false;
let guessedPoint = null;
let roundScored = false;

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("startForm")) {
        initStartPage();
    }
    if (document.getElementById("map")) {
        initGamePage();
    }
});

function initStartPage() {
    const form = document.getElementById("startForm");
    const saved = loadSettings();

    if (saved) {
        saved.groups.forEach(function (group) {
            const checkbox = document.getElementById("group-" + group);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        const radio = document.querySelector("input[name='difficulty'][value='" + saved.difficulty + "']");
        if (radio) {
            radio.checked = true;
        }
    } else {
        document.getElementById("group-mesta").checked = true;
        document.getElementById("group-pamatky").checked = true;
        document.querySelector("input[name='difficulty'][value='stredni']").checked = true;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const groups = Array.from(document.querySelectorAll("input[name='groups']:checked")).map(function (item) {
            return item.value;
        });
        const difficulty = document.querySelector("input[name='difficulty']:checked").value;
        if (groups.length === 0) {
            alert("Vyber alespoň jednu skupinu.");
            return;
        }
        saveSettings({
            groups: groups,
            difficulty: difficulty
        });
        window.location.href = "game.html";
    });
}

function initGamePage() {
    mapDebugMode = new URLSearchParams(window.location.search).get("debug") === "1";
    const settings = loadSettings() || { groups: ["mesta"], difficulty: "stredni" };
    const allowed = Object.keys(datasetLabels);
    const cleaned = (settings.groups || []).filter(function (g) {
        return allowed.indexOf(g) !== -1;
    });
    activeGroups = cleaned.length ? cleaned : ["mesta"];
    activeDifficulty = settings.difficulty || "stredni";
    rebuildPool();
    bindKeyboard();
    renderText();
    updateStats();
    window.addEventListener("resize", redrawOverlays);
}

function bindKeyboard() {
    document.onkeydown = function (e) {
    switch (e.code) {
        case "ArrowLeft":
            deleteLocation();
            index -= 1;
            renderText();
            break;

        case "ArrowRight":
            deleteLocation();
            index += 1;
            renderText();
            break;

        case "NumpadEnter":
        case "KeyP":
            showLocation();
            break;

        case "Space":
            textBlinking();
            break;

        case "KeyJ":
            showName();
            break;

        case "KeyM":
            showAll();
            break;
        case "KeyR":
            shuffle(activePool);
            index = 0;
            renderText();
            break;
    }
};
}

function saveSettings(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function loadSettings() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return null;
        }
        const parsed = JSON.parse(raw);
        if (!parsed.groups || !parsed.difficulty) {
            return null;
        }
        return parsed;
    } catch (err) {
        return;
    }
}

function rebuildPool() {
    activePool = [];
    activeGroups.forEach(function (groupKey) {
        const group = datasets[groupKey] || [];
        group.forEach(function (item) {
            activePool.push({
                name: item.name,
                X: item.X,
                Y: item.Y,
                points: item.points,
                regions: item.regions,
                parkKind: item.parkKind,
                groupKey: groupKey
            });
        });
    });
    shuffle(activePool);
    index = 0;
}

function shuffle(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
    }
}

function renderText() {
    if (!activePool.length) {
        return;
    }
    if (index >= activePool.length) {
        shuffle(activePool);
        index = 0;
    }
    index = (index + activePool.length) % activePool.length;
    activeItem = activePool[index];
    allVisible = false;
    blink = false;
    show = false;
    revealVisible = false;
    guessedPoint = null;
    roundScored = false;
    if (blinkInterval) {
        clearInterval(blinkInterval);
    }
    deleteLocation();
    hideClickMarker();
    Array.from(document.getElementsByClassName("all-marker")).forEach(function (elem) {
        elem.remove();
    });

    const label = document.getElementById("datasetLabel");
    if (label) {
        label.textContent = datasetLabels[activeItem.groupKey] + " | " + (index + 1) + "/" + activePool.length;
    }

    const holder = document.getElementById("div");
    if (!holder) {
        return;
    }
    holder.innerHTML = "";

    for (let i = 0; i < activeItem.name.length; i += 1) {
        const char = activeItem.name[i];
        const elem = document.createElement("p");
        elem.className = "p";
        elem.style.color = "blanchedalmond";
        if (char !== " ") {
            const node = document.createTextNode(char);
            elem.appendChild(node);
            holder.appendChild(elem);
        } else {
            elem.className = "p";
            elem.style.visibility = "hidden";
            const node = document.createTextNode(char);
            elem.appendChild(node);
            holder.appendChild(elem);
        }
    }
}

function showName() {
    show = !show;
    const elem = document.getElementsByClassName("p");
    for (let i = 0; i < elem.length; i += 1) {
        elem[i].style.color = show ? "black" : "blanchedalmond";
    }
}

function textBlinking() {
    const elem = document.getElementsByClassName("p");
    if (blink) {
        clearInterval(blinkInterval);
        for (let i = 0; i < elem.length; i += 1) {
            elem[i].style.color = "blanchedalmond";
        }
    } else {
        blinkInterval = setInterval(function () {
            for (let i = 0; i < elem.length; i += 1) {
                elem[i].style.color = "blanchedalmond";
            }
            const randIndex = Math.round(Math.random() * (elem.length - 1));
            if (elem[randIndex]) {
                elem[randIndex].style.color = "black";
            }
        }, 150);
    }
    blink = !blink;
}

function makePoint(X, Y, className, sizePx, color) {
    const map = document.getElementById("map");
    if (!map) {
        return null;
    }
    const scale = getMapScale();
    const scaled = toScreenCoords(X, Y);
    const point = document.createElement("i");
    point.className = className + " fa fa-circle";
    point.style.position = "absolute";
    point.style.fontSize = (sizePx * scale).toString() + "px";
    point.style.left = scaled.X.toString() + "px";
    point.style.top = scaled.Y.toString() + "px";
    point.style.transform = "translate(-50%, -50%)";
    point.style.color = color;
    point.style.opacity = 0.8;
    return point;
}

function getItemPolygons(item) {
    if (item.regions && item.regions.length) {
        return item.regions;
    }
    if (item.points && item.points.length) {
        return [item.points];
    }
    return [];
}

function itemHasPolygons(item) {
    return getItemPolygons(item).length > 0;
}

function getParkOutlineColors(item) {
    const k = item && item.parkKind === "chko" ? "chko" : "np";
    return POHORI_OUTLINE[k];
}

function drawSinglePolygon(polygon, className, dotColor, lineColor) {
    const map = document.getElementById("map");
    if (!map || !polygon || !polygon.length) {
        return;
    }
    const dc = dotColor || POHORI_OUTLINE.np.dot;
    const lc = lineColor || POHORI_OUTLINE.np.line;
    for (let i = 0; i < polygon.length; i += 1) {
        const point = polygon[i];
        const marker = makePoint(point.X, point.Y, className, 10, dc);
        if (marker) {
            map.appendChild(marker);
        }
        const next = polygon[(i + 1) % polygon.length];
        const scaledA = toScreenCoords(point.X, point.Y);
        const scaledB = toScreenCoords(next.X, next.Y);
        const dx = scaledB.X - scaledA.X;
        const dy = scaledB.Y - scaledA.Y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const line = document.createElement("div");
        line.className = className + " mountain-line";
        line.style.backgroundColor = lc;
        line.style.width = distance + "px";
        line.style.left = scaledA.X + "px";
        line.style.top = scaledA.Y + "px";
        line.style.transform = "rotate(" + angle + "deg)";
        map.appendChild(line);
    }
}

function drawToleranceSvgLayer(polygonsList, className, tolerancePx) {
    const map = document.getElementById("map");
    if (!map || !polygonsList.length) {
        return;
    }
    const strokeW = Math.max(8, tolerancePx * 2);
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", className + " tolerance-rounded-svg");
    svg.setAttribute("viewBox", "0 0 " + BASE_MAP_WIDTH + " " + BASE_MAP_HEIGHT);
    svg.setAttribute("preserveAspectRatio", "none");
    polygonsList.forEach(function (polygon) {
        if (!polygon || polygon.length < 3) {
            return;
        }
        const pointsAttr = polygon.map(function (p) {
            return p.X + "," + p.Y;
        }).join(" ");
        const polyEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polyEl.setAttribute("points", pointsAttr);
        polyEl.setAttribute("fill", "rgba(59, 130, 246, 0.14)");
        polyEl.setAttribute("stroke", "rgba(59, 130, 246, 0.38)");
        polyEl.setAttribute("stroke-width", String(strokeW));
        polyEl.setAttribute("stroke-linejoin", "round");
        polyEl.setAttribute("stroke-linecap", "round");
        svg.appendChild(polyEl);
    });
    map.appendChild(svg);
}

function drawMountainArea(item, className, showToleranceBand) {
    const polys = getItemPolygons(item);
    if (!polys.length) {
        return;
    }
    const col = getParkOutlineColors(item);
    const tolerance = difficultyRadius[activeDifficulty];
    if (showToleranceBand) {
        drawToleranceSvgLayer(polys, className, tolerance);
    }
    polys.forEach(function (polygon) {
        drawSinglePolygon(polygon, className, col.dot, col.line);
    });
}

function showAll() {
    const map = document.getElementById("map");
    if (!map) {
        return;
    }
    if (allVisible) {
        Array.from(document.getElementsByClassName("all-marker")).forEach(function (elem) {
            elem.remove();
        });
    } else {
        activePool.forEach(function (item) {
            if (itemHasPolygons(item)) {
                drawMountainArea(item, "all-marker", false);
            } else {
                const marker = makePoint(item.X, item.Y, "all-marker", 10, "#8a1c1c");
                if (marker) {
                    map.appendChild(marker);
                }
            }
        });
    }
    allVisible = !allVisible;
}

function showLocation() {
    if (!activeItem) {
        return;
    }
    const map = document.getElementById("map");
    if (!map) {
        return;
    }
    deleteLocation();
    drawRevealShape("location-marker");
    revealVisible = true;
    if (guessedPoint && !roundScored) {
        scoreGuess(guessedPoint.X, guessedPoint.Y);
    }
}

function drawRevealShape(className) {
    const map = document.getElementById("map");
    if (!map || !activeItem) {
        return;
    }
    if (itemHasPolygons(activeItem)) {
        drawMountainArea(activeItem, className, true);
        return;
    }
    const radius = difficultyRadius[activeDifficulty];
    const oc = getParkOutlineColors(activeItem);
    const circle = makePoint(activeItem.X, activeItem.Y, className, radius * 2, oc.dot);
    if (!circle) {
        return;
    }
    circle.style.opacity = 0.45;
    map.appendChild(circle);
}

function deleteLocation() {
    Array.from(document.getElementsByClassName("location-marker")).forEach(function (elem) {
        elem.remove();
    });
}

function point_it(event) {
    const map = document.getElementById("map");
    const rect = map.getBoundingClientRect();
    const posX = event.clientX - rect.left;
    const posY = event.clientY - rect.top;
    const dataCoords = toDataCoords(posX, posY);

    guessedPoint = dataCoords;
    const point = document.getElementById("point");
    point.style.left = posX.toString() + "px";
    point.style.top = posY.toString() + "px";
    point.style.visibility = "visible";

    if (mapDebugMode) {
        const rx = Math.round(dataCoords.X);
        const ry = Math.round(dataCoords.Y);
        console.log("[mapa " + BASE_MAP_WIDTH + "x" + BASE_MAP_HEIGHT + "] X:", rx, " Y:", ry);
        let dbg = document.getElementById("debugCoords");
        if (!dbg) {
            dbg = document.createElement("div");
            dbg.id = "debugCoords";
            dbg.style.cssText = "font-size:12px;margin:4px 0;opacity:0.85;";
            const hud = document.querySelector(".hud");
            if (hud) {
                hud.appendChild(dbg);
            }
        }
        dbg.textContent = "Ladění: klik mapa X=" + rx + ", Y=" + ry + " (" + BASE_MAP_WIDTH + "×" + BASE_MAP_HEIGHT + " px)";
    }

    if (revealVisible && !roundScored) {
        scoreGuess(dataCoords.X, dataCoords.Y);
    }
}

function isHit(clickX, clickY) {
    const polys = getItemPolygons(activeItem);
    if (polys.length) {
        const pt = { X: clickX, Y: clickY };
        const tolerance = difficultyRadius[activeDifficulty];
        for (let i = 0; i < polys.length; i += 1) {
            if (isPointInPolygon(pt, polys[i])) {
                return true;
            }
            if (distancePointToPolygonEdges(pt, polys[i]) <= tolerance) {
                return true;
            }
        }
        return false;
    }
    const radius = difficultyRadius[activeDifficulty];
    const dx = clickX - activeItem.X;
    const dy = clickY - activeItem.Y;
    return (dx * dx + dy * dy) <= (radius * radius);
}

function isPointInPolygon(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i].X;
        const yi = polygon[i].Y;
        const xj = polygon[j].X;
        const yj = polygon[j].Y;
        const intersect = ((yi > point.Y) !== (yj > point.Y))
            && (point.X < ((xj - xi) * (point.Y - yi)) / (yj - yi + 0.0000001) + xi);
        if (intersect) {
            inside = !inside;
        }
    }
    return inside;
}

function distancePointToPolygonEdges(point, polygon) {
    if (!polygon || polygon.length < 2) {
        return Number.POSITIVE_INFINITY;
    }
    let minDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < polygon.length; i += 1) {
        const a = polygon[i];
        const b = polygon[(i + 1) % polygon.length];
        const dist = distancePointToSegment(point, a, b);
        if (dist < minDist) {
            minDist = dist;
        }
    }
    return minDist;
}

function distancePointToSegment(p, a, b) {
    const abx = b.X - a.X;
    const aby = b.Y - a.Y;
    const apx = p.X - a.X;
    const apy = p.Y - a.Y;
    const abLenSq = abx * abx + aby * aby;
    if (abLenSq === 0) {
        const dx0 = p.X - a.X;
        const dy0 = p.Y - a.Y;
        return Math.sqrt(dx0 * dx0 + dy0 * dy0);
    }
    const t = Math.max(0, Math.min(1, (apx * abx + apy * aby) / abLenSq));
    const projX = a.X + t * abx;
    const projY = a.Y + t * aby;
    const dx = p.X - projX;
    const dy = p.Y - projY;
    return Math.sqrt(dx * dx + dy * dy);
}

function updateStats() {
    const elem = document.getElementById("stats");
    if (!elem) {
        return;
    }
    const percent = attempts ? Math.round((hits / attempts) * 100) : 0;
    elem.textContent = "Úspěšnost: " + hits + "/" + attempts + " (" + percent + "%)";
}

function scoreGuess(dataX, dataY) {
    if (roundScored) {
        return;
    }
    const hit = isHit(dataX, dataY);
    attempts += 1;
    if (hit) {
        hits += 1;
    }
    roundScored = true;
    updateStats();
}

function hideClickMarker() {
    const point = document.getElementById("point");
    if (!point) {
        return;
    }
    point.style.visibility = "hidden";
}

function getMapScale() {
    const map = document.getElementById("map");
    if (!map) {
        return 1;
    }
    const rect = map.getBoundingClientRect();
    return Math.min(rect.width / BASE_MAP_WIDTH, rect.height / BASE_MAP_HEIGHT);
}

function toScreenCoords(dataX, dataY) {
    const map = document.getElementById("map");
    const rect = map.getBoundingClientRect();
    return {
        X: (dataX / BASE_MAP_WIDTH) * rect.width,
        Y: (dataY / BASE_MAP_HEIGHT) * rect.height
    };
}

function toDataCoords(screenX, screenY) {
    const map = document.getElementById("map");
    const rect = map.getBoundingClientRect();
    return {
        X: (screenX / rect.width) * BASE_MAP_WIDTH,
        Y: (screenY / rect.height) * BASE_MAP_HEIGHT
    };
}

function redrawOverlays() {
    Array.from(document.getElementsByClassName("all-marker")).forEach(function (elem) {
        elem.remove();
    });
    Array.from(document.getElementsByClassName("location-marker")).forEach(function (elem) {
        elem.remove();
    });
    if (allVisible) {
        activePool.forEach(function (item) {
            if (itemHasPolygons(item)) {
                drawMountainArea(item, "all-marker", false);
            } else {
                const marker = makePoint(item.X, item.Y, "all-marker", 10, "#8a1c1c");
                if (marker) {
                    document.getElementById("map").appendChild(marker);
                }
            }
        });
    }
    if (revealVisible) {
        drawRevealShape("location-marker");
    }
}

function openGame() {
    window.location.href = "game.html";
}

