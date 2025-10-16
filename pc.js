const theoPay5PacketObjects = {
  isPay5: true,
  Zxt: 1
};
const theoPay3PacketObjects = {
  isPay3: true,
  visiblePowersAll: true,
  visibleMovesAndRespawn: true
};
var TIME = new Date().getTime();
var lxpdmultiplier;
var lxpdupdatezoom;
lxpdmultiplier = 1;
var SITE_XTHOST = "https://swykz.theoxt.com";
const PhoneChecked = function () {
  let _0x1752d7 = false;
  var _0x667da;
  _0x667da = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x667da) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x667da.substr(0, 4))) {
    _0x1752d7 = true;
  }
  return _0x1752d7;
};
const _wrmxt = {
  isSkinCustom(_0x4e55f2) {
    var _0x383216 = /[a-zA-Z]/;
    return typeof _0x4e55f2 === "string" && _0x383216.test(_0x4e55f2);
  },
  testSkinCustom: function (_0x368f3b) {
    if (_wrmxt.isSkinCustom(_0x368f3b)) {
      return 34 || 33;
    } else {
      return _0x368f3b;
    }
  },
  testSkinMod: function (_0x178405) {
    return _0x178405 >= 399 && _0x178405 < 999;
  },
  testWear: function (_0x2696fa) {
    return _0x2696fa >= 399 && _0x2696fa < 999;
  },
  isNumberValid: function (_0x523778) {
    return _0x523778 !== "" && _0x523778 !== null && _0x523778 !== undefined && !isNaN(_0x523778);
  },
  validInput: function (_0x51ed0a) {
    if (!_wrmxt.testSkinMod(_0x51ed0a) && !_wrmxt.isSkinCustom(_0x51ed0a)) {
      return _0x51ed0a;
    }
    try {
      let _0x4af323 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(_0x4af323) ? _0x4af323 : gameSettings.idReplaceSkin || 35);
    } catch (_0x2f75fa) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0,
  ismobile: PhoneChecked(),
  getName: function () {
    return $("#mm-params-nickname").val();
  }
};
const mobileAndTabletCheck = function () {
  let _0x17f57e = false;
  var _0x3f7020 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x3f7020) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x3f7020.substr(0, 4))) {
    _0x17f57e = true;
  }
  return _0x17f57e;
};
const setIdReplaceSkin = function (_0x1bc278) {
  gameSettings.idReplaceSkin = _wrmxt.isNumberValid(_0x1bc278.value) ? _0x1bc278.value : 35;
  localStorage.setItem("SaveGameXT", JSON.stringify(gameSettings));
};
const setMinimapX = function (_0x12b673) {
  gameSettings.MinimapPositionX = _wrmxt.isNumberValid(_0x12b673.value) ? _0x12b673.value : 60;
  localStorage.setItem("SaveGameXT", JSON.stringify(gameSettings));
};
const setLeaderboardX = function (_0x37000b) {
  gameSettings.LeaderboardPositionX = _wrmxt.isNumberValid(_0x37000b.value) ? _0x37000b.value : 225;
  localStorage.setItem("SaveGameXT", JSON.stringify(gameSettings));
};
const removeJoy = function () {
  if (joystick) {
    joystick.destroy();
  }
};
const loadJoy = function () {
  try {
    const _0x5d50d0 = function () {
      joystick.on("start end", function (_0x443039, _0x1c8681) {}).on("move", function (_0x2c354b, _0xfceeb2) {
        let _0x506ce8 = _0xfceeb2.angle.radian <= Math.PI ? _0xfceeb2.angle.radian * -1 : Math.PI - (_0xfceeb2.angle.radian - Math.PI);
        theoEvents.eventoPrincipal.Bn = _0x506ce8;
      });
    };
    const _0x1c839f = function () {
      if (joystick) {
        joystick.destroy();
      }
      joystick = nipplejs.create(theoEvents.joystick);
      _0x5d50d0();
    };
    if (_wrmxt.ismobile && theoEvents.joystick.checked) {
      _0x1c839f();
    }
  } catch (_0x580ced) {
    console.error(_0x580ced);
  }
};
var theoEvents = {
  aip: false,
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#E4DEDEC9",
    pxy: 110
  }
};
var joystick = null;
var _0x6286x1f = null;
var _0x6286x20 = false;
var _0x6286x21 = 55;
var _0x6286x22 = 1;
var _0x6286x23 = true;
var game_cont = document.getElementById("game-cont");
var game_canvas = document.getElementById("game-canvas");
var gameSettings = {
  To: 10,    
  FB_UserID: "",
  expirationDate: "",
  mo: 1,
  j: null,
  MinimapPositionX: 60,
  LeaderboardPositionX: 225,
  smoothCameraX: 0.5,
  smoothCameraY: 0.5,
  eat_animation: 0.0025,
  youScore: 0,
  idReplaceSkin: 35,
  hs_Guie: false,
  arrow: false,
  laserHS: false,
  visibleTOPTeam: true,
  topHS: true,
  invisibleName: false,
  SpeedAbility: false,
  FlexAbility: true,
  x2Ability: false,
  x5Ability: false,
  x10Ability: false,
  ZoomAbility: false,
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  KeyCodeRespawn: 189,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  KeyCodeZoomReset: 90, // مفتاح Z لإرجاع الزوم (يمكن تغييره)
  DefaultZoomLevel: 1.5,   // المستوى الافتراضي للزوم
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  showSkinLines: false,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  display: {
    m: {
      x: 60,
      y: 60
    },
    r: {
      x: 225
    },
    ms: false
  },
  mobile: false,
  loading: false,
  died: 0,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4,
  currentServer: null
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    gameSettings[e] = t[e];
  }
}
gameSettings.loading = true;
var fps_counter = 0;
var fps_startTime = 0;
var fps_value = 12.345;
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let serverData = [];
var top1Servers = {};
async function extractTopScores() {
  const _0x1e6913 = "https://zworm.xyz:3305/data?v=" + TIME;
  try {
    let _0x4c2fca = await fetch(_0x1e6913);
    if (!_0x4c2fca.ok) {
      throw new Error("HTTP error! Status: " + _0x4c2fca.status);
    }
    let _0x928c04 = await _0x4c2fca.json();
    for (let _0x3e848b in _0x928c04) {
      if (_0x928c04[_0x3e848b].length > 0) {
        let _0x120502 = _0x928c04[_0x3e848b].reduce((_0x53f378, _0x55c616) => _0x55c616.Score > _0x53f378.Score ? _0x55c616 : _0x53f378, _0x928c04[_0x3e848b][0]);
        let _0x19906e = formatScore(_0x120502.Score);
        let _0x480421 = getStatusColor(_0x120502.Score);
        top1Servers[_0x3e848b] = {
          ServerName: _0x120502.ServerName,
          Initials: _0x3e848b,
          Score: _0x19906e,
          StatusColor: _0x480421
        };
      }
    }
    console.log(top1Servers);
  } catch (_0x4b6ce3) {
    console.error("Error fetching server data:", _0x4b6ce3);
  }
}

async function loadUsers() {
  await fetch("https://swykz.theoxt.com/api/users.php").then(_0x135910 => _0x135910.json()).then(_0xe42f6e => {
    console.log(_0xe42f6e);
    if (_0xe42f6e.success) {
      let _0x1b07ad = _0xe42f6e.users;
      console.log(_0x1b07ad);
      clientes.clientesActivos = _0x1b07ad.filter(_0x3b9190 => {
        return _0x3b9190.cliente_STATE == gameSettings.CLIENTE_ADMIN || _0x3b9190.cliente_STATE == gameSettings.CLIENTE_ACTIVO;
      });
      clientes.clientesVencidos = _0x1b07ad.filter(_0x1e3808 => {
        return _0x1e3808.cliente_STATE == gameSettings.CLIENTE_INACTIVO;
      });
      console.log(clientes);
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("OcurriÃ³ un error al cargar los clientes");
    }
  });
}
loadUsers();
async function registerUpdatePlayer(_0x4a8bb4) {
  await fetch("https://swykz.theoxt.com/api/users/register_update_player.php", {
    method: "POST",
    body: JSON.stringify({
      data: _0x4a8bb4
    })
  }).then(_0x5d30b5 => _0x5d30b5.json()).then(_0x136e66 => {
    console.log(_0x136e66);
  });
}
function decodeUnicode(str) {
    return str.replace(/\\u[\dA-F]{4}/gi, function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
    });
}



async function loadServers() {
    try {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://timmapwormate.com/css/tmw.css";
        document.head.appendChild(link);
        
        const response = await fetch(`https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=${TIME}`);
        let textContent = await response.text();
        
        const jsonStart = textContent.indexOf('{"');
        if (jsonStart > 0) {
            textContent = textContent.substring(jsonStart);
        }
        
        let validateParameter = JSON.parse(textContent);
        
        if (validateParameter && validateParameter.cc) {
            let htmlContent = validateParameter.cc;
            htmlContent = htmlContent.replace(/\\"/g, '"').replace(/\\\//g, '/');
            htmlContent = decodeUnicode(htmlContent);
            
            $(".description-text").html(htmlContent);
            
            setTimeout(() => {
                $(".select_item").off('click').on('click', function(d){
                    d.preventDefault();
                    const p = $(this).data("port");
                    const n = $(this).data("name");
                    
                    if (typeof ctx !== 'undefined' && ctx.setServer) {
                        ctx.setServer(n);
                    }
                    
                    window.server_url = p;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                });
                
            }, 1000);
            
            servers.Api_listServer = [];
            
        } else {
            throw new Error('No cc property');
        }
        
    } catch (error) {
        alert(`Failed to load TimMap: ${error.message}`);
        servers.Api_listServer = [];
    }
}

loadServers();
const ctx = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    align: "center",
    fill: color,
    fontSize: 25,
    lineJoin: "round",
    whiteSpace: "normal",
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: "bold"
  });
}
ctx.ptc = {};
const portionTimes = [40, 40, 40, 120, 40, 20, 40];
for (let i = 0; i < portionTimes.length; i++) {
  let name = "clock_ad" + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle["tfc" + i]);
  ctx.ptc[name].y = 61;
}
ctx.setPtc = function (_0x361b0c, _0x347b56, _0x2be4aa) {
  let _0x55f122 = portionTimes[_0x347b56] - parseInt((_0x2be4aa == 0.99 ? 1 : _0x2be4aa) * portionTimes[_0x347b56] / 1);
  let _0x39215e = "clock_ad" + _0x347b56;
  _0x361b0c.rh[_0x347b56].addChild(ctx.ptc[_0x39215e]);
  if (ctx.ptc[_0x39215e]) {
    ctx.ptc[_0x39215e].x = _0x55f122 >= 100 ? 11 : _0x55f122 >= 10 ? 18 : 26;
    ctx.ptc[_0x39215e].text = _0x55f122;
  }
};
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/VPkrI9l.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
ctx.myKeyMovePrimary = new PIXI.Text("S", ctx.fontStyle.keysColor);
ctx.myKeyMovePrimary.x = -25;
ctx.myKeyMovePrimary.y = 90;
ctx.myKeyMoveSecundary = new PIXI.Text("A", ctx.fontStyle.keysColor);
ctx.myKeyMoveSecundary.x = 8;
ctx.myKeyMoveSecundary.y = 90;
ctx.myKeyZum = new PIXI.Text("R", ctx.fontStyle.keysColor);
ctx.myKeyZum.x = 40;
ctx.myKeyZum.y = 90;
ctx.myKeyRespawn = new PIXI.Text("-", ctx.fontStyle.keysColor);
ctx.myKeyRespawn.x = -55;
ctx.myKeyRespawn.y = 90;
ctx.myCon = new PIXI.Text("SVR", ctx.fontStyle.blanco);
ctx.value_server = new PIXI.Text("0", ctx.fontStyle.blanco);
ctx.myCon.x = 0;
ctx.myCon.y = 107;
ctx.value_server.x = 0;
ctx.value_server.y = 119;
ctx.fps_list = new PIXI.Text("FPS: ", ctx.fontStyle.blanco);
ctx.fps_number = new PIXI.Text("0", ctx.fontStyle.blanco);
ctx.fps_list.x = 0;
ctx.fps_list.y = 150;
ctx.fps_number.x = 35;
ctx.fps_number.y = 150;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.blanco);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.blanco);
ctx.label_kill = new PIXI.Text("KILL", ctx.fontStyle.blanco);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.blanco);
ctx.label_hs.x = 50;
ctx.label_hs.y = 107;
ctx.label_kill.x = 85;
ctx.label_kill.y = 107;
ctx.value1_hs.x = 55;
ctx.value1_hs.y = 119;
ctx.value1_kill.x = 95;
ctx.value1_kill.y = 120;
ctx.powersCountKeys = new PIXI.Container();
ctx.powersCountKeys.x = -45;
ctx.powersCountKeys.y = -52;
ctx.powersCountKeys.addChild(ctx.myKeyMovePrimary);
ctx.powersCountKeys.addChild(ctx.myKeyMoveSecundary);
ctx.powersCountKeys.addChild(ctx.myKeyRespawn);
ctx.powersCountKeys.addChild(ctx.myKeyZum);
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -52;
ctx.containerCountInfo.addChild(ctx.fps_list);
ctx.containerCountInfo.addChild(ctx.fps_number);
ctx.containerCountInfo.addChild(ctx.myCon);
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
function functionTwo(_0x83fabc) {
  ctx.fps_number.text = Math.round(_0x83fabc) || "WormXT";
  if (ctx.fps_number.text >= 60) {
    ctx.fps_number.tint = "0x3BFF3D";
  } else if (ctx.fps_number.text >= 30) {
    ctx.fps_number.tint = "0xFFA23B";
  } else if (ctx.fps_number.text < 20) {
    ctx.fps_number.tint = "0xFF3B3B";
  }
}
ctx.setFPS = function (_0x5065e5) {
  ctx.fps_number.text = Math.round(_0x5065e5) || "WormXT";
  if (ctx.fps_number.text >= 60) {
    ctx.fps_number.tint = "0x3BFF3D";
  } else if (ctx.fps_number.text >= 30) {
    ctx.fps_number.tint = "0xFFA23B";
  } else if (ctx.fps_number.text < 20) {
    ctx.fps_number.tint = "0xFF3B3B";
  }
};
ctx.setServer = function (_0x4e2321) {
  ctx.value_server.text = _0x4e2321 || "WormXT";
};
ctx.setCountGame = function (_0x31f265, _0x5ae7e4, _0x3a634e, _0x3f50b9) {
  ctx.value1_hs.text = _0x5ae7e4;
  ctx.value1_kill.text = _0x31f265;
};
ctx.imgS_desactived = PIXI.Texture.fromImage("https://i.imgur.com/Ze4oiUY.png");
ctx.imgS_actived = PIXI.Texture.fromImage("https://i.imgur.com/0aN5Zek.png");
ctx.imgA_desactived = PIXI.Texture.fromImage("https://i.imgur.com/8YZpGqH.png");
ctx.imgA_actived = PIXI.Texture.fromImage("https://i.imgur.com/n3ICljI.png");
ctx.imgR_desactived = PIXI.Texture.fromImage("https://i.imgur.com/23mQrcu.png");
ctx.imgZ_desactived = PIXI.Texture.fromImage("https://i.imgur.com/ORZa0wv.png");
ctx.imgZ_actived = PIXI.Texture.fromImage("https://i.imgur.com/SKphfCW.png");
ctx.containerImgS = new PIXI.Sprite(ctx.imgS_desactived);
ctx.containerImgS.buttonMode = true;
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = -65;
ctx.containerImgS.y = 25;
ctx.containerImgS.interactive = true;
ctx.containerImgS.buttonMode = true;
ctx.containerImgA = new PIXI.Sprite(ctx.imgA_desactived);
ctx.containerImgA.buttonMode = true;
ctx.containerImgA.anchor.set(0.5);
ctx.containerImgA.x = -33;
ctx.containerImgA.y = 25;
ctx.containerImgA.interactive = true;
ctx.containerImgA.buttonMode = true;
ctx.containerImgR = new PIXI.Sprite(ctx.imgR_desactived);
ctx.containerImgR.buttonMode = true;
ctx.containerImgR.anchor.set(0.5);
ctx.containerImgR.x = -98;
ctx.containerImgR.y = 25;
ctx.containerImgR.interactive = true;
ctx.containerImgR.buttonMode = true;
ctx.containerImgZ = new PIXI.Sprite(ctx.imgZ_desactived);
ctx.containerImgZ.buttonMode = true;
ctx.containerImgZ.anchor.set(0.5);
ctx.containerImgZ.x = -1;
ctx.containerImgZ.y = 25;
ctx.containerImgZ.interactive = true;
ctx.containerImgZ.buttonMode = true;
ctx.containerImgZ2 = new PIXI.Sprite(ctx.imgZ_desactived);
ctx.containerImgZ2.buttonMode = true;
ctx.containerImgZ2.anchor.set(0.5);
ctx.containerImgZ2.x = -1;
ctx.containerImgZ2.y = 80;
ctx.containerImgZ2.interactive = true;
ctx.containerImgZ2.buttonMode = true;
ctx.containerImgZ3 = new PIXI.Sprite(ctx.imgZ_desactived);
ctx.containerImgZ3.buttonMode = true;
ctx.containerImgZ3.anchor.set(0.5);
ctx.containerImgZ3.x = -40;
ctx.containerImgZ3.y = 80;
ctx.containerImgZ3.interactive = true;
ctx.containerImgZ3.buttonMode = true;
let cursorUrl = [{
  nombre: "Space",
  url: "https://cdn.custom-cursor.com/db/8070/32/starter-space-cursor.png"
}, {
  nombre: "Donut",
  url: "https://cdn.custom-cursor.com/db/8198/32/material-donut-cursor.png"
}, {
  nombre: "Egg",
  url: "https://cdn.custom-cursor.com/db/9658/32/material-egg-cursor.png"
}, {
  nombre: "Fox",
  url: "https://cdn.custom-cursor.com/db/9028/32/hanako-kun-yako-and-fox-form-cursor.png"
}, {
  nombre: "Arrow",
  url: "https://cdn.custom-cursor.com/db/5052/32/arrow2859.png"
}, {
  nombre: "Dog_chucky",
  url: "https://cdn.custom-cursor.com/db/cursor/32/chucky_the_dog_cursor.png"
}, {
  nombre: "Dragon_Baby",
  url: "https://cdn.custom-cursor.com/db/pointer/32/Purple_Baby_Dragon_Pointer.png"
}, {
  nombre: "Ute_Fox",
  url: "https://cdn.custom-cursor.com/db/11817/32/ute-fox-pointer.png"
}, {
  nombre: "Hamster",
  url: "https://cdn.custom-cursor.com/db/11675/32/cute-hamster-pointer.png"
}, {
  nombre: "peach_cat",
  url: "https://cdn.custom-cursor.com/db/10964/32/cute-mochi-mochi-peach-cat-cursor.png"
}, {
  nombre: "bubble_Cat",
  url: "https://cdn.custom-cursor.com/db/10115/32/mochi-mochi-peach-cat-and-bubble-tea-pointer.png"
}, {
  nombre: "Paint",
  url: "https://cdn.custom-cursor.com/db/7600/32/stain-of-paint-cursor.png"
}, {
  nombre: "Cat",
  url: "https://cdn.custom-cursor.com/db/7279/32/slime-rancher-tabby-slime-and-tabby-slime-secret-style-pointer.png"
}, {
  nombre: "Glitch",
  url: "https://cdn.custom-cursor.com/db/8626/32/starter-glitch-cursor.png"
}];
let backgroundArena = [{
  nombre: "Default",
  url: "https://i.imgur.com/8ubx4RA.png"
}, {
  nombre: "Green",
  url: "https://i.imgur.com/PZLnVKC.png"
}, {
  nombre: "light blue",
  url: "https://i.imgur.com/dWtJFIx.png"
}, {
  nombre: "woman",
  url: "https://i.imgur.com/9QYRpm8.png"
}, {
  nombre: "Puntos",
  url: "https://i.imgur.com/terwEGk.png"
}, {
  nombre: "Corazones",
  url: "https://i.imgur.com/2eWBc7P.png"
}, {
  nombre: "Galaxy_Star",
  url: "https://i.imgur.com/yayb9Ru.png"
}, {
  nombre: "Desert",
  url: "https://i.imgur.com/Dp5FFto.png"
}];
function addHTML() {
  gameSettings.adblock = true;
  theoEvents.aip = true;
 
  var _0x2fc1aa = {
    sao: "br",
    vin: "Virginia - EEUU",
    dal: "Dallas - EEUU",
    fra: "Frankfurt - Alemania",
    sgp: "sg",
    tok: "jp",
    syd: "au",
    lon: "gb",
    tor: "ca",
    mex: "mx",
    sin: "sg",
    hil: "Honolulu - HawÃ¡i, EEUU",
    gra: "de"
  };
  var _0xd8f885 = [{
    code: "br",
    name: "Peru"
  }, {
    code: "mx",
    name: "Mexico"
  }, {
    code: "us",
    name: "EEUU"
  }, {
    code: "ca",
    name: "Canada"
  }, {
    code: "de",
    name: "Germania"
  }, {
    code: "fr",
    name: "Francia"
  }, {
    code: "sg",
    name: "Singapur"
  }, {
    code: "jp",
    name: "Japon"
  }, {
    code: "au",
    name: "Australia"
  }, {
    code: "gb",
    name: "Granbretana"
  }];
  var _0x51279d = $("<ul class=\"ui-tabs-nav\"></ul>");
  var _0x5f0acc = $("<div class=\"servers-container\"></div>");
  _0xd8f885.forEach(function (_0x46df11, _0x3fe37e) {
    var _0xa4e968 = $("\n                        <li class=\"ui-tabs-tab ui-tab " + (_0x3fe37e === 0 ? "ui-tab-active" : "") + "\" data-country=\"" + _0x46df11.code + "\">\n                            <a><span class=\"flag " + _0x46df11.code + "\"></span></a>\n                        </li>\n                    ");
    _0x51279d.append(_0xa4e968);
    var _0x58c436 = $("\n                        <div class=\"servers-" + _0x46df11.code + "\" style=\"display: " + (_0x3fe37e === 0 ? "block" : "none") + ";\">\n                            <table class=\"server-table\">\n                                <thead>\n                                    <tr>\n                                        <th>On/Off</th>\n                                        <th>Name</th>\n                                        <th>RegiÃ³n</th>\n                                        <th>Top 1</th>\n                                        <th>Streamer</th>\n                                    </tr>\n                                </thead>\n                                <tbody></tbody>\n                            </table>\n                        </div>\n                    ");
    _0x5f0acc.append(_0x58c436);
  });
  $(".description-text").append(_0x51279d, _0x5f0acc);
  $(".ui-tabs-tab").click(function () {
    var _0x5847ba = $(this).data("country");
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + _0x5847ba).fadeIn(200);
  });
  serverData.forEach(function (_0x4abd77) {
    var _0x6e624a = _0x4abd77.dataRoom.match(/[a-zA-Z]+/g).join("");
    if (_0x6e624a === "ae") {
      _0x6e624a = "gb";
    }
    var _0x198d73 = _0x4abd77.dataCon.match(/wss:\/\/([a-z]+)-/i);
    var _0x1fa038 = _0x198d73 ? _0x198d73[1] : null;
    var _0x4f4b26 = _0x2fc1aa[_0x1fa038] ? _0x2fc1aa[_0x1fa038].toUpperCase() : "Desconocido";
    if (!_0xd8f885.some(_0x4f8cde => _0x4f8cde.code === _0x6e624a)) {
      return;
    }
    var _0x953074 = _0x4abd77.dataRoom.trim().toLowerCase();
    var _0x3d8080 = top1Servers[_0x953074] || {
      Score: "???",
      StatusColor: "gray"
    };
    console.log("server.dataRoom:", _0x4abd77.dataRoom);
    console.log("Claves en top1Servers:", Object.keys(top1Servers));
    var _0x4c169a = $("\n                    <tr class=\"server-row\" data-wss=\"" + _0x4abd77.dataCon + "\" value=\"" + _0x4abd77.dataRoom + "\">\n                            <td class=\"server-status\">\n                                <span class=\"status-dot\" style=\"background-color: " + _0x3d8080.StatusColor + ";\"></span>\n                            </td>\n                            <td class=\"server-name\" >" + _0x4abd77.serverName + "</td>\n                            <td class=\"server-region\">" + _0x4f4b26 + "</td>\n                            <td class=\"server-top1\">" + _0x3d8080.Score + "</td>\n                            <td><img src=\"" + _0x4abd77.imgSrc + "\" class=\"streamer-image\"></td>\n                        </tr>\n                    ");
    $(".servers-" + _0x6e624a + " tbody").append(_0x4c169a);
  });
  $(document).on("click", ".server-row", function () {
    let _0x4c2947 = $(this).attr("value");
    let _0x4de361 = $(this).find(".server-name").text();
    let _0x351cf7 = $(this).attr("data-wss");
    if (_0x4de361 && _0x351cf7) {
      console.log("Conectando a:", _0x351cf7);
      ctx.setServer($(this).attr("value"));
      window.server_url = _0x351cf7;
      console.log(window.server_url);
      $("#mm-action-play").click();
      $("#adbl-continue").click();
    }
  });
  $(".mm-merchant-cont").replaceWith("");
  $("#mm-advice-cont").html("<input type=\"button\" style=\"width: 100%;height: 100%;border-radius: 5px;\" class=\"fullscreen_button\" value=\"VIEW FULLSCREEN\">");
  $(document).ready(function () {
    $(".fullscreen_button").on("click", function () {
      if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    });
  });
  $("\n                    <button id=\"op_tmw\">Settings</button>\n                    <div id=\"modal_tmw\" class=\"modal\">\n                        <div class=\"modal-content\">\n                         <div class=\"center\">\n                                <span class=\"close\">Ã—</span>\n                                <h2 class=\"modal-title\">Settings</h2>\n                        </div>\n                        <button id=\"resetScript\" class=\"reset-button\">Change Version</button>\n                     </div>\n                    </div>\n                ").insertAfter("#mm-store");
  var _0x2fd5c6 = document.getElementById("modal_tmw");
  var _0x4702d2 = document.getElementById("op_tmw");
  var _0x4ebdb2 = document.getElementsByClassName("close")[0];
  _0x4702d2.onclick = function () {
    _0x2fd5c6.style.display = "block";
  };
  _0x4ebdb2.onclick = function () {
    _0x2fd5c6.style.display = "none";
  };
  $("#resetScript").click(async function () {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach(function (_0x28a893) {
      document.cookie = _0x28a893.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    if ("caches" in window) {
      caches.keys().then(function (_0x4aa48f) {
        for (let _0x13fc49 of _0x4aa48f) {
          caches.delete(_0x13fc49);
        }
      });
    }
    if ("serviceWorker" in navigator) {
      const _0x398c91 = await navigator.serviceWorker.getRegistrations();
      for (let _0x271681 of _0x398c91) {
        await _0x271681.unregister();
      }
    }
    localStorage.removeItem("scriptSeleccionado");
    location.reload();
  });
  $("#loa831pibur0w4gv").replaceWith("<div id=\"settins-container\"style=\" border-radius: 5px;background: rgba(0,0,0,.25);height: 280px;margin: 30px 0;overflow: scroll;padding: 2px 5px;box-sizing: border-box;color: rgba(255,255,255,.8); \"><div class=\"label\" id=\"titleSetings\">Settings</div><div class=\"container\"><span class=\"settings_span\" id=\"extesnionVersionTime\">You use the trial version, activate and discover new options: <a href=\"https://wormxt.theoxt.com\">Actived</a>" + ("<button style=\"cursor:pointer;\" onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copiado! copied!'));\">Copy you basic ID: Copy</button></span>") + "</div><div class=\"container\"><span class=\"settings_span\" >SkinVisible(Public): </span><input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\"></div><div class=\"container\"><span class=\"settings_span\">power ups Size: </span><input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"" + gameSettings.PortionSize + "\" step=\"1\" onmousemove=\"rangevalue1.value=value\" /><output id=\"rangevalue1\">" + gameSettings.PortionSize + "</output></div><div class=\"container\"><span class=\"settings_span\">power ups Aura: </span><input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"" + gameSettings.PortionAura + "\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" /><output id=\"PortionAuravalue\">" + gameSettings.PortionAura + "</output></div><div class=\"container\"><span class=\"settings_span\">Comida Size: </span><input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + gameSettings.FoodSize + "\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" /><output id=\"rangevalue2\">" + gameSettings.FoodSize + "</output></div><div class=\"container\"><span class=\"settings_span\">Comida Shadow: </span><input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + gameSettings.FoodShadow + "\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" /><output id=\"FoodShadowvalue\">" + gameSettings.FoodShadow + "</output></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Hide TOP TEAMMATES</span><input class=\"settings-switchZoom\" id=\"settings-TopTeamMate-switch\" type=\"checkbox\"><label for=\"settings-TopTeamMate-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Show TOP SCORE</span><input class=\"settings-switchZoom\" id=\"settings-topscore-switch\" type=\"checkbox\"><label for=\"settings-topscore-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Arrow(Mobile)</span><input class=\"settings-switchZoom\" id=\"settings-Arrow-switch\" type=\"checkbox\"><label for=\"settings-Arrow-switch\"></label></div><div class=\"settings-lineZoom\" id=\"addsettings\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Hide Ability Speed</span><input class=\"settings-switchZoom\" id=\"settings-AbilitySpeed-switch\" type=\"checkbox\"><label for=\"settings-AbilitySpeed-switch\"></label></div><div class='cursor-container'></div><div class='background-container'></div></div>");
  $("#PortionSize").on("input", function () {
    gameSettings.PortionSize = $(this).val();
    localStorage.PotenciadorSize = gameSettings.PortionSize;
  });
  $("#PortionAura").on("input", function () {
    gameSettings.PortionAura = $(this).val();
    localStorage.PotenciadorAura = gameSettings.PortionAura;
  });
  $("#FoodSize").on("input", function () {
    gameSettings.FoodSize = $(this).val();
    localStorage.ComidaSize = gameSettings.FoodSize;
  });
  $("#FoodShadow").on("input", function () {
    gameSettings.FoodShadow = $(this).val();
    localStorage.ComidaShadow = gameSettings.FoodShadow;
  });
  $("#settings-AbilitySpeed-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.SpeedAbility = false;
    } else {
      console.log("I'm not checked");
      gameSettings.SpeedAbility = true;
    }
  });
  $("#settings-TopTeamMate-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.visibleTOPTeam = false;
    } else {
      console.log("I'm not checked");
      gameSettings.visibleTOPTeam = true;
    }
  });
  $("#settings-topscore-switch").on("click", function () {
    if (this.checked) {
      gameSettings.topHS = false;
    } else {
      gameSettings.topHS = true;
    }
  });
  $("#settings-Arrow-switch").on("click", function () {
    if (this.checked) {
      gameSettings.arrow = true;
    } else {
      gameSettings.arrow = false;
    }
  });
  let _0x31fdcc = _wrmxt.isNumberValid(gameSettings.idReplaceSkin);
  if (_0x31fdcc) {
    $("#inputReplaceSkin").val(gameSettings.idReplaceSkin);
  } else {
    let _0x25f6fb = $("#inputReplaceSkin").val();
    _0x31fdcc = _wrmxt.isNumberValid(_0x25f6fb);
    gameSettings.idReplaceSkin = _0x31fdcc ? _0x25f6fb : 35;
  }
  ;
  $("#KeyRespawn,#KeyAutoMov").on("keydown", function (_0x18bd50) {
    if (isValidHotkey(_0x18bd50)) {
      var _0x4e13f5 = $(this);
      var _0x314747 = getPresedKey(_0x18bd50);
      var _0x45454c = _0x18bd50.keyCode;
      _0x4e13f5.val(_0x314747);
      _0x4e13f5.blur();
      window.keyMove = _0x45454c;
      window.localStorage.setItem(_0x4e13f5.attr("id"), _0x45454c);
    } else {
      _0x18bd50.preventDefault();
    }
  });
  for (a = 0; a < cursorUrl.length; a++) {
    var _0xd80077 = cursorUrl[a].url;
    var _0x161cb3 = cursorUrl[a].nombre;
    let _0x8f546d = document.createElement("img");
    _0x8f546d.src = _0xd80077;
    $(".cursor-container").prepend(_0x8f546d);
    $(_0x8f546d).attr("class", "cursor");
    $(_0x8f546d).click(function () {
      let _0x27bfed = $(this).attr("src");
      localStorage.cursorSeleccionado = _0x27bfed;
      $("#game-cont").css({
        cursor: "url(" + _0x27bfed + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + _0x27bfed + "), default"
      });
      $("body").css({
        cursor: "url(" + _0x27bfed + "), default"
      });
    });
  }
  $("#game-cont").css({
    cursor: "url(" + localStorage.cursorSeleccionado + "), default"
  });
  $("#game-canvas").css({
    cursor: "url(" + localStorage.cursorSeleccionado + "), default"
  });
  $("body").css({
    cursor: "url(" + localStorage.cursorSeleccionado + "), default"
  });
  $(".cursor-container").prepend("<span class='spancursor'>selectCursor: </span>");
  $(".cursor-container").append("<img src='https://wormxt...' class='defaultCursor' ></img>");
  $(".defaultCursor").click(function () {
    $("#game-cont").css({
      cursor: "default"
    });
    $("#game-canvas").css({
      cursor: "default"
    });
    $("body").css({
      cursor: "default"
    });
  });
  for (a = 0; a < backgroundArena.length; a++) {
    var _0x1e486c = backgroundArena[a].url;
    var _0x5ecee0 = backgroundArena[a].nombre;
    let _0x3c5499 = document.createElement("img");
    _0x3c5499.src = _0x1e486c;
    $(".background-container").prepend(_0x3c5499);
    $(_0x3c5499).attr("class", "background");
    $(_0x3c5499).attr("value", _0x5ecee0);
    $(_0x3c5499).click(function () {
      let _0x4a4f04 = $(this).attr("src");
      let _0x4acb5f = $(this).attr("value");
      backgroundIMG = _0x4a4f04;
      localStorage.fondoSeleccionado = backgroundIMG;
      alert("You selected the background: " + _0x4acb5f);
    });
  }
  $(".background-container").prepend("<span class='spanbackground'>selectBackground: </span>");
  $("#markup-footer").append("<a class=\"link\" href=\"https://theoxt.com\">Swykz | TheoXT</a>");
}
function addPay5html() {
  $("#addsettings").after("<div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Hide All Ability</span><input class=\"settings-switchZoom\" id=\"settings-AllAbility-switch\" type=\"checkbox\"><label for=\"settings-AllAbility-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">headShots Guie</span><input class=\"settings-switchZoom\" id=\"settings-hs_helper-switch\" type=\"checkbox\"><label for=\"settings-hs_helper-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Habilidad ComerSpeed</span><input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"><label for=\"settings-Abilityzoom-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Laser HS(Artiker)</span><input class=\"settings-switchZoom\" id=\"settings-laserHS-switch\" type=\"checkbox\"><label for=\"settings-laserHS-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Vueltas rapidas (â†”)</span><input class=\"settings-switchZoom\" id=\"settings-Abilityzoom2-switch\" type=\"checkbox\"><label for=\"settings-Abilityzoom2-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Vueltas rapidas (â†•)</span><input class=\"settings-switchZoom\" id=\"settings-Abilityzoom3-switch\" type=\"checkbox\"><label for=\"settings-Abilityzoom3-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Streming Mode</span><input class=\"settings-switchZoom\" id=\"settings-Streming-switch\" type=\"checkbox\"><label for=\"settings-Streming-switch\"></label></div><div class=\"container\"><span class=\"settings_span\">Minimap position ->: </span><input style=\"width: 60px\" type=\"text\" placeholder=\"60\"  name=\"setMinimapX\" id=\"setMinimapX\" value=\"35\" maxlength=\"4\" onchange=\"setMinimapX(this)\"></div><div class=\"container\"><span class=\"settings_span\">Leaderboard position <-: </span><input style=\"width: 60px\" type=\"text\"  placeholder=\"225\" name=\"setLeaderboardX\" id=\"setLeaderboardX\" value=\"35\" maxlength=\"4\" onchange=\"setLeaderboardX(this)\"></div>");
  let _0x3a3173 = _wrmxt.isNumberValid(gameSettings.MinimapPositionX);
  if (_0x3a3173) {
    $("#setMinimapX").val(gameSettings.MinimapPositionX);
  } else {
    let _0x5d52b4 = $("#setMinimapX").val();
    _0x3a3173 = _wrmxt.isNumberValid(_0x5d52b4);
    gameSettings.MinimapPositionX = _0x3a3173 ? _0x5d52b4 : 60;
  }
  ;
  let _0x360920 = _wrmxt.isNumberValid(gameSettings.LeaderboardPositionX);
  if (_0x360920) {
    $("#setLeaderboardX").val(gameSettings.LeaderboardPositionX);
  } else {
    let _0x3bfeff = $("#setLeaderboardX").val();
    _0x360920 = _wrmxt.isNumberValid(_0x3bfeff);
    gameSettings.LeaderboardPositionX = _0x360920 ? _0x3bfeff : 0;
  }
  ;
  $("#settings-AllAbility-switch").on("click", function () {
    if (this.checked) {
      theoPay3PacketObjects.visiblePowersAll = false;
    } else {
      theoPay3PacketObjects.visiblePowersAll = true;
    }
  });
  $("#settings-Streming-switch").on("click", function () {
    if (this.checked) {
      gameSettings.isModeStreming = true;
    } else {
      gameSettings.isModeStreming = false;
    }
  });
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      gameSettings.laserHS = true;
    } else {
      gameSettings.laserHS = false;
    }
  });
  $("#settings-hs_helper-switch").on("click", function () {
    if (this.checked) {
      gameSettings.hs_Guie = true;
    } else {
      gameSettings.hs_Guie = false;
    }
  });
  $("#settings-Abilityzoom-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.eat_animation = 1;
    } else {
      console.log("I'm not checked");
      gameSettings.eat_animation = 0.0025;
    }
  });
  $("#settings-Abilityzoom2-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.smoothCameraX = 0.2;
    } else {
      console.log("I'm not checked");
      gameSettings.smoothCameraX = 0.5;
    }
  });
  $("#settings-Abilityzoom3-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.smoothCameraY = 0.2;
    } else {
      console.log("I'm not checked");
      gameSettings.smoothCameraY = 0.5;
    }
  });
}
function addPay3html() {
  $("#addsettings").after("<div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Habilidad ComerSpeed</span><input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"><label for=\"settings-Abilityzoom-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Hide All Ability</span><input class=\"settings-switchZoom\" id=\"settings-AllAbility-switch\" type=\"checkbox\"><label for=\"settings-AllAbility-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">headShots Guie</span><input class=\"settings-switchZoom\" id=\"settings-hs_helper-switch\" type=\"checkbox\"><label for=\"settings-hs_helper-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Vueltas rapidas (â†”)</span><input class=\"settings-switchZoom\" id=\"settings-Abilityzoom2-switch\" type=\"checkbox\"><label for=\"settings-Abilityzoom2-switch\"></label></div><div class=\"settings-lineZoom\"><span class=\"settings_span\" style=\"padding:6px;float:left;\">Vueltas rapidas (â†•)</span><input class=\"settings-switchZoom\" id=\"settings-Abilityzoom3-switch\" type=\"checkbox\"><label for=\"settings-Abilityzoom3-switch\"></label></div>");
  $("#settings-Abilityzoom-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.eat_animation = 1;
    } else {
      console.log("I'm not checked");
      gameSettings.eat_animation = 0.0025;
    }
  });
  $("#settings-AllAbility-switch").on("click", function () {
    if (this.checked) {
      theoPay3PacketObjects.visiblePowersAll = false;
    } else {
      theoPay3PacketObjects.visiblePowersAll = true;
    }
  });
  $("#settings-hs_helper-switch").on("click", function () {
    if (this.checked) {
      gameSettings.hs_Guie = true;
    } else {
      gameSettings.hs_Guie = false;
    }
  });
  $("#settings-Abilityzoom2-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.smoothCameraX = 0.2;
    } else {
      console.log("I'm not checked");
      gameSettings.smoothCameraX = 0.5;
    }
  });
  $("#settings-Abilityzoom3-switch").on("click", function () {
    if (this.checked) {
      console.log("I am checked");
      gameSettings.smoothCameraY = 0.2;
    } else {
      console.log("I'm not checked");
      gameSettings.smoothCameraY = 0.5;
    }
  });
}
function addNoPayHTML() {
  var _0x36d006 = "https://www.facebook.com/SwyKz-Mods-extensiones-108023121478215";
  var _0x1da17b = "https://discord.gg/HK86w9mGw7";
  $(".description-text").replaceWith("<div class=\"description-text\">");
  $(".description-text").prepend("<p id='title'>WormateXT</p>");
  $("#title").after("<img src=\"https://i.imgur.com/G1ElnhP.png\" width=\"56\" alt=\"\" style=\"border-radius: 50px;left: 11%;position: fixed;\"> <div id=\"msg1\"></div>");
  $("#msg1").after("<div id=\"idwormxt\" style=\"position:relative;top:65px;text-align: center\">\n        <input type=\"text\" value=\"" + gameSettings.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"cursor:pointer;\" onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copiado! copied!'));\">COPY</button>\n        <input type=\"button\" value=\"FB: ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + _0x36d006 + "'\" style=\"margin-top: 5px;width: 100%;background-color: #2374e1;border-radius: 5px;color: #fff;cursor: pointer;border-color: #222;\">\n        <input type=\"button\" value=\"DC: ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + _0x1da17b + "'\" style=\"margin-top: 5px;width: 100%;background-color: #5865F2;border-radius: 5px;color: #fff;cursor: pointer;border-color: #222;\">\n    </div>");
}
function setKillsCounts(_0x5cc0dd, _0x483185) {
  const _0x3d56c2 = function (_0x188136, _0x11e5e8, _0x47a329, _0x36ffdd) {
    ctx.setCountGame(_0x188136, _0x11e5e8, _0x47a329, _0x36ffdd);
  };
  if (_0x5cc0dd === "count") {
    gameSettings.kill = (gameSettings.kill || 0) + (_0x483185 ? 0 : 1);
    gameSettings.headshot = (gameSettings.headshot || 0) + (_0x483185 ? 1 : 0);
    _0x3d56c2(gameSettings.kill, gameSettings.headshot, gameSettings.totalKills, gameSettings.totalHeadshots);
  }
  if (_0x5cc0dd === "open") {
    gameSettings.kill = 0;
    gameSettings.headshot = 0;
    _0x3d56c2(gameSettings.kill, gameSettings.headshot, gameSettings.totalKills, gameSettings.totalHeadshots);
  }
  if (_0x5cc0dd === "closed") {}
  if (_0x5cc0dd === "cerrar") {
    gameSettings.kill = 0;
    gameSettings.headshot = 0;
    gameSettings.totalKills = 0;
    gameSettings.totalHeadshots = 0;
  }
}
_0x6286xb0 = function () {
  clearInterval(_0x6286x1f);
  if ((_0x6286x1f = null) == null) {
    _0x6286x1f = setInterval(function () {
      var _0x3fcc80 = theoEvents.eventoPrincipal.Bn;
      let _0x5e0009 = Math.PI;
      var _0xc69f38 = _0x3fcc80 + _0x5e0009 / 360 * 9;
      if (_0xc69f38 >= _0x5e0009) {
        _0xc69f38 = -_0x3fcc80;
      }
      theoEvents.eventoPrincipal.Bn = _0xc69f38;
    }, 55);
  }
};
_0x6286xb1 = function () {
  if (_0x6286x22 >= 40) {
    if (_0x6286x23) {
      _0x6286x21 = _0x6286x21 + 25;
    } else {
      _0x6286x21 = _0x6286x21 - 100;
    }
    _0x6286x22 = 1;
  }
};
_0x6286xb2 = function () {
  if (_0x6286x21 == 55 && _0x6286x22 >= 40) {
    _0x6286x21 = _0x6286x21 + 25;
    _0x6286x22 = 1;
    _0x6286x23 = true;
  }
  if (_0x6286x21 == 80) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 105) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 130) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 155) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 180) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 205) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 230) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 255) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 280) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 305) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 330) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 355) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 380) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 405) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 430) {
    _0x6286xb1();
  }
  if (_0x6286x21 == 455 && _0x6286x22 >= 40) {
    _0x6286x21 = _0x6286x21 - 100;
    _0x6286x22 = 1;
    _0x6286x23 = false;
  }
};
_0x6286xb3 = function () {
  clearInterval(_0x6286x1f);
  if ((_0x6286x1f = null) == null) {
    var _0x17f334 = theoEvents.eventoPrincipal.Bn;
    let _0x580aa4 = Math.PI;
    var _0x3ea375 = _0x17f334 + _0x580aa4 / 360 * 9;
    if (_0x3ea375 >= _0x580aa4) {
      _0x3ea375 = -_0x17f334;
    }
    theoEvents.eventoPrincipal.Bn = _0x3ea375;
    _0x6286x22 = _0x6286x22 + 1;
    _0x6286xb2();
    if (_0x6286x20) {
      _0x6286x1f = setInterval(_0x6286xb3, _0x6286x21);
    }
  }
};
_0x6286xb4 = function () {
  _0x6286x20 = true;
  _0x6286x21 = 55;
  _0x6286x22 = 1;
  _0x6286x23 = true;
  _0x6286xb3();
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x3a0839) {
  return typeof _0x3a0839;
} : function (_0x49424d) {
  if (_0x49424d && typeof Symbol == "function" && _0x49424d.constructor === Symbol && _0x49424d !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof _0x49424d;
  }
};
var GoogleAuth;
window.addEventListener("load", function () {
  function _0x1b9f62() {
    (function (_0x586772, _0x29ebb2, _0x41e43a) {
      function _0x17ae36(_0x5aef14, _0x1afb9a) {
        return (_0x5aef14 === undefined ? "undefined" : _typeof(_0x5aef14)) === _0x1afb9a;
      }
      function _0x2b989c() {
        if (typeof _0x29ebb2.createElement != "function") {
          return _0x29ebb2.createElement(arguments[0]);
        } else if (_0x250177) {
          return _0x29ebb2.createElementNS.call(_0x29ebb2, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return _0x29ebb2.createElement.apply(_0x29ebb2, arguments);
        }
      }
      var _0xb06b32 = [];
      var _0x507da7 = [];
      var _0x42ac50 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (_0x54f4e8, _0x2a7fc8) {
          var _0x465dd3 = this;
          setTimeout(function () {
            _0x2a7fc8(_0x465dd3[_0x54f4e8]);
          }, 0);
        },
        addTest: function (_0x20ea80, _0x2e0180, _0x348c5a) {
          _0x507da7.push({
            name: _0x20ea80,
            fn: _0x2e0180,
            options: _0x348c5a
          });
        },
        addAsyncTest: function (_0x1e4c1d) {
          _0x507da7.push({
            name: null,
            fn: _0x1e4c1d
          });
        }
      };
      function _0x1667b9() {}
      _0x1667b9.prototype = _0x42ac50;
      _0x1667b9 = new _0x1667b9();
      var _0x481bc5 = false;
      try {
        _0x481bc5 = "WebSocket" in _0x586772 && _0x586772.WebSocket.CLOSING === 2;
      } catch (_0x3f3b1f) {}
      _0x1667b9.addTest("websockets", _0x481bc5);
      var _0x5abe52 = _0x29ebb2.documentElement;
      var _0x250177 = _0x5abe52.nodeName.toLowerCase() === "svg";
      _0x1667b9.addTest("canvas", function () {
        var _0xae0f72 = _0x2b989c("canvas");
        return !!_0xae0f72.getContext && !!_0xae0f72.getContext("2d");
      });
      _0x1667b9.addTest("canvastext", function () {
        return _0x1667b9.canvas !== false && typeof _0x2b989c("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var _0x47f3e5;
        var _0x367b47;
        var _0x4cf52b;
        var _0x216245;
        var _0x3e6900;
        var _0x43f204;
        var _0x5668ce;
        for (var _0x43d966 in _0x507da7) {
          if (_0x507da7.hasOwnProperty(_0x43d966)) {
            _0x47f3e5 = [];
            _0x367b47 = _0x507da7[_0x43d966];
            if (_0x367b47.name && (_0x47f3e5.push(_0x367b47.name.toLowerCase()), _0x367b47.options && _0x367b47.options.aliases && _0x367b47.options.aliases.length)) {
              for (_0x4cf52b = 0; _0x4cf52b < _0x367b47.options.aliases.length; _0x4cf52b++) {
                _0x47f3e5.push(_0x367b47.options.aliases[_0x4cf52b].toLowerCase());
              }
            }
            _0x216245 = _0x17ae36(_0x367b47.fn, "function") ? _0x367b47.fn() : _0x367b47.fn;
            _0x3e6900 = 0;
            for (; _0x3e6900 < _0x47f3e5.length; _0x3e6900++) {
              _0x43f204 = _0x47f3e5[_0x3e6900];
              _0x5668ce = _0x43f204.split(".");
              if (_0x5668ce.length === 1) {
                _0x1667b9[_0x5668ce[0]] = _0x216245;
              } else {
                if (!!_0x1667b9[_0x5668ce[0]] && !(_0x1667b9[_0x5668ce[0]] instanceof Boolean)) {
                  _0x1667b9[_0x5668ce[0]] = new Boolean(_0x1667b9[_0x5668ce[0]]);
                }
                _0x1667b9[_0x5668ce[0]][_0x5668ce[1]] = _0x216245;
              }
              _0xb06b32.push((_0x216245 ? "" : "no-") + _0x5668ce.join("-"));
            }
          }
        }
      })();
      (function (_0x328844) {
        var _0x5e45ba = _0x5abe52.className;
        var _0x1dae4a = _0x1667b9._config.classPrefix || "";
        if (_0x250177) {
          _0x5e45ba = _0x5e45ba.baseVal;
        }
        if (_0x1667b9._config.enableJSClass) {
          var _0x478531 = new RegExp("(^|\\s)" + _0x1dae4a + "no-js(\\s|$)");
          _0x5e45ba = _0x5e45ba.replace(_0x478531, "$1" + _0x1dae4a + "js$2");
        }
        if (_0x1667b9._config.enableClasses) {
          _0x5e45ba += " " + _0x1dae4a + _0x328844.join(" " + _0x1dae4a);
          if (_0x250177) {
            _0x5abe52.className.baseVal = _0x5e45ba;
          } else {
            _0x5abe52.className = _0x5e45ba;
          }
        }
      })(_0xb06b32);
      delete _0x42ac50.addTest;
      delete _0x42ac50.addAsyncTest;
      for (var _0x3db097 = 0; _0x3db097 < _0x1667b9._q.length; _0x3db097++) {
        _0x1667b9._q[_0x3db097]();
      }
      _0x586772.Modernizr = _0x1667b9;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x1b9f62()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function _0x3b5dc5() {
      return window.anApp = _0x1bf552;
    }
    var Game = {};
    var _0x1102f8 = {};
    var getRandomElement = {};
    getRandomElement.a = {
      b: "https://gateway.wormate.io",
      c: "https://resources.wormate.io",
      d: "/images/linelogo-xmas2023.png",
      e: "/images/guest-avatar-xmas2023.png",
      f: "/images/confetti-xmas2023.png",
      g: "/images/bg-event-pattern-xmas2023.png"
    };
    getRandomElement.a.i = function () {
      var _0x37ae5a = window.I18N_LANG;
      _0x37ae5a ||= "en";
      return _0x37ae5a;
    }();
    getRandomElement.a.j = function () {
      var _0x549d48 = undefined;
      switch (getRandomElement.a.i) {
        case "uk":
          _0x549d48 = "uk_UA";
          break;
        case "de":
          _0x549d48 = "de_DE";
          break;
        case "fr":
          _0x549d48 = "fr_FR";
          break;
        case "es":
          _0x549d48 = "es_ES";
          break;
        default:
          _0x549d48 = "en_US";
      }
      return _0x549d48;
    }();
    moment.locale(getRandomElement.a.j);
    var _0x1bf552 = undefined;
    var pixiElements = function () {
      var _0x529deb = eval("PIXI");
      var _0x4fef17 = _0x529deb["BLEND_MODES"];
      var _0x2d012c = _0x529deb["WRAP_MODES"];
      var _0x29e11a = {};
      _0x29e11a.k = _0x529deb["Container"];
      _0x29e11a.l = _0x529deb["BaseTexture"];
      _0x29e11a.m = _0x529deb["Texture"];
      _0x29e11a.n = _0x529deb["Renderer"];
      _0x29e11a.o = _0x529deb["Graphics"];
      _0x29e11a.p = _0x529deb["Shader"];
      _0x29e11a.q = _0x529deb["Rectangle"];
      _0x29e11a.r = _0x529deb["Sprite"];
      _0x29e11a.s = _0x529deb["Text"];
      _0x29e11a.t = _0x529deb["Geometry"];
      _0x29e11a.u = _0x529deb["Mesh"];
      _0x29e11a.v = {
        z: _0x4fef17["ADD"],
        A: _0x4fef17["SCREEN"],
        B: _0x4fef17["MULTIPLY"]
      };
      _0x29e11a.C = {
        D: _0x2d012c["REPEAT"]
      };
      return _0x29e11a;
    }();
    _0x1102f8.F = Math.PI * 2;
    _0x1102f8.G = Math.PI;
    getRandomElement.H = function (_0x55e354) {
      return window.I18N_MESSAGES[_0x55e354];
    };
    getRandomElement.I = function (_0x282acf) {
      if (_0x282acf[getRandomElement.a.i]) {
        return _0x282acf[getRandomElement.a.i];
      } else if (_0x282acf.en) {
        return _0x282acf.en;
      } else {
        return _0x282acf.x;
      }
    };
    getRandomElement.J = function (_0x3be45e) {
      var _0x4a425f = (Math.floor(_0x3be45e) % 60).toString();
      var _0x49afdb = (Math.floor(_0x3be45e / 60) % 60).toString();
      var _0x1b6c58 = (Math.floor(_0x3be45e / 3600) % 24).toString();
      var _0x5ef521 = Math.floor(_0x3be45e / 86400).toString();
      var _0x34234c = getRandomElement.H("util.time.days");
      var _0x5dc2e9 = getRandomElement.H("util.time.hours");
      var _0x24c550 = getRandomElement.H("util.time.min");
      var _0x110705 = getRandomElement.H("util.time.sec");
      if (_0x5ef521 > 0) {
        return _0x5ef521 + " " + _0x34234c + " " + _0x1b6c58 + " " + _0x5dc2e9 + " " + _0x49afdb + " " + _0x24c550 + " " + _0x4a425f + " " + _0x110705;
      } else if (_0x1b6c58 > 0) {
        return _0x1b6c58 + " " + _0x5dc2e9 + " " + _0x49afdb + " " + _0x24c550 + " " + _0x4a425f + " " + _0x110705;
      } else if (_0x49afdb > 0) {
        return _0x49afdb + " " + _0x24c550 + " " + _0x4a425f + " " + _0x110705;
      } else {
        return _0x4a425f + " " + _0x110705;
      }
    };
    getRandomElement.K = function (_0x270c2a) {
      if (_0x270c2a.includes("href")) {
        return _0x270c2a.replaceAll("href", "target=\"_black\" href");
      } else {
        return _0x270c2a;
      }
    };
    getRandomElement.L = function (_0x6fe969, _0x2295fa, _0x12fc9b) {
      var _0x48358e = document.createElement("script");
      var _0x3af486 = true;
      if (_0x2295fa !== undefined && _0x2295fa !== null) {
        if (_0x2295fa.id !== undefined) {
          _0x48358e.id = _0x2295fa.id;
        }
        if (_0x2295fa.async !== undefined && _0x2295fa.async) {
          _0x48358e.async = "async";
        }
        if (_0x2295fa.defer !== undefined && _0x2295fa.defer) {
          _0x48358e.defer = "defer";
        }
        if (_0x2295fa.crossorigin !== undefined) {
          _0x48358e.crossorigin = _0x2295fa.crossorigin;
        }
      }
      _0x48358e.type = "text/javascript";
      _0x48358e.src = _0x6fe969;
      if (_0x12fc9b) {
        _0x48358e.onload = _0x48358e.onreadystatechange = function () {
          _0x3af486 = false;
          try {
            _0x12fc9b();
          } catch (_0x232359) {}
          _0x48358e.onload = _0x48358e.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x48358e);
    };
    getRandomElement.M = function (_0x2da1c1, _0x4e730e) {
      var _0x108509 = _0x4e730e;
      _0x108509.prototype = Object.create(_0x2da1c1.prototype);
      _0x108509.prototype.constructor = _0x108509;
      _0x108509.parent = _0x2da1c1;
      return _0x108509;
    };
    getRandomElement.N = function (_0x22acd8) {
      _0x22acd8 %= _0x1102f8.F;
      if (_0x22acd8 < 0) {
        return _0x22acd8 + _0x1102f8.F;
      } else {
        return _0x22acd8;
      }
    };
    getRandomElement.O = function (_0xcbec24, _0x195a15, _0x24b122) {
      return getRandomElement.P(_0x24b122, _0xcbec24, _0x195a15);
    };
    getRandomElement.P = function (_0x146f43, _0x1ab2b0, _0x4242c6) {
      if (_0x146f43 > _0x4242c6) {
        return _0x4242c6;
      } else if (_0x146f43 < _0x1ab2b0) {
        return _0x1ab2b0;
      } else if (Number.isFinite(_0x146f43)) {
        return _0x146f43;
      } else {
        return (_0x1ab2b0 + _0x4242c6) * 0.5;
      }
    };
    getRandomElement.Q = function (_0x365d22, _0x2c6d75, _0x1e4d9f, _0xeadbfa) {
      if (_0x2c6d75 > _0x365d22) {
        return Math.min(_0x2c6d75, _0x365d22 + _0x1e4d9f * _0xeadbfa);
      } else {
        return Math.max(_0x2c6d75, _0x365d22 - _0x1e4d9f * _0xeadbfa);
      }
    };
    getRandomElement.R = function (_0x14a7f4, _0x14a5f5, _0x62091f, _0x2daac6, _0x41a695) {
      return _0x14a5f5 + (_0x14a7f4 - _0x14a5f5) * Math.pow(1 - _0x2daac6, _0x62091f / _0x41a695);
    };
    getRandomElement.S = function (_0xb36ec0, _0x31f733, _0x5f1ecf) {
      return _0xb36ec0 - (_0xb36ec0 - _0x31f733) * _0x5f1ecf;
    };
    getRandomElement.T = function (_0x13f221, _0x183024, _0x5278a7, _0x145698) {
      var _0x520899 = _0x5278a7;
      var _0x3df271 = _0x183024;
      var _0x86e922 = _0x183024 + _0x145698;
      if (_0x13f221 == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x21dcfd = _0x13f221.length >>> 0;
      var _0x4c2985 = _0x520899 >> 0;
      var _0x125a56 = _0x4c2985 < 0 ? Math.max(_0x21dcfd + _0x4c2985, 0) : Math.min(_0x4c2985, _0x21dcfd);
      var _0x4819fd = _0x3df271 >> 0;
      var _0x5865be = _0x4819fd < 0 ? Math.max(_0x21dcfd + _0x4819fd, 0) : Math.min(_0x4819fd, _0x21dcfd);
      var _0x208c90 = _0x86e922 === undefined ? _0x21dcfd : _0x86e922 >> 0;
      var _0x34a043 = _0x208c90 < 0 ? Math.max(_0x21dcfd + _0x208c90, 0) : Math.min(_0x208c90, _0x21dcfd);
      var _0x152a8d = Math.min(_0x34a043 - _0x5865be, _0x21dcfd - _0x125a56);
      var _0x2ca48e = 1;
      for (_0x5865be < _0x125a56 && _0x125a56 < _0x5865be + _0x152a8d && (_0x2ca48e = -1, _0x5865be += _0x152a8d - 1, _0x125a56 += _0x152a8d - 1); _0x152a8d > 0;) {
        if (_0x5865be in _0x13f221) {
          _0x13f221[_0x125a56] = _0x13f221[_0x5865be];
        } else {
          delete _0x13f221[_0x125a56];
        }
        _0x5865be += _0x2ca48e;
        _0x125a56 += _0x2ca48e;
        _0x152a8d--;
      }
      return _0x13f221;
    };
    getRandomElement.U = function (_0x393fdf) {
      if (_0x393fdf.parent != null) {
        _0x393fdf.parent.removeChild(_0x393fdf);
      }
    };
    getRandomElement.V = function (_0x4c9ef2, _0x104d24) {
      return _0x4c9ef2 + (_0x104d24 - _0x4c9ef2) * Math.random();
    };
    getRandomElement.W = function (_0x32418f) {
      return _0x32418f[parseInt(Math.random() * _0x32418f.length)];
    };
    getRandomElement.X = function () {
      return Math.random().toString(36).substring(2, 15);
    };
    getRandomElement.Y = function (_0x3e316a, _0x509c2d, _0x11c714) {
      var _0x1682b4 = (1 - Math.abs(_0x11c714 * 2 - 1)) * _0x509c2d;
      var _0x1cc0e6 = _0x1682b4 * (1 - Math.abs(_0x3e316a / 60 % 2 - 1));
      var _0xea5996 = _0x11c714 - _0x1682b4 / 2;
      if (_0x3e316a >= 0 && _0x3e316a < 60) {
        return [_0xea5996 + _0x1682b4, _0xea5996 + _0x1cc0e6, _0xea5996 + 0];
      } else if (_0x3e316a >= 60 && _0x3e316a < 120) {
        return [_0xea5996 + _0x1cc0e6, _0xea5996 + _0x1682b4, _0xea5996 + 0];
      } else if (_0x3e316a >= 120 && _0x3e316a < 180) {
        return [_0xea5996 + 0, _0xea5996 + _0x1682b4, _0xea5996 + _0x1cc0e6];
      } else if (_0x3e316a >= 180 && _0x3e316a < 240) {
        return [_0xea5996 + 0, _0xea5996 + _0x1cc0e6, _0xea5996 + _0x1682b4];
      } else if (_0x3e316a >= 240 && _0x3e316a < 300) {
        return [_0xea5996 + _0x1cc0e6, _0xea5996 + 0, _0xea5996 + _0x1682b4];
      } else {
        return [_0xea5996 + _0x1682b4, _0xea5996 + 0, _0xea5996 + _0x1cc0e6];
      }
    };
    getRandomElement.Z = function (_0x46bf32, _0x45bcc9, _0x141f54) {
      $.get(_0x46bf32).fail(_0x45bcc9).done(_0x141f54);
    };
    getRandomElement.$ = function (_0x48c100, _0x355ebb, _0x451c0b, _0x253ddb) {
      $.ajax({
        type: "GET",
        url: _0x48c100,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function (_0x109722) {
            if (_0x109722.lengthComputable) {
              _0x253ddb(_0x109722.loaded / _0x109722.total * 100);
            }
          }
        }
      }).fail(_0x355ebb).done(_0x451c0b);
    };
    getRandomElement._ = function (_0x223e50, _0x5e8c0b) {
      for (var _0x29136d in _0x223e50) {
        if (_0x223e50.hasOwnProperty(_0x29136d)) {
          _0x5e8c0b(_0x29136d, _0x223e50[_0x29136d]);
        }
      }
    };
    getRandomElement.aa = function (_0x53cb03) {
      for (var _0x1a0b19 = _0x53cb03.length - 1; _0x1a0b19 > 0; _0x1a0b19--) {
        var _0x1359c2 = Math.floor(Math.random() * (_0x1a0b19 + 1));
        var _0x579b4f = _0x53cb03[_0x1a0b19];
        _0x53cb03[_0x1a0b19] = _0x53cb03[_0x1359c2];
        _0x53cb03[_0x1359c2] = _0x579b4f;
      }
      return _0x53cb03;
    };
    (function () {
      var _0x471cb1 = "Z2V0";
      var _0x37739a = "=";
      var _0x4123ec = _0x471cb1 + "SW50";
      var _0x5aada5 = _0x471cb1 + "RmxvYXQ";
      var _0x117cd1 = atob(_0x4123ec + "OA==");
      var _0x25b084 = atob(_0x4123ec + "MTY" + _0x37739a);
      var _0x21697d = atob(_0x4123ec + "MzI" + _0x37739a);
      var _0x965db0 = atob(_0x5aada5 + "zMg==");
      var _0x259130 = atob(_0x5aada5 + "2NA==");
      DataView.prototype.ba = function (_0x445bb6) {
        return this[_0x117cd1](_0x445bb6);
      };
      DataView.prototype.ca = function (_0x4216bf) {
        return this[_0x25b084](_0x4216bf);
      };
      DataView.prototype.da = function (_0x5caf7b) {
        return this[_0x21697d](_0x5caf7b);
      };
      DataView.prototype.ea = function (_0x3688a4) {
        return this[_0x965db0](_0x3688a4);
      };
      DataView.prototype.fa = function (_0x5aa7d9) {
        return this[_0x259130](_0x5aa7d9);
      };
    })();
    getRandomElement.ga = function () {
      function _0x2a5b2e() {
        $("#adbl-1").text(getRandomElement.H("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(getRandomElement.H("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(getRandomElement.H("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(getRandomElement.H("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(getRandomElement.H("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + _0x50bbd8).fadeIn(500);
        var _0x13b983 = 10;
        for (var _0x96ccf4 = 0; _0x96ccf4 < 10; _0x96ccf4++) {
          setTimeout(function () {
            _0x13b983--;
            $("#adbl-4").text(getRandomElement.H("index.game.antiadblocker.msg4").replace("{0}", _0x13b983));
            if (_0x13b983 === 0) {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x367d69) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (_0x96ccf4 + 1) * 1000);
        }
      }
      var _0x430b2b = false;
      function _0x25f31d() {}
      var _0x574307 = {};
      var _0x50bbd8 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + _0x50bbd8).fadeOut(500);
        _0x25f31d(false);
      });
      _0x574307.ha = function (_0x15af97) {
        _0x25f31d = _0x15af97;
        if (!_0x430b2b) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (_0xad3a65) {
                  _0x25f31d(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + _0x50bbd8).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (_0x54a519) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            _0x430b2b = true;
          } catch (_0x134812) {}
        }
      };
      _0x574307.ia = function () {
        if (aiptag.adplayer !== undefined) {
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0x1efd96) {}
          $("#1eaom01c3pxu9wd3").show();
          aiptag.cmd.player.push(function () {
            aiptag.adplayer.startPreRoll();
          });
        } else {
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x1cede6) {}
          _0x2a5b2e();
        }
      };
      return _0x574307;
    };
    getRandomElement.ja = function (_0x196b74, _0x56b17d) {
      var _0x19ac91 = $("#" + _0x196b74);
      var _0x189517 = _0x56b17d;
      var _0x446058 = {};
      var _0x2d630d = false;
      _0x446058.ha = function () {
        if (!_0x2d630d) {
          _0x19ac91.empty();
          _0x19ac91.append("<div id='" + _0x189517 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (_0x3c83c2) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x189517);
            });
            _0x2d630d = true;
          } catch (_0x5475c8) {}
        }
      };
      _0x446058.ka = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (_0x40bc48) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x189517);
          });
        } catch (_0x19cd3a) {}
      };
      return _0x446058;
    };
    Game.la = function () {
      function _0x166073(_0xbacb8d, _0x225b08, _0x2d2633, _0x4eba9f, _0x1d8f88, _0x2a942e, _0x51e0fd, _0xbc5d09, _0x2bd45b, _0x4f5978) {
        this.ma = _0xbacb8d;
        this.na = _0x225b08;
        this.oa = null;
        this.pa = false;
        this.qa = _0x2d2633;
        this.ra = _0x4eba9f;
        this.sa = _0x1d8f88;
        this.ta = _0x2a942e;
        this.ua = _0x51e0fd || (_0x2bd45b || _0x1d8f88) / 2;
        this.va = _0xbc5d09 || (_0x4f5978 || _0x2a942e) / 2;
        this.wa = _0x2bd45b || _0x1d8f88;
        this.xa = _0x4f5978 || _0x2a942e;
        this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
        this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
        this.Aa = this.sa / this.wa;
        this.Ba = this.ta / this.xa;
      }
      _0x166073.Ca = function () {
        return new _0x166073("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      _0x166073.Da = function (_0x257c26, _0x4c93a6, _0x450f55) {
        return new _0x166073(_0x257c26, _0x4c93a6, _0x450f55.x, _0x450f55.y, _0x450f55.w, _0x450f55.h, _0x450f55.px, _0x450f55.py, _0x450f55.pw, _0x450f55.ph);
      };
      _0x166073.prototype.Ea = function () {
        if (this.pa) {
          return this.oa;
        } else {
          if (this.na != null) {
            this.oa = new pixiElements.m(this.na, new pixiElements.q(this.qa, this.ra, this.sa, this.ta));
          }
          this.pa = true;
          return this.oa;
        }
      };
      _0x166073.prototype.Fa = function () {
        if (this.oa != null) {
          this.oa.destroy();
        }
      };
      return _0x166073;
    }();
    Game.Ga = function () {
      function _0x12ce45(_0xe4d37d, _0x5b9f4d, _0xcc3718, _0x45a87b, _0x363669, _0xa43ffd, _0x47eb84, _0x134847, _0x51f349, _0x3a7ea9, _0xea4a2f, _0x2e72cf, _0x429c58, _0x34d274, _0x2c35fa, _0x8d8bab, _0x78b541, _0xe516df) {
        this.Ha = _0xe4d37d;
        this.Ia = _0x5b9f4d;
        this.Ja = _0xcc3718;
        this.Ka = _0x45a87b;
        this.La = _0x363669;
        this.Ma = _0xa43ffd;
        this.Na = _0x47eb84;
        this.Oa = _0x134847;
        this.Pa = _0x51f349;
        this.Qa = _0x3a7ea9;
        this.Ra = _0xea4a2f;
        this.Sa = _0x2e72cf;
        this.Ta = _0x429c58;
        this.Ua = _0x34d274;
        this.Va = _0x2c35fa;
        this.Wa = _0x8d8bab;
        this.Xa = _0x78b541;
        this.Ya = _0xe516df;
      }
      _0x12ce45.prototype.Fa = function () {
        for (var _0x40bd90 = 0; _0x40bd90 < this.Ha.length; _0x40bd90++) {
          this.Ha[_0x40bd90].dispose();
          this.Ha[_0x40bd90].destroy();
        }
        this.Ha = [];
        for (var _0x3ea448 = 0; _0x3ea448 < this.Ia.length; _0x3ea448++) {
          this.Ia[_0x3ea448].Fa();
        }
        this.Ia = [];
      };
      _0x12ce45.Ca = function () {
        var _0x32bbac = new _0x12ce45.Za(Game._a.$a, Game._a.$a);
        var _0x1e079d = new _0x12ce45.ab("#ffffff", [Game._a.$a], [Game._a.$a]);
        return new _0x12ce45([], [], {}, _0x32bbac, {}, new _0x12ce45.bb(Game._a.$a), {}, _0x1e079d, {}, new _0x12ce45.cb("", _0x1e079d, _0x32bbac), {}, new _0x12ce45.db([Game._a.$a]), {}, new _0x12ce45.db([Game._a.$a]), {}, new _0x12ce45.db([Game._a.$a]), {}, new _0x12ce45.db([Game._a.$a]));
      };
      _0x12ce45.eb = function (_0x416f74, _0x12eb19, _0x5c5516, _0x2b71c4) {
        var _0x1b9ceb = new _0x12ce45.Za(Game._a.$a, Game._a.$a);
        var _0x587c74 = new _0x12ce45.ab("#ffffff", [_0x416f74], [_0x12eb19]);
        return new _0x12ce45([], [], {}, _0x1b9ceb, {}, new _0x12ce45.bb(Game._a.$a), {}, _0x587c74, {}, new _0x12ce45.cb("", _0x587c74, _0x1b9ceb), {}, new _0x12ce45.db([_0x5c5516]), {}, new _0x12ce45.db([_0x2b71c4]), {}, new _0x12ce45.db([Game._a.$a]), {}, new _0x12ce45.db([Game._a.$a]));
      };
      _0x12ce45.fb = function (_0x32feab, _0x6d1b4d, _0x7de397, _0x59596f) {
        var _0x18723e = {};
        getRandomElement._(_0x32feab.colorDict, function (_0x2b3a4e, _0x4706d7) {
          _0x18723e[_0x2b3a4e] = "#" + _0x4706d7;
        });
        var _0x3e1200 = {};
        for (var _0x560bc6 = 0; _0x560bc6 < _0x32feab.skinArrayDict.length; _0x560bc6++) {
          var _0x45570a = _0x32feab.skinArrayDict[_0x560bc6];
          _0x3e1200[_0x45570a.id] = new _0x12ce45.ab(_0x18723e[_0x45570a.prime], _0x45570a.base.map(function (_0x4d1c5e) {
            return _0x6d1b4d[_0x4d1c5e];
          }), _0x45570a.glow.map(function (_0x4a632b) {
            return _0x6d1b4d[_0x4a632b];
          }));
        }
        var _0x42ead0 = undefined;
        var _0x20df23 = _0x32feab.skinUnknown;
        _0x42ead0 = new _0x12ce45.ab(_0x18723e[_0x20df23.prime], _0x20df23.base.map(function (_0x2ee1df) {
          return _0x6d1b4d[_0x2ee1df];
        }), _0x20df23.glow.map(function (_0x2039fc) {
          return _0x6d1b4d[_0x2039fc];
        }));
        var _0xb6f0ab = {};
        getRandomElement._(_0x32feab.eyesDict, function (_0x319405, _0x512167) {
          var _0x2ce061 = parseInt(_0x319405);
          _0xb6f0ab[_0x2ce061] = new _0x12ce45.db(_0x512167.base.map(function (_0x2adf1c) {
            return _0x6d1b4d[_0x2adf1c.region];
          }));
        });
        var _0x57f397 = new _0x12ce45.db(_0x32feab.eyesUnknown.base.map(function (_0x49aa6a) {
          return _0x6d1b4d[_0x49aa6a.region];
        }));
        var _0x4aab84 = {};
        getRandomElement._(_0x32feab.mouthDict, function (_0x45b3b2, _0xf16772) {
          var _0xf01261 = parseInt(_0x45b3b2);
          _0x4aab84[_0xf01261] = new _0x12ce45.db(_0xf16772.base.map(function (_0x1dab48) {
            return _0x6d1b4d[_0x1dab48.region];
          }));
        });
        var _0x46eafe = new _0x12ce45.db(_0x32feab.mouthUnknown.base.map(function (_0x5b3aa8) {
          return _0x6d1b4d[_0x5b3aa8.region];
        }));
        var _0x475cc6 = {};
        getRandomElement._(_0x32feab.hatDict, function (_0x49e55d, _0x4564c6) {
          var _0x33eddc = parseInt(_0x49e55d);
          _0x475cc6[_0x33eddc] = new _0x12ce45.db(_0x4564c6.base.map(function (_0x2b33b7) {
            return _0x6d1b4d[_0x2b33b7.region];
          }));
        });
        var _0x23a133 = new _0x12ce45.db(_0x32feab.hatUnknown.base.map(function (_0x511502) {
          return _0x6d1b4d[_0x511502.region];
        }));
        var _0x74e6f6 = {};
        getRandomElement._(_0x32feab.glassesDict, function (_0x3ab78d, _0x5ce02f) {
          var _0xa49c5b = parseInt(_0x3ab78d);
          _0x74e6f6[_0xa49c5b] = new _0x12ce45.db(_0x5ce02f.base.map(function (_0x10ad84) {
            return _0x6d1b4d[_0x10ad84.region];
          }));
        });
        var _0x5d2b1a = new _0x12ce45.db(_0x32feab.glassesUnknown.base.map(function (_0x335f9f) {
          return _0x6d1b4d[_0x335f9f.region];
        }));
        var _0x14cfae = {};
        getRandomElement._(_0x32feab.portionDict, function (_0x5f4828, _0x5e99f3) {
          _0x5f4828 = parseInt(_0x5f4828);
          _0x14cfae[_0x5f4828] = new _0x12ce45.Za(_0x6d1b4d[_0x5e99f3.base], _0x6d1b4d[_0x5e99f3.glow]);
        });
        var _0x3d248d = undefined;
        var _0x2c8eb9 = _0x32feab.portionUnknown;
        _0x3d248d = new _0x12ce45.Za(_0x6d1b4d[_0x2c8eb9.base], _0x6d1b4d[_0x2c8eb9.glow]);
        var _0x2dc3f0 = {};
        getRandomElement._(_0x32feab.abilityDict, function (_0x4843f9, _0xb307fc) {
          _0x4843f9 = parseInt(_0x4843f9);
          _0x2dc3f0[_0x4843f9] = new _0x12ce45.bb(_0x6d1b4d[_0xb307fc.base]);
        });
        var _0x2783af = undefined;
        var _0x14d769 = _0x32feab.abilityUnknown;
        _0x2783af = new _0x12ce45.bb(_0x6d1b4d[_0x14d769.base]);
        var _0x8196ed = {};
        getRandomElement._(_0x32feab.teamDict, function (_0x298158, _0x51bae3) {
          _0x298158 = parseInt(_0x298158);
          _0x8196ed[_0x298158] = new _0x12ce45.cb(_0x51bae3.title, new _0x12ce45.ab(_0x18723e[_0x51bae3.skin.prime], null, _0x51bae3.skin.glow.map(function (_0x2b30e7) {
            return _0x6d1b4d[_0x2b30e7];
          })), new _0x12ce45.Za(null, _0x6d1b4d[_0x51bae3.portion.glow]));
        });
        var _0x430b6f = new _0x12ce45.cb({}, _0x42ead0, _0x3d248d);
        return new _0x12ce45(_0x7de397, _0x59596f, _0x14cfae, _0x3d248d, _0x2dc3f0, _0x2783af, _0x3e1200, _0x42ead0, _0x8196ed, _0x430b6f, _0xb6f0ab, _0x57f397, _0x4aab84, _0x46eafe, _0x475cc6, _0x23a133, _0x74e6f6, _0x5d2b1a);
      };
      _0x12ce45.prototype.gb = function (_0x26e3ce) {
        var _0x544132 = getRandomElement.aa(Object.keys(this.Na)).slice(0, _0x26e3ce);
        var _0x16d15a = getRandomElement.aa(Object.keys(this.Ra)).slice(0, _0x26e3ce);
        var _0x348443 = getRandomElement.aa(Object.keys(this.Ta)).slice(0, _0x26e3ce);
        var _0x2c1fa8 = getRandomElement.aa(Object.keys(this.Va)).slice(0, _0x26e3ce);
        var _0x158c9d = getRandomElement.aa(Object.keys(this.Xa)).slice(0, _0x26e3ce);
        var _0x520546 = [];
        for (var _0x51ecd9 = 0; _0x51ecd9 < _0x26e3ce; _0x51ecd9++) {
          var _0xd70626 = _0x544132.length > 0 ? _0x544132[_0x51ecd9 % _0x544132.length] : 0;
          var _0x13b284 = _0x16d15a.length > 0 ? _0x16d15a[_0x51ecd9 % _0x16d15a.length] : 0;
          var _0x25b355 = _0x348443.length > 0 ? _0x348443[_0x51ecd9 % _0x348443.length] : 0;
          var _0x44d439 = _0x2c1fa8.length > 0 ? _0x2c1fa8[_0x51ecd9 % _0x2c1fa8.length] : 0;
          var _0x2f1229 = _0x158c9d.length > 0 ? _0x158c9d[_0x51ecd9 % _0x158c9d.length] : 0;
          _0x520546.push(new Game.hb(_0xd70626, _0x13b284, _0x25b355, _0x44d439, _0x2f1229));
        }
        return _0x520546;
      };
      _0x12ce45.prototype.ib = function (_0x169f63) {
        if (this.Na.hasOwnProperty(_0x169f63)) {
          return this.Na[_0x169f63];
        } else {
          return this.Oa;
        }
      };
      _0x12ce45.prototype.jb = function (_0x3d3e7e) {
        if (this.Pa.hasOwnProperty(_0x3d3e7e)) {
          return this.Pa[_0x3d3e7e];
        } else {
          return this.Qa;
        }
      };
      _0x12ce45.prototype.kb = function (_0x2259f4) {
        if (this.Ra.hasOwnProperty(_0x2259f4)) {
          return this.Ra[_0x2259f4];
        } else {
          return this.Sa;
        }
      };
      _0x12ce45.prototype.lb = function (_0x428427) {
        if (this.Ta.hasOwnProperty(_0x428427)) {
          return this.Ta[_0x428427];
        } else {
          return this.Ua;
        }
      };
      _0x12ce45.prototype.mb = function (_0x18d9ac) {
        if (this.Xa.hasOwnProperty(_0x18d9ac)) {
          return this.Xa[_0x18d9ac];
        } else {
          return this.Ya;
        }
      };
      _0x12ce45.prototype.nb = function (_0x2e0173) {
        if (this.Va.hasOwnProperty(_0x2e0173)) {
          return this.Va[_0x2e0173];
        } else {
          return this.Wa;
        }
      };
      _0x12ce45.prototype.ob = function (_0x2ad3ee) {
        if (this.Ja.hasOwnProperty(_0x2ad3ee)) {
          return this.Ja[_0x2ad3ee];
        } else {
          return this.Ka;
        }
      };
      _0x12ce45.prototype.pb = function (_0xbe507b) {
        if (this.La.hasOwnProperty(_0xbe507b)) {
          return this.La[_0xbe507b];
        } else {
          return this.Ma;
        }
      };
      _0x12ce45.cb = function () {
        function _0x2e4e18(_0x2de738, _0x18b550, _0x50fbd2) {
          this.qb = _0x2de738;
          this.rb = _0x18b550;
          this.sb = _0x50fbd2;
        }
        return _0x2e4e18;
      }();
      _0x12ce45.ab = function () {
        function _0x37d33a(_0x17b654, _0x56efbf, _0x3bbbd7) {
          this.tb = _0x17b654;
          this.ub = _0x56efbf;
          this.vb = _0x3bbbd7;
        }
        return _0x37d33a;
      }();
      _0x12ce45.db = function () {
        function _0x4d9567(_0x2b516f) {
          this.ub = _0x2b516f;
        }
        return _0x4d9567;
      }();
      _0x12ce45.Za = function () {
        function _0x24c4e9(_0x15be24, _0x3ef392) {
          this.ub = _0x15be24;
          this.vb = _0x3ef392;
        }
        return _0x24c4e9;
      }();
      _0x12ce45.bb = function () {
        function _0x4b361f(_0x4e9cf4) {
          this.ub = _0x4e9cf4;
        }
        return _0x4b361f;
      }();
      return _0x12ce45;
    }();
    Game._a = function () {
      function _0xf861aa() {
        var _0x48941b = pixiElements.l.from("/images/wear-ability.png");
        var _0x3947c4 = pixiElements.l.from("https://wormup.in/assets/images/zigzagability.png");
        this.pwrFlex = new Game.la("flex_ability", _0x3947c4, 158, 4, 87, 74, 203, 63.5, 128, 128);

        this.wb = new Game.la("magnet_ability", _0x48941b, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.xb = new Game.la("velocity_ability", _0x48941b, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.yb = new Game.la("flex_ability", _0x48941b, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var _0x27844c = pixiElements.l.from("/images/def-look.png");
        var _0x4c2079 = new Game.la("def_eyes", _0x27844c, 0, 0, 42, 80, 75, 64, 128, 128);
        var _0x234771 = new Game.la("def_mouth", _0x27844c, 46, 0, 20, 48, 109, 63, 128, 128);
        var _0x4d5292 = new Game.la("def_skin_glow", _0x27844c, 70, 0, 32, 32, 0, 0, 0, 0);
        var _0x243957 = new Game.la("def_skin_base", _0x27844c, 46, 52, 64, 64, 0, 0, 0, 0);
        var _0x5ea9d7 = Game.Ga.eb(_0x243957, _0x4d5292, _0x4c2079, _0x234771);
        this.zb = new Game.Ab({}, _0x5ea9d7);
        this.Bb = -10000;
        this.Cb = -10000;
        this.Db = function () {
          var _0x51daba = window.document.createElement("canvas");
          _0x51daba.width = 80;
          _0x51daba.height = 80;
          return {
            Eb: _0x51daba,
            Fb: _0x51daba.getContext("2d"),
            oa: new pixiElements.m(pixiElements.l.from(_0x51daba))
          };
        }();
        this.Gb = null;
        this.Hb = [];
      }
      _0xf861aa.$a = Game.la.Ca();
      _0xf861aa.prototype.ha = function () {};
      _0xf861aa.prototype.Ib = function (_0x35e4aa, _0x3a980c, _0x348760) {
        var _0x2a158b = this;
        var _0x2bc2ad = this.zb.Jb();
        if (_0x2bc2ad > 0 && Date.now() - this.Bb < 1200000) {
          if (_0x35e4aa != null) {
            _0x35e4aa();
          }
          return;
        }
        if (this.Gb != null && !this.Gb.Kb()) {
          if (Date.now() - this.Bb < 300000) {
            if (_0x35e4aa != null) {
              _0x35e4aa();
            }
            return;
          }
          this.Gb.Lb();
          this.Gb = null;
        }
        var _0x2eff8f = new Game.Mb(_0x2bc2ad);
        _0x2eff8f.Nb(function (_0x5074e3, _0x135112) {
          if (_0x2eff8f === _0x2a158b.Gb && _0x348760 != null) {
            _0x348760(_0x5074e3, _0x135112);
          }
        });
        _0x2eff8f.Ob(function (_0x2fd495) {
          if (_0x2eff8f === _0x2a158b.Gb && _0x3a980c != null) {
            _0x3a980c(_0x2fd495);
          }
        });
        _0x2eff8f.Pb(function () {
          if (_0x2eff8f === _0x2a158b.Gb && _0x3a980c != null) {
            _0x3a980c(new Error());
          }
        });
        _0x2eff8f.Qb(function () {
          if (_0x2eff8f === _0x2a158b.Gb && _0x35e4aa != null) {
            _0x35e4aa();
          }
        });
        _0x2eff8f.Rb(function (_0x30974c) {
          if (_0x2eff8f === _0x2a158b.Gb) {
            _0x2a158b.Cb = Date.now();
            _0x2a158b.Gb = null;
            _0x2a158b.zb = _0x30974c;
            _0x2a158b.Sb();
            if (_0x35e4aa != null) {
              _0x35e4aa();
            }
            _0x2a158b.Tb();
            return;
          }
          try {
            _0x30974c.Ub().Fa();
          } catch (_0x48cd3e) {}
        });
        _0x2eff8f.Vb();
        this.Bb = Date.now();
        this.Gb = _0x2eff8f;
      };
      _0xf861aa.prototype.Sb = function () {};
      _0xf861aa.prototype.Wb = function () {
        return this.zb.Jb() > 0;
      };
      _0xf861aa.prototype.Xb = function () {
        return this.zb.Yb();
      };
      _0xf861aa.prototype.Zb = function () {
        return this.Db;
      };
      _0xf861aa.prototype.$b = function (_0x52c7f4) {
        this.Hb.push(_0x52c7f4);
      };
      _0xf861aa.prototype.Tb = function () {
        var _0x5911b2 = 0;
        for (; _0x5911b2 < this.Hb.length; _0x5911b2++) {
          this.Hb[_0x5911b2]();
        }
      };
      _0xf861aa.prototype.Ub = function () {
        return this.zb.Ub();
      };
      return _0xf861aa;
    }();
    Game._b = function () {
      function _0x41704b(_0x5d6ed0) {
        this.ac = _0x5d6ed0;
      }
      _0x41704b.prototype.bc = function (_0x391dac) {
        return this.ac[_0x391dac];
      };
      _0x41704b.cc = function () {
        function _0x27ba15() {
          this.dc = [];
        }
        _0x27ba15.prototype.ec = function (_0x1e8dc8, _0x4936a1) {
          for (var _0x46acb0 = 0; _0x46acb0 < this.dc.length; _0x46acb0++) {
            if (this.dc[_0x46acb0].fc === _0x1e8dc8) {
              throw new Error();
            }
          }
          this.dc.push(new _0x41704b.gc(_0x1e8dc8, _0x4936a1));
          return this;
        };
        _0x27ba15.prototype.hc = function () {
          var _0x2c8450 = 0;
          for (var _0x6c7e7e = 0; _0x6c7e7e < this.dc.length; _0x6c7e7e++) {
            _0x2c8450 += this.dc[_0x6c7e7e].ic;
          }
          var _0x1db49a = {};
          var _0x14c201 = 0;
          for (var _0x2f09bd = 0; _0x2f09bd < this.dc.length; _0x2f09bd++) {
            var _0x88be22 = this.dc[_0x2f09bd];
            _0x88be22.ic = _0x88be22.ic / _0x2c8450;
            _0x88be22.jc = _0x14c201;
            _0x88be22.kc = _0x14c201 + _0x88be22.ic;
            _0x14c201 = _0x88be22.kc;
            _0x1db49a[_0x88be22.fc] = _0x88be22;
          }
          return new _0x41704b(_0x1db49a);
        };
        return _0x27ba15;
      }();
      _0x41704b.gc = function () {
        function _0x3e4658(_0x48460d, _0x29657a) {
          this.fc = _0x48460d;
          this.ic = _0x29657a;
          this.jc = 0;
          this.kc = 0;
        }
        _0x3e4658.prototype.lc = function (_0x1c1862) {
          return this.jc + (this.kc - this.jc) * _0x1c1862;
        };
        return _0x3e4658;
      }();
      return _0x41704b;
    }();
    Game.mc = function () {
      function _0x9b1904() {
        this.nc = new pixiElements.k();
        this.nc.sortableChildren = true;
        this.oc = new _0x3934f5();
        this.oc.zIndex = _0x53f75e * ((_0x2e4b4a + 1) * 2 + 1 + 3);
        this.pc = 0;
        this.qc = new Array(_0x2e4b4a);
        this.qc[0] = this.rc(0, new Game.sc(), new Game.sc());
        for (var _0x5eb37c = 1; _0x5eb37c < _0x2e4b4a; _0x5eb37c++) {
          this.qc[_0x5eb37c] = this.rc(_0x5eb37c, new Game.sc(), new Game.sc());
        }
        this.tc = 0;
        this.uc = 0;
        this.vc = 0;
      }
      var _0x53f75e = 0.001;
      var _0x2e4b4a = 797;
      var _0x4fae19 = Math.PI * 0.1;
      var _0x4c0214 = -0.06640625;
      var _0x5b68ea = 0.84375;
      var _0x1bb8d7 = 0.2578125;
      var _0x51da8e = -0.03515625;
      var _0x415aef = -0.0625;
      var _0x48d106 = 0.5625;
      var _0x1d68c9 = _0x4c0214 * 3 + _0x5b68ea;
      var _0xf3b3a7 = _0x1bb8d7 - _0x4c0214 * 3;
      var _0x5df3b1 = _0x4c0214 + _0x51da8e;
      var _0x3e1a69 = 0.375;
      var _0x59c702 = 0.75;
      var _0x135c9b = _0x415aef + _0x415aef;
      var _0x499d77 = _0x51da8e * 3 + _0x1bb8d7;
      var _0x3c1f6d = _0x5b68ea - _0x51da8e * 3;
      var _0xe472d1 = _0x51da8e + _0x4c0214;
      _0x9b1904.wc = _0x2e4b4a;
      _0x9b1904.prototype.rc = function (_0x4a34b0, _0x1e42a0, _0x5438df) {
        var _0x237f18 = new _0x5a223c(_0x1e42a0, _0x5438df);
        _0x1e42a0.xc.zIndex = _0x53f75e * ((_0x2e4b4a - _0x4a34b0) * 2 + 1 + 3);
        _0x5438df.xc.zIndex = _0x53f75e * ((_0x2e4b4a - _0x4a34b0) * 2 - 2 + 3);
        return _0x237f18;
      };
      _0x9b1904.prototype.yc = function (_0x4c4226, _0x4a4026, _0x54efd8, _0x50033a, _0x53b2d9, _0x12cfc0, _0x58a4a4, _0x26f610) {
        var _0x45f84b = _0x54efd8.ub;
        var _0x463152 = _0x4c4226 === Game.Ac.zc ? _0x4a4026.rb.vb : _0x54efd8.vb;
        if (_0x45f84b.length > 0 && _0x463152.length > 0) {
          for (var _0x197076 = 0; _0x197076 < this.qc.length; _0x197076++) {
            this.qc[_0x197076].Cc.Bc(_0x45f84b[_0x197076 % _0x45f84b.length]);
            this.qc[_0x197076].Dc.Bc(_0x463152[_0x197076 % _0x463152.length]);
            this.qc[_0x197076].Cc.Ec(_0x26f610);
            this.qc[_0x197076].Dc.Ec(_0x26f610);
          }
        }
        this.oc.yc(_0x50033a, _0x53b2d9, _0x12cfc0, _0x58a4a4);
      };
      var _0x3934f5 = function () {
        var _0xd26cf3 = getRandomElement.M(pixiElements.k, function () {
          pixiElements.k.call(this);
          this.sortableChildren = true;
          this.Fc = [];
          this.Gc = [];
          this.Hc = [];
          this.Ic = [];
          this.Jc = new pixiElements.k();
          this.Kc = [];
          var _0x5bcc6d = 0;
          for (; _0x5bcc6d < 4; _0x5bcc6d++) {
            var _0x568ff5 = new Game.sc();
            _0x568ff5.Bc(_0x3b5dc5().Lc.wb);
            this.Jc.addChild(_0x568ff5.xc);
            this.Kc.push(_0x568ff5);
          }
          this.Jc.zIndex = 0.0011;
          this.addChild(this.Jc);
          this.Mc();
          this.Nc = new Game.sc();
          this.Nc.Bc(_0x3b5dc5().Lc.xb);
          this.Nc.xc.zIndex = 0.001;
          this.addChild(this.Nc.xc);
          this.Oc();
          this.pwr_flex = new Game.sc();
          this.pwr_flex.Bc(_0x3b5dc5().Lc.pwrFlex);
          this.pwr_flex.xc.zIndex = 0.001;
          this.addChild(this.pwr_flex.xc);
          this.disableFlex();

        });
        _0xd26cf3.prototype.yc = function (_0x12cd8f, _0x1fda25, _0x3d82cd, _0x3e923) {
          this.Pc(0.002, this.Fc, _0x12cd8f.ub);
          this.Pc(0.003, this.Gc, _0x1fda25.ub);
          this.Pc(0.004, this.Ic, _0x3e923.ub);
          this.Pc(0.005, this.Hc, _0x3d82cd.ub);
        };
        _0xd26cf3.prototype.Pc = function (_0x17f12a, _0x4861e2, _0x2bda82) {
          while (_0x2bda82.length > _0x4861e2.length) {
            var _0x21ffe3 = new Game.sc();
            _0x4861e2.push(_0x21ffe3);
            this.addChild(_0x21ffe3.Qc());
          }
          while (_0x2bda82.length < _0x4861e2.length) {
            _0x4861e2.pop().Rc();
          }
          var _0x3850e2 = _0x17f12a;
          var _0x5bd886 = 0;
          for (; _0x5bd886 < _0x2bda82.length; _0x5bd886++) {
            _0x3850e2 = _0x3850e2 + 0.0001;
            var _0x283df8 = _0x4861e2[_0x5bd886];
            _0x283df8.Bc(_0x2bda82[_0x5bd886]);
            _0x283df8.xc.zIndex = _0x3850e2;
          }
        };
        _0xd26cf3.prototype.Sc = function (_0x1fa620, _0x27007c, _0x433e59, _0x535d88) {
          this.visible = true;
          this.position.set(_0x1fa620, _0x27007c);
          this.rotation = _0x535d88;
          var _0x57b4eb = 0;
          for (; _0x57b4eb < this.Fc.length; _0x57b4eb++) {
            this.Fc[_0x57b4eb].Tc(_0x433e59);
          }
          var _0x267ddd = 0;
          for (; _0x267ddd < this.Gc.length; _0x267ddd++) {
            this.Gc[_0x267ddd].Tc(_0x433e59);
          }
          var _0x5d9ed2 = 0;
          for (; _0x5d9ed2 < this.Hc.length; _0x5d9ed2++) {
            this.Hc[_0x5d9ed2].Tc(_0x433e59);
          }
          var _0x4e3f54 = 0;
          for (; _0x4e3f54 < this.Ic.length; _0x4e3f54++) {
            this.Ic[_0x4e3f54].Tc(_0x433e59);
          }
        };
        _0xd26cf3.prototype.Uc = function () {
          this.visible = false;
        };
        _0xd26cf3.prototype.Vc = function (_0x1f4255, _0x1b9c7e, _0x32546a, _0x1c03c0) {
          this.Jc.visible = true;
          var _0x2bbc2a = _0x32546a / 1000;
          var _0x45a79d = 1 / this.Kc.length;
          var _0x1ef562 = 0;
          for (; _0x1ef562 < this.Kc.length; _0x1ef562++) {
            var _0x5ee5cf = 1 - (_0x2bbc2a + _0x45a79d * _0x1ef562) % 1;
            this.Kc[_0x1ef562].xc.alpha = 1 - _0x5ee5cf;
            this.Kc[_0x1ef562].Tc(_0x1b9c7e * (0.5 + _0x5ee5cf * 4.5));
          }
        };
        _0xd26cf3.prototype.Mc = function () {
          this.Jc.visible = false;
        };
        _0xd26cf3.prototype.Wc = function (_0x19e492, _0xa1ec71, _0x4c56b2, _0x4b8711) {
          this.Nc.xc.visible = true;
          this.Nc.xc.alpha = getRandomElement.Q(this.Nc.xc.alpha, _0x19e492.Xc ? 0.9 : 0.2, _0x4b8711, 0.0025);
          this.Nc.Tc(_0xa1ec71);
        };
        _0xd26cf3.prototype.Oc = function () {
          this.Nc.xc.visible = false;
        };
        _0xd26cf3.prototype.activeFlex = function (_0x14796d, _0x5ea995, _0x278f42, _0x98d6cc) {
          this.pwr_flex.xc.visible = true;
          this.pwr_flex.xc.alpha = getRandomElement.Q(this.pwr_flex.xc.alpha, _0x14796d.Xc ? 0.9 : 0.2, _0x98d6cc, 0.025);
          this.pwr_flex.Tc(_0x5ea995);
        };
        _0xd26cf3.prototype.disableFlex = function () {
          this.pwr_flex.xc.visible = false;
        };

        return _0xd26cf3;
      }();
      _0x9b1904.prototype.Yc = function (_0x3c29de) {
        return this.uc + this.vc * Math.sin(_0x3c29de * _0x4fae19 - this.tc);
      };
      _0x9b1904.prototype.Zc = function (_0x34feb8, _0x13df6c, _0x1b127c, _0x2a7daa) {
        var _0xf3c3ff = _0x34feb8.$c * 2;
        var _0x31c36d = _0x34feb8._c;
        var _0x17531d = _0x34feb8.ad;
        var _0x43b2b3 = _0x17531d * 4 - 3;
        var _0x377cae = _0x43b2b3;
        this.tc = _0x13df6c / 400 * Math.PI;
        this.uc = _0xf3c3ff * 1.5;
        this.vc = _0xf3c3ff * 0.15 * _0x34feb8.bd;
        var _0x3db11a = undefined;
        var _0x5d7caf = undefined;
        var _0x35d5a2 = undefined;
        var _0x567b8d = undefined;
        var _0x1c8e9c = undefined;
        var _0x1f615b = undefined;
        var _0xb6ed5c = undefined;
        var _0x326a8b = undefined;
        _0x5d7caf = _0x31c36d[0];
        _0x1f615b = _0x31c36d[1];
        if (_0x2a7daa(_0x5d7caf, _0x1f615b)) {
          _0x35d5a2 = _0x31c36d[2];
          _0xb6ed5c = _0x31c36d[3];
          _0x567b8d = _0x31c36d[4];
          _0x326a8b = _0x31c36d[5];
          var _0x309681 = Math.atan2(_0x326a8b + _0x1f615b * 2 - _0xb6ed5c * 3, _0x567b8d + _0x5d7caf * 2 - _0x35d5a2 * 3);
          this.oc.Sc(_0x5d7caf, _0x1f615b, _0xf3c3ff, _0x309681);
          this.qc[0].Sc(_0x5d7caf, _0x1f615b, _0xf3c3ff, this.Yc(0), _0x309681);
          this.qc[1].Sc(_0x1d68c9 * _0x5d7caf + _0xf3b3a7 * _0x35d5a2 + _0x5df3b1 * _0x567b8d, _0x1d68c9 * _0x1f615b + _0xf3b3a7 * _0xb6ed5c + _0x5df3b1 * _0x326a8b, _0xf3c3ff, this.Yc(1), _0x5a223c.cd(this.qc[0], this.qc[2]));
          this.qc[2].Sc(_0x3e1a69 * _0x5d7caf + _0x59c702 * _0x35d5a2 + _0x135c9b * _0x567b8d, _0x3e1a69 * _0x1f615b + _0x59c702 * _0xb6ed5c + _0x135c9b * _0x326a8b, _0xf3c3ff, this.Yc(2), _0x5a223c.cd(this.qc[1], this.qc[3]));
          this.qc[3].Sc(_0x499d77 * _0x5d7caf + _0x3c1f6d * _0x35d5a2 + _0xe472d1 * _0x567b8d, _0x499d77 * _0x1f615b + _0x3c1f6d * _0xb6ed5c + _0xe472d1 * _0x326a8b, _0xf3c3ff, this.Yc(3), _0x5a223c.cd(this.qc[2], this.qc[4]));
        } else {
          this.oc.Uc();
          this.qc[0].Uc();
          this.qc[1].Uc();
          this.qc[2].Uc();
          this.qc[3].Uc();
        }
        var _0x5921ba = 4;
        for (var _0xa52e92 = 2, _0x2c1ab0 = _0x17531d * 2 - 4; _0xa52e92 < _0x2c1ab0; _0xa52e92 += 2) {
          _0x5d7caf = _0x31c36d[_0xa52e92];
          _0x1f615b = _0x31c36d[_0xa52e92 + 1];
          if (_0x2a7daa(_0x5d7caf, _0x1f615b)) {
            _0x3db11a = _0x31c36d[_0xa52e92 - 2];
            _0x1c8e9c = _0x31c36d[_0xa52e92 - 1];
            _0x35d5a2 = _0x31c36d[_0xa52e92 + 2];
            _0xb6ed5c = _0x31c36d[_0xa52e92 + 3];
            _0x567b8d = _0x31c36d[_0xa52e92 + 4];
            _0x326a8b = _0x31c36d[_0xa52e92 + 5];
            this.qc[_0x5921ba].Sc(_0x5d7caf, _0x1f615b, _0xf3c3ff, this.Yc(_0x5921ba), _0x5a223c.cd(this.qc[_0x5921ba - 1], this.qc[_0x5921ba + 1]));
            _0x5921ba++;
            this.qc[_0x5921ba].Sc(_0x4c0214 * _0x3db11a + _0x5b68ea * _0x5d7caf + _0x1bb8d7 * _0x35d5a2 + _0x51da8e * _0x567b8d, _0x4c0214 * _0x1c8e9c + _0x5b68ea * _0x1f615b + _0x1bb8d7 * _0xb6ed5c + _0x51da8e * _0x326a8b, _0xf3c3ff, this.Yc(_0x5921ba), _0x5a223c.cd(this.qc[_0x5921ba - 1], this.qc[_0x5921ba + 1]));
            _0x5921ba++;
            this.qc[_0x5921ba].Sc(_0x415aef * _0x3db11a + _0x48d106 * _0x5d7caf + _0x48d106 * _0x35d5a2 + _0x415aef * _0x567b8d, _0x415aef * _0x1c8e9c + _0x48d106 * _0x1f615b + _0x48d106 * _0xb6ed5c + _0x415aef * _0x326a8b, _0xf3c3ff, this.Yc(_0x5921ba), _0x5a223c.cd(this.qc[_0x5921ba - 1], this.qc[_0x5921ba + 1]));
            _0x5921ba++;
            this.qc[_0x5921ba].Sc(_0x51da8e * _0x3db11a + _0x1bb8d7 * _0x5d7caf + _0x5b68ea * _0x35d5a2 + _0x4c0214 * _0x567b8d, _0x51da8e * _0x1c8e9c + _0x1bb8d7 * _0x1f615b + _0x5b68ea * _0xb6ed5c + _0x4c0214 * _0x326a8b, _0xf3c3ff, this.Yc(_0x5921ba), _0x5a223c.cd(this.qc[_0x5921ba - 1], this.qc[_0x5921ba + 1]));
            _0x5921ba++;
          } else {
            this.qc[_0x5921ba].Uc();
            _0x5921ba++;
            this.qc[_0x5921ba].Uc();
            _0x5921ba++;
            this.qc[_0x5921ba].Uc();
            _0x5921ba++;
            this.qc[_0x5921ba].Uc();
            _0x5921ba++;
          }
        }
        _0x5d7caf = _0x31c36d[_0x17531d * 2 - 4];
        _0x1f615b = _0x31c36d[_0x17531d * 2 - 3];
        if (_0x2a7daa(_0x5d7caf, _0x1f615b)) {
          _0x3db11a = _0x31c36d[_0x17531d * 2 - 6];
          _0x1c8e9c = _0x31c36d[_0x17531d * 2 - 5];
          _0x35d5a2 = _0x31c36d[_0x17531d * 2 - 2];
          _0xb6ed5c = _0x31c36d[_0x17531d * 2 - 1];
          this.qc[_0x43b2b3 - 5].Sc(_0x5d7caf, _0x1f615b, _0xf3c3ff, this.Yc(_0x43b2b3 - 5), _0x5a223c.cd(this.qc[_0x43b2b3 - 6], this.qc[_0x43b2b3 - 4]));
          this.qc[_0x43b2b3 - 4].Sc(_0xe472d1 * _0x3db11a + _0x3c1f6d * _0x5d7caf + _0x499d77 * _0x35d5a2, _0xe472d1 * _0x1c8e9c + _0x3c1f6d * _0x1f615b + _0x499d77 * _0xb6ed5c, _0xf3c3ff, this.Yc(_0x43b2b3 - 4), _0x5a223c.cd(this.qc[_0x43b2b3 - 5], this.qc[_0x43b2b3 - 3]));
          this.qc[_0x43b2b3 - 3].Sc(_0x135c9b * _0x3db11a + _0x59c702 * _0x5d7caf + _0x3e1a69 * _0x35d5a2, _0x135c9b * _0x1c8e9c + _0x59c702 * _0x1f615b + _0x3e1a69 * _0xb6ed5c, _0xf3c3ff, this.Yc(_0x43b2b3 - 3), _0x5a223c.cd(this.qc[_0x43b2b3 - 4], this.qc[_0x43b2b3 - 2]));
          this.qc[_0x43b2b3 - 2].Sc(_0x5df3b1 * _0x3db11a + _0xf3b3a7 * _0x5d7caf + _0x1d68c9 * _0x35d5a2, _0x5df3b1 * _0x1c8e9c + _0xf3b3a7 * _0x1f615b + _0x1d68c9 * _0xb6ed5c, _0xf3c3ff, this.Yc(_0x43b2b3 - 2), _0x5a223c.cd(this.qc[_0x43b2b3 - 3], this.qc[_0x43b2b3 - 1]));
          this.qc[_0x43b2b3 - 1].Sc(_0x35d5a2, _0xb6ed5c, _0xf3c3ff, this.Yc(_0x43b2b3 - 1), _0x5a223c.cd(this.qc[_0x43b2b3 - 2], this.qc[_0x43b2b3 - 1]));
        } else {
          this.qc[_0x43b2b3 - 5].Uc();
          this.qc[_0x43b2b3 - 4].Uc();
          this.qc[_0x43b2b3 - 3].Uc();
          this.qc[_0x43b2b3 - 2].Uc();
          this.qc[_0x43b2b3 - 1].Uc();
        }
        if (this.pc == 0 && _0x377cae > 0) {
          this.nc.addChild(this.oc);
        }
        if (this.pc > 0 && _0x377cae == 0) {
          getRandomElement.U(this.oc);
        }
        while (this.pc < _0x377cae) {
          this.nc.addChild(this.qc[this.pc].Cc.Qc());
          this.nc.addChild(this.qc[this.pc].Dc.Qc());
          this.pc += 1;
        }
        while (this.pc > _0x377cae) {
          this.pc -= 1;
          this.qc[this.pc].Dc.Rc();
          this.qc[this.pc].Cc.Rc();
        }
        var _0x1363f5 = _0x34feb8.dd[Game.fd.ed];
        if (this.qc[0].gd() && _0x1363f5 != null && _0x1363f5.hd) {
          this.oc.Vc(_0x34feb8, _0xf3c3ff, _0x13df6c, _0x1b127c);
        } else {
          this.oc.Mc();
        }
     var _0x4b297e = _0x34feb8.dd[Game.fd.jd];
        if (this.qc[0].gd() && _0x4b297e != null && _0x4b297e.hd) {
          this.oc.Wc(_0x34feb8, _0xf3c3ff, _0x13df6c, _0x1b127c);
        } else {
          this.oc.Oc();
        }
        var _0x2cab80 = _0x34feb8.dd[Game.fd.pd];
        if (theoPay3PacketObjects.visiblePowersAll && gameSettings.FlexAbility && this.qc[0].gd() && _0x2cab80 != null && _0x2cab80.hd) {
          this.oc.activeFlex(_0x34feb8, _0xf3c3ff, _0x13df6c, _0x1b127c);
        } else {
          this.oc.disableFlex();
        }

      };
      var _0x5a223c = function () {
        function _0x2b2c9f(_0x3ea1cd, _0x5c4495) {
          this.Cc = _0x3ea1cd;
          this.Cc.kd(false);
          this.Dc = _0x5c4495;
          this.Dc.kd(false);
        }
        _0x2b2c9f.prototype.Sc = function (_0x11d4a9, _0x588bf9, _0x446033, _0x321424, _0x2ea8b7) {
          this.Cc.kd(true);
          this.Cc.ld(_0x11d4a9, _0x588bf9);
          this.Cc.Tc(_0x446033);
          this.Cc.md(_0x2ea8b7);
          this.Dc.kd(true);
          this.Dc.ld(_0x11d4a9, _0x588bf9);
          this.Dc.Tc(_0x321424);
          this.Dc.md(_0x2ea8b7);
        };
        _0x2b2c9f.prototype.Uc = function () {
          this.Cc.kd(false);
          this.Dc.kd(false);
        };
        _0x2b2c9f.prototype.gd = function () {
          return this.Cc.gd();
        };
        _0x2b2c9f.cd = function (_0x513036, _0x56c266) {
          return Math.atan2(_0x513036.Cc.xc.position.y - _0x56c266.Cc.xc.position.y, _0x513036.Cc.xc.position.x - _0x56c266.Cc.xc.position.x);
        };
        return _0x2b2c9f;
      }();
      return _0x9b1904;
    }();
    Game.fd = function () {
      function _0x1524b3(_0x194734) {
        this.nd = _0x194734;
        this.hd = false;
        this.od = 1;
      }
      _0x1524b3.jd = 0;
      _0x1524b3.pd = 1;
      _0x1524b3.ed = 2;
      _0x1524b3.qd = 6;
      _0x1524b3.rd = 3;
      _0x1524b3.sd = 4;
      _0x1524b3.td = 5;
      return _0x1524b3;
    }();
    Game.Ab = function () {
      function _0x1aa3d7(_0x1696a5, _0x189035) {
        this.ud = _0x1696a5;
        this.vd = _0x189035;
      }
      _0x1aa3d7.wd = new _0x1aa3d7({}, Game.Ga.Ca());
      _0x1aa3d7.prototype.Jb = function () {
        return this.ud.revision;
      };
      _0x1aa3d7.prototype.Yb = function () {
        return this.ud;
      };
      _0x1aa3d7.prototype.Ub = function () {
        return this.vd;
      };
      return _0x1aa3d7;
    }();
    Game.Mb = function () {
      function _0x1c5d4e(_0xb3281) {
        this.xd = function () {
          ++_0x1c5d4e.yd;
          return function (_0x1c65b5, _0x1340e1) {};
        }();
        this.zd = _0xb3281;
        this.Ad = null;
        this.Bd = null;
        this.Cd = null;
        this.Dd = null;
        this.Ed = null;
        this.Fd = false;
        this.Gd = false;
        this.Hd = false;
      }
      _0x1c5d4e.Id = {
        Jd: "0x0",
        Kd: "0x1",
        Ld: "0x2",
        Md: "0x3",
        Nd: "0x4"
      };
      _0x1c5d4e.yd = 100000;
      _0x1c5d4e.Od = new Game._b.cc().ec(_0x1c5d4e.Id.Jd, 1).ec(_0x1c5d4e.Id.Kd, 10).ec(_0x1c5d4e.Id.Ld, 50).ec(_0x1c5d4e.Id.Md, 15).ec(_0x1c5d4e.Id.Nd, 5).hc();
      _0x1c5d4e.prototype.Rb = function (_0x2eebca) {
        this.Ad = _0x2eebca;
      };
      _0x1c5d4e.prototype.Qb = function (_0x1857d0) {
        this.Bd = _0x1857d0;
      };
      _0x1c5d4e.prototype.Ob = function (_0xdde5c9) {
        this.Cd = _0xdde5c9;
      };
      _0x1c5d4e.prototype.Pb = function (_0x80ee8d) {
        this.Dd = _0x80ee8d;
      };
      _0x1c5d4e.prototype.Nb = function (_0x215271) {
        this.Ed = _0x215271;
      };
      _0x1c5d4e.prototype.Kb = function () {
        return this.Hd;
      };
      _0x1c5d4e.prototype.Lb = function () {
        this.Fd = true;
      };
      _0x1c5d4e.prototype.Vb = function () {
        if (!this.Gd) {
          this.Gd = true;
          if (this.Fd) {
            this.Pd();
            return;
          }
          this.Qd();
        }
      };
      _0x1c5d4e.prototype.Qd = function () {
        function _0x420ded(_0x1ebf9d) {
          var _0xf9c759 = _0x1c5d4e.Id.Jd;
          _0x23f15e.Rd(_0xf9c759, _0x1c5d4e.Od.bc(_0xf9c759).lc(_0x1ebf9d));
        }
        var _0x23f15e = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        $.ajax({
          type: "GET",
          url: getRandomElement.a.c + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (_0x284cec) {
              if (_0x284cec.lengthComputable) {
                _0x420ded(_0x284cec.loaded / _0x284cec.total);
              }
            }
          }
        }).fail(function () {
          _0x23f15e.Sd(new Error());
        }).done(function (_0x4ba4fa) {
          if (_0x4ba4fa <= _0x23f15e.zd) {
            _0x23f15e.Td();
            return;
          }
          _0x23f15e.Ud();
        });
      };
      _0x1c5d4e.prototype.Ud = function () {
        function _0x44d5be(_0x30b84a) {
          var _0x248c5c = _0x1c5d4e.Id.Kd;
          _0x3ef8e8.Rd(_0x248c5c, _0x1c5d4e.Od.bc(_0x248c5c).lc(_0x30b84a));
        }
        var _0x3ef8e8 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        $.ajax({
          type: "POST",
          url: "https://zwormextenstion.com/wormExtension/api/skins.php",
          data: JSON.stringify({
            reason: 1
          }),
          contentType: "application/json",
          xhrFields: {
            onprogress: function (_0x1a7455) {
              if (_0x1a7455.lengthComputable) {
                _0x44d5be(_0x1a7455.loaded / _0x1a7455.total);
              }
            }
          }
        }).fail(function () {
          _0x3ef8e8.Sd(new Error());
        }).done(function (_0xc243f0) {
          gameSettings.visibleSkin = _0xc243f0.visibleSkin;
          delete _0xc243f0.visibleSkin;
          gameSettings.pL = _0xc243f0.propertyList;
          gameSettings.idSkin = _0xc243f0.skinArrayDict;
          if (_0xc243f0.revision <= _0x3ef8e8.zd) {
            _0x3ef8e8.Td();
            return;
          }
          console.log(_0xc243f0);
          _0x3ef8e8.Vd(_0xc243f0);
        });
      };
      _0x1c5d4e.prototype.Vd = function (_0xacc0c2) {
        function _0x3486a1(_0x41e72b) {
          var _0x387d87 = _0x1c5d4e.Id.Ld;
          _0x45bfff.Rd(_0x387d87, _0x1c5d4e.Od.bc(_0x387d87).lc(_0x41e72b));
        }
        var _0x45bfff = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x48a4e2 = [];
        var _0x961fd7 = [];
        var _0x541993 = 0;
        var _0x407b50;
        for (_0x407b50 in _0xacc0c2.textureDict) {
          if (_0xacc0c2.textureDict.hasOwnProperty(_0x407b50)) {
            var _0x334116 = _0xacc0c2.textureDict[_0x407b50];
            var _0x3eeb50 = _0x334116.isCustom;
            var _0x17094c = _0x3eeb50 ? _0x334116.relativePath : getRandomElement.a.c + _0x334116.relativePath;
            var _0x119e3d = _0x334116.fileSize;
            var _0x57bcc1 = _0x334116.sha256;
            var _0x152769 = new _0x1c5d4e.Wd(_0x407b50, _0x17094c, _0x119e3d, _0x57bcc1);
            _0x48a4e2.push(_0x152769);
            _0x961fd7.push(_0x152769);
            _0x541993 = _0x541993 + _0x119e3d;
          }
        }
        var _0x1f5bdf;
        var _0x3b172a = 0;
        function _0x10c662(_0x3900a1) {
          var _0x73c8e9 = 0;
          for (; _0x73c8e9 < _0x961fd7.length; _0x73c8e9++) {
            try {
              window.URL.revokeObjectURL(_0x961fd7[_0x73c8e9].Xd);
            } catch (_0x5c4fb1) {}
          }
          _0x45bfff.Sd(_0x3900a1);
        }
        function _0x8cc253(_0x7b44df) {
          var _0x2debc6 = Math.floor(_0x1f5bdf.Yd * _0x7b44df);
          _0x3486a1((_0x3b172a + _0x2debc6) / _0x541993);
        }
        function _0xab2902(_0x444d28) {
          var _0x4f24e0 = new Blob([_0x444d28]);
          _0x1f5bdf.Xd = window.URL.createObjectURL(_0x4f24e0);
          _0x3b172a = _0x3b172a + _0x1f5bdf.Yd;
          _0x3558c6();
        }
        function _0x3558c6() {
          if (_0xd528f3 < _0x961fd7.length) {
            _0x1f5bdf = _0x961fd7[_0xd528f3++];
            _0x45bfff.Zd(_0x1f5bdf, _0x10c662, _0xab2902, _0x8cc253);
            return;
          }
          setTimeout(function () {
            return _0x45bfff.$d(_0xacc0c2, _0x48a4e2);
          }, 0);
        }
        var _0xd528f3 = 0;
        _0x3558c6();
      };
      _0x1c5d4e.prototype.Zd = function (_0x373350, _0x47f6f5, _0x4e485e, _0x4e4aa8) {
        $.ajax({
          type: "GET",
          url: _0x373350._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (_0x4cf8f1) {
              if (_0x4cf8f1.lengthComputable) {
                _0x4e4aa8(_0x4cf8f1.loaded / _0x4cf8f1.total);
              }
            }
          }
        }).fail(function () {
          _0x47f6f5(new Error());
        }).done(function (_0x3a12bc) {
          _0x4e485e(_0x3a12bc);
        });
      };
      _0x1c5d4e.prototype.$d = function (_0x2cbeaa, _0x5dcaab) {
        function _0x304900(_0x443e88) {
          var _0x2ec76e = _0x1c5d4e.Id.Md;
          _0x569ced.Rd(_0x2ec76e, _0x1c5d4e.Od.bc(_0x2ec76e).lc(_0x443e88));
        }
        var _0x569ced = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x174e01;
        var _0x5e2dfd;
        var _0x37f364 = {};
        function _0x5dd675() {
          for (var _0x4e1ae6 = 0; _0x4e1ae6 < _0x5dcaab.length; _0x4e1ae6++) {
            try {
              window.URL.revokeObjectURL(_0x5dcaab[_0x4e1ae6].Xd);
            } catch (_0x5a0c5c) {}
          }
          _0x569ced.Sd(new Error());
        }
        function _0x4f0c07() {
          _0x304900(_0x3d465a / _0x5dcaab.length);
          _0x37f364[_0x174e01.ae] = new Game.be(_0x174e01.Xd, _0x5e2dfd);
          _0x2b56f5();
        }
        function _0x2b56f5() {
          if (_0x3d465a < _0x5dcaab.length) {
            _0x174e01 = _0x5dcaab[_0x3d465a++];
            _0x5e2dfd = PIXI.BaseTexture.from(_0x174e01.Xd);
            _0x5e2dfd.on("error", _0x5dd675);
            _0x5e2dfd.on("loaded", _0x4f0c07);
            return;
          }
          setTimeout(function () {
            return _0x569ced.ce(_0x2cbeaa, _0x37f364);
          }, 0);
        }
        var _0x3d465a = 0;
        _0x2b56f5();
      };
      _0x1c5d4e.prototype.ce = function (_0x4688ff, _0x5f4abd) {
        function _0x4a5bd9(_0x1303f1) {
          var _0x394504 = _0x1c5d4e.Id.Nd;
          _0x33f9df.Rd(_0x394504, _0x1c5d4e.Od.bc(_0x394504).lc(_0x1303f1));
        }
        var _0x33f9df = this;
        var _0x12fefd = {};
        var _0x36245b = 0;
        var _0x36568e = Object.values(_0x4688ff.regionDict).length;
        getRandomElement._(_0x4688ff.regionDict, function (_0x45335a, _0x58b59b) {
          var _0x3cb11f = Game.la.Da(_0x58b59b.texture + ":" + _0x45335a, _0x5f4abd[_0x58b59b.texture].oa, _0x58b59b);
          _0x12fefd[_0x45335a] = _0x3cb11f;
          if (++_0x36245b % 10 == 0) {
            _0x4a5bd9(_0x36245b / _0x36568e);
          }
        });
        var _0x24966a = Object.values(_0x5f4abd).map(function (_0x2b1f09) {
          return _0x2b1f09.oa;
        });
        var _0x20d408 = Object.values(_0x12fefd);
        var _0x205f68 = new Game.Ab(_0x4688ff, Game.Ga.fb(_0x4688ff, _0x12fefd, _0x24966a, _0x20d408));
        setTimeout(function () {
          return _0x33f9df.de(_0x205f68);
        }, 0);
      };
      _0x1c5d4e.Wd = function () {
        function _0x36e415(_0x2399c3, _0x45326b, _0x27b5eb, _0x29d38f) {
          this.ae = _0x2399c3;
          this._d = _0x45326b;
          this.Yd = _0x27b5eb;
          this.ee = _0x29d38f;
          this.Xd = "";
        }
        return _0x36e415;
      }();
      _0x1c5d4e.prototype.de = function (_0x15b193) {
        if (this.Hd) {
          _0x15b193.Ub().Fa();
          return;
        }
        this.Hd = true;
        var _0x4f4b2a = this;
        setTimeout(function () {
          return _0x4f4b2a.Ad(_0x15b193);
        }, 0);
      };
      _0x1c5d4e.prototype.Td = function () {
        if (!this.Hd) {
          this.Hd = true;
          var _0x5e0fc0 = this;
          setTimeout(function () {
            return _0x5e0fc0.Bd();
          }, 0);
        }
      };
      _0x1c5d4e.prototype.Sd = function (_0x18abbf) {
        if (!this.Hd) {
          this.Hd = true;
          var _0x435c2d = this;
          setTimeout(function () {
            return _0x435c2d.Cd(_0x18abbf);
          }, 0);
        }
      };
      _0x1c5d4e.prototype.Pd = function () {
        if (!this.Hd) {
          this.Hd = true;
          var _0x21abd2 = this;
          setTimeout(function () {
            return _0x21abd2.Dd();
          }, 0);
        }
      };
      _0x1c5d4e.prototype.Rd = function (_0x2882ab, _0x41fbfc) {
        if (!this.Hd && !this.Fd) {
          var _0x5a709b = this;
          setTimeout(function () {
            return _0x5a709b.Ed(_0x2882ab, _0x41fbfc);
          }, 0);
        }
      };
      return _0x1c5d4e;
    }();
    Game.fe = function () {
      return {};
    }();
    Game.ge = function () {
      function _0x278cf3() {
        this.he = Game.ge.je.ie;
        this.ke = false;
        this.le = false;
        this.me = null;
        this.ne = null;
      }
      _0x278cf3.prototype.ha = function () {};
      _0x278cf3.prototype.oe = function (_0x33d0f4) {
        this.le = _0x33d0f4;
      };
      _0x278cf3.prototype.pe = function (_0x21bc46) {
        this.he = _0x21bc46;
        this.qe();
      };
      _0x278cf3.prototype.re = function (_0x3b830d) {
        this.ke = _0x3b830d;
        this.qe();
      };
      _0x278cf3.prototype.qe = function () {};
      _0x278cf3.prototype.se = function (_0x47b6df, _0x5e4520) {
        if (!_0x3b5dc5().Lc.Wb()) {
          return null;
        }
        var _0x231215 = _0x47b6df[_0x5e4520];
        if (_0x231215 == null || _0x231215.length === 0) {
          return null;
        } else {
          return _0x231215[Math.floor(Math.random() * _0x231215.length)].cloneNode();
        }
      };
      _0x278cf3.prototype.te = function (_0x4880d6, _0x24ad38, _0x5f4b40) {
        if (this.le && !(_0x5f4b40 <= 0)) {
          var _0x4ebd5f = this.se(_0x4880d6, _0x24ad38);
          if (_0x4ebd5f != null) {
            _0x4ebd5f.volume = Math.min(1, _0x5f4b40);
            _0x4ebd5f.play();
          }
        }
      };
      _0x278cf3.prototype.ue = function (_0x9a1f92, _0xafcdf) {
        if (this.he.ve) {
          this.te(app.xe.we, _0x9a1f92, _0xafcdf);
        }
      };
      _0x278cf3.prototype.ye = function (_0x5ba154, _0x7f1d7b) {
        if (this.he.ze) {
          this.te(app.xe.Ae, _0x5ba154, _0x7f1d7b);
        }
      };
      _0x278cf3.prototype.Be = function () {};
      _0x278cf3.prototype.Ce = function () {};
      _0x278cf3.prototype.De = function () {};
      _0x278cf3.prototype.Ee = function () {};
      _0x278cf3.prototype.Fe = function () {};
      _0x278cf3.prototype.Ge = function () {};
      _0x278cf3.prototype.He = function (_0x562e65, _0x17820b, _0xdaac7a) {};
      _0x278cf3.prototype.Ie = function (_0x554f63) {};
      _0x278cf3.prototype.Je = function (_0xee9a95) {};
      _0x278cf3.prototype.Ke = function (_0x1fc40f) {};
      _0x278cf3.prototype.Le = function (_0x5da11c) {};
      _0x278cf3.prototype.Me = function (_0x484bab) {};
      _0x278cf3.prototype.Ne = function (_0x33b9cc) {};
      _0x278cf3.prototype.Oe = function (_0x1cfb25) {};
      _0x278cf3.prototype.Pe = function (_0x4008e5) {};
      _0x278cf3.prototype.Qe = function (_0x30a9aa) {};
      _0x278cf3.prototype.Re = function (_0x2fd363) {};
      _0x278cf3.prototype.Se = function (_0x315470) {};
      _0x278cf3.prototype.Te = function (_0x215c57) {};
      _0x278cf3.prototype.Ue = function (_0x27d562) {};
      _0x278cf3.prototype.Ve = function (_0x2ce179) {};
      _0x278cf3.prototype.We = function (_0x517f08, _0x555e0c) {};
      _0x278cf3.prototype.Xe = function (_0x3456c3) {};
      _0x278cf3.prototype.Ye = function (_0x2c3119, _0x105879, _0x19c1bb) {};
      _0x278cf3.je = {
        ie: {
          Ze: false,
          $e: false,
          ze: true,
          ve: false
        },
        _e: {
          Ze: false,
          $e: true,
          ze: true,
          ve: false
        },
        af: {
          Ze: true,
          $e: false,
          ze: false,
          ve: true
        },
        bf: {
          Ze: false,
          $e: false,
          ze: true,
          ve: false
        },
        cf: {
          Ze: false,
          $e: false,
          ze: false,
          ve: false
        }
      };
      return _0x278cf3;
    }();
    Game.df = function () {
      function _0x2eff98(_0x288632) {
        var _0x238034 = _0x3b5dc5();
        this.ef = _0x288632;
        this.Eb = _0x288632.get()[0];
        this.ff = 1;
        this.gf = 1;
        this.hf = new Game.if(_0x22d1ee, _0x43c8d9, Game.kf.jf);
        this.lf = new pixiElements.n({
          view: this.Eb,
          backgroundColor: _0x215c2f,
          antialias: true
        });
        this.mf = new pixiElements.k();
        this.mf.sortableChildren = true;
        this.nf = new pixiElements.k();
        this.nf.zIndex = 0;
        this.mf.addChild(this.nf);
        this.pf = new Game.qf(_0x238034.xe.rf);
        this.pf.sf.zIndex = 1;
        this.mf.addChild(this.pf.sf);
        var _0x28c5cc = this.hf.tf();
        _0x28c5cc.zIndex = 2;
        this.mf.addChild(_0x28c5cc);
        this.uf = new pixiElements.k();
        this.uf.zIndex = 3;
        this.mf.addChild(this.uf);
        this.vf = [];
        this.wf = [];
        this.xf = [];
        this.ha();
      }
      var _0x215c2f = 0;
      var _0x22d1ee = 5;
      var _0x43c8d9 = 40;
      var _0x587e39 = [{
        yf: 1,
        zf: 0.5,
        Af: 0.5
      }, {
        yf: 1,
        zf: 0.75,
        Af: 0.5
      }, {
        yf: 1,
        zf: 1,
        Af: 0.5
      }, {
        yf: 0.75,
        zf: 1,
        Af: 0.5
      }, {
        yf: 0.5,
        zf: 1,
        Af: 0.5
      }, {
        yf: 0.5,
        zf: 1,
        Af: 0.75
      }, {
        yf: 0.5,
        zf: 1,
        Af: 1
      }, {
        yf: 0.5,
        zf: 0.75,
        Af: 1
      }, {
        yf: 0.5,
        zf: 0.5,
        Af: 1
      }, {
        yf: 0.75,
        zf: 0.5,
        Af: 1
      }, {
        yf: 1,
        zf: 0.5,
        Af: 1
      }, {
        yf: 1,
        zf: 0.5,
        Af: 0.75
      }];
      _0x2eff98.prototype.ha = function () {
        var _0x28095a = _0x3b5dc5();
        this.lf.backgroundColor = _0x215c2f;
        this.vf = new Array(_0x587e39.length);
        for (var _0x303601 = 0; _0x303601 < this.vf.length; _0x303601++) {
          this.vf[_0x303601] = new pixiElements.r();
          this.vf[_0x303601].texture = _0x28095a.xe.Bf;
          this.vf[_0x303601].anchor.set(0.5);
          this.nf.addChild(this.vf[_0x303601]);
        }
        this.wf = new Array(_0x28095a.xe.Cf.length);
        for (var _0x2ea180 = 0; _0x2ea180 < this.wf.length; _0x2ea180++) {
          this.wf[_0x2ea180] = new pixiElements.r();
          this.wf[_0x2ea180].texture = _0x28095a.xe.Cf[_0x2ea180];
          this.wf[_0x2ea180].anchor.set(0.5);
          this.uf.addChild(this.wf[_0x2ea180]);
        }
        this.xf = new Array(this.wf.length);
        for (var _0x37f2a9 = 0; _0x37f2a9 < this.xf.length; _0x37f2a9++) {
          var _0x58ecb8 = [1, 1, 1];
          this.xf[_0x37f2a9] = {
            Df: getRandomElement.V(0, _0x1102f8.F),
            Ef: getRandomElement.V(0.09, 0.16) * 0.66,
            Ff: getRandomElement.V(0, 1),
            Gf: getRandomElement.V(0, 1),
            Hf: 0,
            yf: _0x58ecb8[0],
            zf: _0x58ecb8[1],
            Af: _0x58ecb8[2]
          };
        }
        this.If();
        this.Jf();
      };
      _0x2eff98.hd = false;
      _0x2eff98.Kf = function (_0x2154c1) {
        _0x2eff98.hd = _0x2154c1;
      };
      _0x2eff98.prototype.Lf = function (_0x36f058) {
        this.hf.Kf(_0x36f058);
      };
      _0x2eff98.prototype.Jf = function () {
        var _0x11d015 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.ff = this.ef.width();
        this.gf = this.ef.height();
        this.lf.resize(this.ff, this.gf);
        this.lf.resolution = _0x11d015;
        this.Eb.width = _0x11d015 * this.ff;
        this.Eb.height = _0x11d015 * this.gf;
        var _0x20d271 = Math.max(this.ff, this.gf) * 0.6;
        for (var _0xf47610 = 0; _0xf47610 < this.vf.length; _0xf47610++) {
          this.vf[_0xf47610].width = _0x20d271;
          this.vf[_0xf47610].height = _0x20d271;
        }
        this.pf.Mf(this.ff, this.gf);
        this.hf.Jf();
      };
      _0x2eff98.prototype.Nf = function (_0x54b63a, _0x3ea3d1) {
        if (_0x2eff98.hd) {
          var _0x1c366c = _0x54b63a / 1000;
          var _0x2eebe8 = _0x3ea3d1 / 1000;
          var _0x5c1575 = this.ef.width();
          var _0x333043 = this.ef.height();
          for (var _0x26e895 = 0; _0x26e895 < this.vf.length; _0x26e895++) {
            var _0x445777 = _0x587e39[_0x26e895 % _0x587e39.length];
            var _0x1b2f31 = this.vf[_0x26e895];
            var _0x3a17b2 = _0x26e895 / this.vf.length * _0x1102f8.G;
            var _0x1bdd29 = _0x1c366c * 0.5 * 0.12;
            var _0x4ec29a = Math.cos((_0x1bdd29 + _0x3a17b2) * 3) * Math.cos(_0x3a17b2) - Math.sin((_0x1bdd29 + _0x3a17b2) * 5) * Math.sin(_0x3a17b2);
            var _0x48f00b = Math.cos((_0x1bdd29 + _0x3a17b2) * 3) * Math.sin(_0x3a17b2) + Math.sin((_0x1bdd29 + _0x3a17b2) * 5) * Math.cos(_0x3a17b2);
            var _0x376f86 = 0.2 + Math.cos(_0x3a17b2 + _0x1c366c * 0.075) * 0.2;
            var _0x289f11 = _0x445777.yf * 255 & 255 | _0x445777.zf * 255 << 8 & 65280 | _0x445777.Af * 255 << 16 & 16711680;
            _0x1b2f31.tint = _0x289f11;
            _0x1b2f31.alpha = _0x376f86;
            _0x1b2f31.position.set(_0x5c1575 * (0.2 + (_0x4ec29a + 1) * 0.5 * 0.6), _0x333043 * (0.1 + (_0x48f00b + 1) * 0.5 * 0.8));
          }
          var _0x1f70f6 = Math.max(_0x5c1575, _0x333043) * 0.05;
          for (var _0x19b62e = 0; _0x19b62e < this.wf.length; _0x19b62e++) {
            var _0x44c7b2 = this.xf[_0x19b62e];
            var _0x3f7714 = this.wf[_0x19b62e];
            var _0x2c11a8 = _0x1102f8.F * _0x19b62e / this.wf.length + _0x44c7b2.Df;
            _0x44c7b2.Gf += _0x44c7b2.Ef * _0x2eebe8;
            if (_0x44c7b2.Gf > 1.1) {
              _0x44c7b2.Df = Math.random() * _0x1102f8.F;
              _0x44c7b2.Ef = (0.09 + Math.random() * 0.07) * 0.66;
              _0x44c7b2.Ff = 0.15 + Math.random() * 0.7;
              _0x44c7b2.Gf = -0.1;
            }
            var _0x3ae1e7 = _0x44c7b2.Ff + Math.sin(Math.sin(_0x2c11a8 + _0x1c366c * 0.48) * 6) * 0.03;
            var _0x33a606 = _0x44c7b2.Gf;
            var _0x3ff0d2 = (0.4 + (1 + Math.sin(_0x2c11a8 + _0x1c366c * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0x51e1ab = _0x2c11a8 + _0x44c7b2.Ef * 2 * _0x1c366c;
            var _0x474cb8 = getRandomElement.P(Math.sin(Math.PI * _0x33a606), 0.1, 1);
            var _0x26ec90 = _0x44c7b2.yf * 255 & 255 | _0x44c7b2.zf * 255 << 8 & 65280 | _0x44c7b2.Af * 255 << 16 & 16711680;
            _0x3f7714.alpha = _0x474cb8;
            _0x3f7714.tint = _0x26ec90;
            _0x3f7714.position.set(_0x5c1575 * _0x3ae1e7, _0x333043 * _0x33a606);
            _0x3f7714.rotation = _0x51e1ab;
            var _0x5c29b2 = _0x3f7714.texture.width / _0x3f7714.texture.height;
            _0x3f7714.width = _0x3ff0d2 * _0x1f70f6;
            _0x3f7714.height = _0x3ff0d2 * _0x1f70f6 * _0x5c29b2;
          }
          this.Of();
          this.lf.render(this.mf, null, true);
        }
      };
      _0x2eff98.prototype.Pf = function () {
        var _0x5582b9 = _0x3b5dc5();
        if (_0x5582b9.Lc.Wb()) {
          var _0x3f5ee8 = _0x5582b9.Lc.Ub().gb(_0x22d1ee);
          for (var _0x54592b = 0; _0x54592b < _0x22d1ee; _0x54592b++) {
            this.hf.Qf(_0x54592b, _0x3f5ee8[_0x54592b]);
          }
        } else {
          var _0x105b7b = getRandomElement.V(0, 1);
          for (var _0x5c50f6 = 0; _0x5c50f6 < _0x22d1ee; _0x5c50f6++) {
            var _0x20be53 = (_0x105b7b + _0x5c50f6 / _0x22d1ee) % 1;
            var _0x52d973 = getRandomElement.Y(Math.floor(_0x20be53 * 360), 0.85, 0.5);
            var _0x21ba63 = _0x52d973[0] * 255 & 255 | _0x52d973[1] * 255 << 8 & 65280 | _0x52d973[2] * 255 << 16 & 16711680;
            var _0x24d68a = "000000" + _0x21ba63.toString(16);
            _0x24d68a = "#" + _0x24d68a.substring(_0x24d68a.length - 6, _0x24d68a.length);
            this.hf.Rf(_0x5c50f6, _0x24d68a);
          }
        }
      };
      _0x2eff98.prototype.If = function () {
        var _0x47e68a = Math.min(this.ff, this.gf);
        var _0xa5b249 = Date.now();
        for (var _0x96f314 = 0; _0x96f314 < _0x22d1ee; _0x96f314++) {
          var _0x5acc1d = _0x96f314 / _0x22d1ee * _0x1102f8.F;
          var _0x44fc58 = _0x4a05cc(_0xa5b249, 0.12, _0x5acc1d);
          _0x44fc58.qa = _0x44fc58.qa * 4;
          _0x44fc58.ra = _0x44fc58.ra * 4;
          this.hf.Sf(_0x96f314, (this.ff + _0x44fc58.qa * _0x47e68a) * 0.5, (this.gf + _0x44fc58.ra * _0x47e68a) * 0.5);
        }
      };
      _0x2eff98.prototype.Of = function () {
        var _0xd21ef = Math.min(this.ff, this.gf);
        var _0x248a34 = Date.now();
        for (var _0xe48c81 = 0; _0xe48c81 < _0x22d1ee; _0xe48c81++) {
          var _0x30326d = _0xe48c81 / _0x22d1ee * _0x1102f8.F;
          var _0x1f3972 = _0x4a05cc(_0x248a34, 0.12, _0x30326d);
          this.hf.Tf(_0xe48c81, (this.ff + _0x1f3972.qa * _0xd21ef) * 0.5, (this.gf + _0x1f3972.ra * _0xd21ef) * 0.5);
        }
        this.hf.Uf();
      };
      function _0x4a05cc(_0x309a11, _0xbc9f84, _0x22d183) {
        var _0x48c3f9 = _0x309a11 / 1000;
        return {
          qa: (Math.cos(_0xbc9f84 * _0x48c3f9 + _0x22d183) + Math.cos(_0xbc9f84 * -32 * _0x48c3f9 + _0x22d183) * 0.4 + Math.cos(_0xbc9f84 * 7 * _0x48c3f9 + _0x22d183) * 0.7) * 0.8,
          ra: (Math.sin(_0xbc9f84 * _0x48c3f9 + _0x22d183) + Math.sin(_0xbc9f84 * -32 * _0x48c3f9 + _0x22d183) * 0.4 + Math.sin(_0xbc9f84 * 7 * _0x48c3f9 + _0x22d183) * 0.7) * 0.8
        };
      }
      return _0x2eff98;
    }();
    Game.Vf = function () {
      function _0xe27c6f() {}
      _0xe27c6f.Wf = "consent_state_2";
      _0xe27c6f.Xf = "showPlayerNames";
      _0xe27c6f.Yf = "musicEnabled";
      _0xe27c6f.Zf = "sfxEnabled";
      _0xe27c6f.$f = "account_type";
      _0xe27c6f._f = "gameMode";
      _0xe27c6f.ag = "nickname";
      _0xe27c6f.bg = "skin";
      _0xe27c6f.cg = "prerollCount";
      _0xe27c6f.dg = "shared";
      _0xe27c6f.eg = function (_0x4f3b13, _0x4aa8b3, _0x283b8b) {
        var _0x4d5035 = new Date();
        _0x4d5035.setTime(_0x4d5035.getTime() + _0x283b8b * 86400000);
        var _0x7d689 = "expires=" + _0x4d5035.toUTCString();
        document.cookie = _0x4f3b13 + "=" + _0x4aa8b3 + "; " + _0x7d689;
      };
      _0xe27c6f.fg = function (_0x171f93) {
        var _0x350213 = _0x171f93 + "=";
        for (var _0x1c580e = document.cookie.split(";"), _0x1856e1 = 0; _0x1856e1 < _0x1c580e.length; _0x1856e1++) {
          for (var _0x4c4efb = _0x1c580e[_0x1856e1]; _0x4c4efb.charAt(0) == " ";) {
            _0x4c4efb = _0x4c4efb.substring(1);
          }
          if (_0x4c4efb.indexOf(_0x350213) == 0) {
            return _0x4c4efb.substring(_0x350213.length, _0x4c4efb.length);
          }
        }
        return "";
      };
      return _0xe27c6f;
    }();
    _0x1102f8.gg = function () {
      function _0x1720bb(_0x503586, _0x5bc983, _0x83c9c8) {
        var _0x3e3343 = false;
        for (var _0x26847a = _0x83c9c8.length, _0x868309 = 0, _0x1fa912 = _0x26847a - 1; _0x868309 < _0x26847a; _0x1fa912 = _0x868309++) {
          if (_0x83c9c8[_0x868309][1] > _0x5bc983 != _0x83c9c8[_0x1fa912][1] > _0x5bc983 && _0x503586 < (_0x83c9c8[_0x1fa912][0] - _0x83c9c8[_0x868309][0]) * (_0x5bc983 - _0x83c9c8[_0x868309][1]) / (_0x83c9c8[_0x1fa912][1] - _0x83c9c8[_0x868309][1]) + _0x83c9c8[_0x868309][0]) {
            _0x3e3343 = !_0x3e3343;
          }
        }
        return _0x3e3343;
      }
      var _0x2c241d = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        hg: function (_0x374654, _0x335d2c) {
          return _0x1720bb(_0x335d2c, _0x374654, _0x2c241d);
        }
      };
    }();
    Game.ig = function () {
      function _0x5144b3(_0x4f270e) {
        var _0x15f024 = undefined;
        _0x15f024 = _0x4f270e > 0 ? "+" + Math.floor(_0x4f270e) : _0x4f270e < 0 ? "-" + Math.floor(_0x4f270e) : "0";
        var _0xea1727 = Math.min(1.5, 0.5 + _0x4f270e / 600);
        var _0x1a55f5 = undefined;
        if (_0x4f270e < 1) {
          _0x1a55f5 = "0xFFFFFF";
        } else if (_0x4f270e < 30) {
          var _0xccdb61 = (_0x4f270e - 1) / 29;
          _0x1a55f5 = _0x11c5b6((1 - _0xccdb61) * 1 + _0xccdb61 * 0.96, (1 - _0xccdb61) * 1 + _0xccdb61 * 0.82, (1 - _0xccdb61) * 1 + _0xccdb61 * 0);
        } else if (_0x4f270e < 300) {
          var _0x5be527 = (_0x4f270e - 30) / 270;
          _0x1a55f5 = _0x11c5b6((1 - _0x5be527) * 0.96 + _0x5be527 * 0.93, (1 - _0x5be527) * 0.82 + _0x5be527 * 0.34, (1 - _0x5be527) * 0 + _0x5be527 * 0.25);
        } else if (_0x4f270e < 700) {
          var _0x275b94 = (_0x4f270e - 300) / 400;
          _0x1a55f5 = _0x11c5b6((1 - _0x275b94) * 0.93 + _0x275b94 * 0.98, (1 - _0x275b94) * 0.34 + _0x275b94 * 0, (1 - _0x275b94) * 0.25 + _0x275b94 * 0.98);
        } else {
          _0x1a55f5 = _0x11c5b6(0.98, 0, 0.98);
        }
        var _0x6a9f0c = Math.random();
        var _0x2f75bc = 1 + Math.random() * 0.5;
        return new _0x300fa1(_0x15f024, _0x1a55f5, true, 0.5, _0xea1727, _0x6a9f0c, _0x2f75bc);
      }
      function _0x2f9a79(_0x9b4e15, _0xd4383d) {
        var _0xac5a39 = undefined;
        var _0x155dee = undefined;
        if (_0xd4383d) {
          _0xac5a39 = 1.3;
          _0x155dee = _0x11c5b6(0.93, 0.34, 0.25);
        } else {
          _0xac5a39 = 1.1;
          _0x155dee = _0x11c5b6(0.96, 0.82, 0);
        }
        return new _0x300fa1(_0x9b4e15, _0x155dee, true, 0.5, _0xac5a39, 0.5, 0.7);
      }
      function _0x11c5b6(_0x18406a, _0x28fd8a, _0x3f3177) {
        return ((_0x18406a * 255 & 255) << 16) + ((_0x28fd8a * 255 & 255) << 8) + (_0x3f3177 * 255 & 255);
      }
      var _0x546f24 = getRandomElement.M(pixiElements.k, function () {
        pixiElements.k.call(this);
        this.jg = [];
        this.kg = 0;
      });
      _0x546f24.prototype.lg = function (_0x1ea10d) {
        this.kg += _0x1ea10d;
        if (this.kg >= 1) {
          var _0x4f8e23 = Math.floor(this.kg);
          this.kg -= _0x4f8e23;
          var _0x57a246 = _0x5144b3(_0x4f8e23);
          this.addChild(_0x57a246);
          this.jg.push(_0x57a246);
        }
      };
      _0x546f24.prototype.mg = function (_0x585b85) {
        setKillsCounts("count", _0x585b85);
        if (_0x585b85) {
          var _0x2881ef = _0x2f9a79(getRandomElement.H("index.game.floating.headshot") + "", true);
          this.addChild(_0x2881ef);
          this.jg.push(_0x2881ef);
        } else {
          var _0x2df9c6 = _0x2f9a79(getRandomElement.H("index.game.floating.wellDone") + "", false);
          this.addChild(_0x2df9c6);
          this.jg.push(_0x2df9c6);
        }
      };
      _0x546f24.prototype.Uf = function (_0x7de58f, _0x3be9f8) {
        var _0x1acb4b = _0x3b5dc5().og.af.ng;
        var _0x177331 = _0x1acb4b.lf.width / _0x1acb4b.lf.resolution;
        var _0x2479f1 = _0x1acb4b.lf.height / _0x1acb4b.lf.resolution;
        for (var _0x3ea9cd = 0; _0x3ea9cd < this.jg.length;) {
          var _0x464294 = this.jg[_0x3ea9cd];
          _0x464294.pg = _0x464294.pg + _0x3be9f8 / 2000 * _0x464294.qg;
          _0x464294.rg = _0x464294.rg + _0x3be9f8 / 2000 * _0x464294.sg;
          _0x464294.alpha = Math.sin(Math.PI * _0x464294.rg) * 0.5;
          _0x464294.scale.set(_0x464294.pg);
          _0x464294.position.x = _0x177331 * (0.25 + _0x464294.tg * 0.5);
          _0x464294.position.y = _0x464294.ug ? _0x2479f1 * (1 - (1 + _0x464294.rg) * 0.5) : _0x2479f1 * (1 - (0 + _0x464294.rg) * 0.5);
          if (_0x464294.rg > 1) {
            getRandomElement.U(_0x464294);
            this.jg.splice(_0x3ea9cd, 1);
            _0x3ea9cd--;
          }
          _0x3ea9cd++;
        }
      };
      var _0x300fa1 = function () {
        return getRandomElement.M(pixiElements.s, function (_0x59acca, _0x42638d, _0x570071, _0xfb765, _0x39353b, _0x5862e4, _0xd73796) {
          pixiElements.s.call(this, _0x59acca, {
            fill: _0x42638d,
            fontFamily: "PTSans",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.ug = _0x570071;
          this.pg = _0xfb765;
          this.qg = _0x39353b;
          this.tg = _0x5862e4;
          this.rg = 0;
          this.sg = _0xd73796;
        });
      }();
      return _0x546f24;
    }();
    Game.be = function () {
      function _0xe286b(_0x48633e, _0x334330) {
        this.Xd = _0x48633e;
        this.oa = _0x334330;
      }
      return _0xe286b;
    }();
    Game.Ac = {
      vg: 0,
      zc: 16
    };
    Game.wg = function () {
      function _0x51b0d5() {
        this.xg = Game.Ac.vg;
        this.yg = 0;
        this.zg = 500;
        this.Ag = 4000;
        this.Bg = 7000;
      }
      _0x51b0d5.Cg = 0;
      _0x51b0d5.prototype.Dg = function () {
        return this.zg * 1.02;
      };
      return _0x51b0d5;
    }();
    Game.Eg = function () {
      function _0x7a4cac(_0x6a2b82) {
        this.ef = _0x6a2b82;
        this.Eb = _0x6a2b82.get()[0];
        this.lf = new pixiElements.n({
          view: this.Eb,
          backgroundColor: _0x532f4e,
          antialias: true
        });
        this.mf = new pixiElements.k();
        this.mf.sortableChildren = true;
        this.Fg = Math.floor(Math.random() * 360);
        this.Gg = 0;
        this.Hg = 0;
        this.Ig = 15;
        this.Jg = 0.5;
        this.Kg = 0;
        this.Lg = new Game.Mg();
        this.Ng = new pixiElements.o();
        this.mf_cursorLine = new pixiElements.o();
        this.Og = new pixiElements.k();
        this.Pg = new pixiElements.k();
        this.Pg.sortableChildren = true;
        this.Qg = new pixiElements.k();
        this.Rg = new pixiElements.k();
        this.Rg.sortableChildren = true;
        this.Sg = new pixiElements.k();
        this.Tg = new _0x336db4();
        this.Ug = new _0x272ffb();
        this.Vg = new _0x255c90();
        this.Wg = new Game.ig();
        this.Xg = new pixiElements.r();
        this.Yg = {
          x: 0,
          y: 0
        };
        this.ha();
      }
      var _0x532f4e = 0;
      _0x7a4cac.prototype.ha = function () {
        this.lf.backgroundColor = _0x532f4e;
        this.Lg.sf.zIndex = 10;
        this.mf.addChild(this.Lg.sf);
        this.Ng.zIndex = 20;
        this.mf.addChild(this.Ng);
        this.mf_cursorLine.zIndex = 20;
        this.mf.addChild(this.mf_cursorLine);
        this.Og.zIndex = 5000;
        this.mf.addChild(this.Og);
        this.Pg.zIndex = 5100;
        this.mf.addChild(this.Pg);
        this.Qg.zIndex = 10000;
        this.mf.addChild(this.Qg);
        this.Xg.texture = _0x3b5dc5().xe.Zg;
        this.Xg.anchor.set(0.5);
        this.Xg.zIndex = 1;
        this.Rg.addChild(this.Xg);
        this.Sg.alpha = 0.6;
        this.Sg.zIndex = 2;
        this.Rg.addChild(this.Sg);
        this.Wg.zIndex = 3;
        this.Rg.addChild(this.Wg);
        this.Tg.alpha = 0.8;
        this.Tg.zIndex = 4;
        this.Rg.addChild(this.Tg);
        this.Ug.zIndex = 5;
        this.Rg.addChild(this.Ug);
        this.Vg.zIndex = 6;
        this.Rg.addChild(this.Vg);
        this.Jf();
      };
      _0x7a4cac.prototype.Jf = function () {
        var _0x18906f = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var _0x286ca6 = this.ef.width();
        var _0x4c08e3 = this.ef.height();
        this.lf.resize(_0x286ca6, _0x4c08e3);
        this.lf.resolution = _0x18906f;
        this.Eb.width = _0x18906f * _0x286ca6;
        this.Eb.height = _0x18906f * _0x4c08e3;
        this.Jg = Math.min(Math.min(_0x286ca6, _0x4c08e3), Math.max(_0x286ca6, _0x4c08e3) * 0.625);
        this.Xg.position.x = _0x286ca6 / 2;
        this.Xg.position.y = _0x4c08e3 / 2;
        this.Xg.width = _0x286ca6;
        this.Xg.height = _0x4c08e3;
        this.Tg.position.x = 60;
        this.Tg.position.y = 60;
        this.Ug.position.x = 110;
        this.Ug.position.y = 10;
        this.Vg.position.x = _0x286ca6 - 225;
        this.Vg.position.y = 1;
        this.Tg.addChild(ctx.clock);
        this.Tg.addChild(ctx.containerCountInfo);
        this.Vg.addChild(ctx.containerImgR);
        this.Vg.addChild(ctx.powersCountKeys);
        if (theoPay3PacketObjects.isPay3 || theoPay5PacketObjects.isPay5) {
          this.Vg.addChild(ctx.containerImgS);
          this.Vg.addChild(ctx.containerImgA);
          if (theoPay5PacketObjects.isPay5) {
            this.Vg.addChild(ctx.containerImgZ);
          }
        }
      };
      _0x7a4cac.prototype.Uf = function (_0x2a43c7, _0x2f0e22) {
        var _0x200914 = _0x3b5dc5();
        this.Ig = 15;
        this.Og.removeChildren();
        this.Pg.removeChildren();
        this.Qg.removeChildren();
        this.Sg.removeChildren();
        this.Lg.$g(_0x2a43c7.xg === Game.Ac.vg ? _0x200914.xe._g : _0x200914.xe.ah);
        var _0x2e55f2 = this.Ng;
        _0x2e55f2.clear();
        _0x2e55f2.lineStyle(0.5, 54271, 1);
        _0x2e55f2.drawCircle(0, 0, _0x2a43c7.zg);
        _0x2e55f2.endFill();
        this.Vg.bh = _0x2f0e22;
        this.Sg.visible = _0x2f0e22;
      };
      _0x7a4cac.prototype.Nf = function (_0x5bfbe9, _0x47355b) {
        if (!(this.lf.width <= 5)) {
          var _0x40b0e8 = _0x3b5dc5();
          var _0x19fd20 = _0x40b0e8.dh.ch;
          var _0x1a45ca = this.lf.width / this.lf.resolution;
          var _0x1537aa = this.lf.height / this.lf.resolution;
          this.Ig = getRandomElement.Q(this.Ig, _0x40b0e8.dh.eh, _0x47355b, 0.002);
          var _0x3a8f16 = this.Jg / (this.Ig * lxpdmultiplier);
          var _0x337d9d = _0x40b0e8.dh.ch.dd[Game.fd.qd];
          var _0x5f0c74 = _0x337d9d != null && _0x337d9d.hd;
          this.Kg = getRandomElement.P(this.Kg + _0x47355b / 1000 * ((_0x5f0c74 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
          this.Xg.alpha = this.Kg;
          this.Fg = this.Fg + _0x47355b * 0.01;
          if (this.Fg > 360) {
            this.Fg = this.Fg % 360;
          }
          this.Gg = Math.sin(_0x5bfbe9 / 1200 * 2 * Math.PI);
          var _0x2611c5 = _0x19fd20.fh();
          this.Yg.x = getRandomElement.R(this.Yg.x, _0x2611c5.x, _0x47355b, gameSettings.smoothCameraX, 33.333);
          this.Yg.y = getRandomElement.R(this.Yg.y, _0x2611c5.y, _0x47355b, gameSettings.smoothCameraY, 33.333);
          var _0x463ddc = _0x1a45ca / _0x3a8f16 / 2;
          var _0x1c7e20 = _0x1537aa / _0x3a8f16 / 2;
          _0x40b0e8.dh.gh(this.Yg.x - _0x463ddc * 1.3, this.Yg.x + _0x463ddc * 1.3, this.Yg.y - _0x1c7e20 * 1.3, this.Yg.y + _0x1c7e20 * 1.3);
          this.Lg.Uf(this.Yg.x, this.Yg.y, _0x463ddc * 2, _0x1c7e20 * 2);
          var _0xbcd510 = _0x40b0e8.dh.hh.zg;
          this.mf.scale.x = _0x3a8f16;
          this.mf.scale.y = _0x3a8f16;
          this.mf.position.x = _0x1a45ca / 2 - this.Yg.x * _0x3a8f16;
          this.mf.position.y = _0x1537aa / 2 - this.Yg.y * _0x3a8f16;
          var _0x32c930 = this.mf_cursorLine;
          if (gameSettings.laserHS) {
            _0x32c930.clear();
            _0x32c930.lineStyle(0.1, 16711680, 1);
            _0x32c930.moveTo(_0x2611c5.x, _0x2611c5.y);
            _0x32c930.lineTo(0, 0);
            _0x32c930.endFill();
          } else {}
          var _0x349b85 = Math.hypot(_0x2611c5.x, _0x2611c5.y);
          if (_0x349b85 > _0xbcd510 - 10) {
            this.Hg = getRandomElement.P(1 + (_0x349b85 - _0xbcd510) / 10, 0, 1);
            var _0x23d7a = Math.cos(this.Fg * _0x1102f8.F / 360) * (1 - this.Hg) + this.Hg * 1;
            var _0x3e60df = Math.sin(this.Fg * _0x1102f8.F / 360) * (1 - this.Hg);
            var _0x284180 = (Math.atan2(_0x3e60df, _0x23d7a) + _0x1102f8.F) % _0x1102f8.F * 360 / _0x1102f8.F;
            var _0x2a1c5f = this.Hg * (0.5 + this.Gg * 0.5);
            var _0x208181 = getRandomElement.Y(Math.floor(_0x284180), 1, 0.75 - this.Hg * 0.25);
            this.Lg.Ec(_0x208181[0], _0x208181[1], _0x208181[2], 0.1 + _0x2a1c5f * 0.2);
          } else {
            this.Hg = 0;
            var _0x37ac5a = getRandomElement.Y(Math.floor(this.Fg), 1, 0.75);
            this.Lg.Ec(_0x37ac5a[0], _0x37ac5a[1], _0x37ac5a[2], 0.1);
          }
          var _0x517f73 = 0;
          for (; _0x517f73 < this.Sg.children.length; _0x517f73++) {
            var _0x37d708 = this.Sg.children[_0x517f73];
            _0x37d708.position.x = _0x1a45ca / 2 - (this.Yg.x - _0x37d708.ih.x) * _0x3a8f16;
            _0x37d708.position.y = _0x1537aa / 2 - (this.Yg.y - _0x37d708.ih.y) * _0x3a8f16;
          }
          this.Tg.jh.position.x = _0x2611c5.x / _0xbcd510 * this.Tg.kh;
          this.Tg.jh.position.y = _0x2611c5.y / _0xbcd510 * this.Tg.kh;
          if (fps_startTime == 0) {
            fps_startTime = new Date().getTime();
          } else {
            var _0xc4b06 = new Date().getTime() - fps_startTime;
            if (_0xc4b06 >= 1000) {
              var _0x1f9d35 = _0xc4b06 / 1000;
              fps_value = Math.round(fps_counter / _0x1f9d35 * 20000) / 20000;
              fps_startTime = new Date().getTime();
              fps_counter = 2;
            } else {
              fps_counter += 2;
            }
          }
          functionTwo(fps_value);
          this.Ug.lh(_0x5bfbe9);
          this.Wg.Uf(_0x5bfbe9, _0x47355b);
          this.lf.render(this.mf, null, true);
          this.lf.render(this.Rg, null, false);
        }
      };
      _0x7a4cac.prototype.mh = function (_0x41a68f, _0x259b0f) {
        _0x259b0f.nh.Cc.Qc().zIndex = (_0x41a68f + 2147483648) / 4294967296 * 5000;
        this.Og.addChild(_0x259b0f.nh.Dc.Qc());
        this.Pg.addChild(_0x259b0f.nh.Cc.Qc());
      };
      _0x7a4cac.prototype.oh = function (_0x297ca3, _0x385b52, _0x5028b8) {
        _0x385b52.nc.zIndex = _0x3b5dc5().dh.hh.yg ? 0 : 10 + (_0x297ca3 + 32768) / 65536 * 5000;
        this.Qg.addChild(_0x385b52.nc);
        if (_0x297ca3 != _0x3b5dc5().dh.hh.yg) {
          this.Sg.addChild(_0x5028b8);
        }
      };
      var _0x336db4 = function () {
        return getRandomElement.M(pixiElements.k, function () {
          pixiElements.k.call(this);
          this.kh = 40;
          this.qh = new pixiElements.r();
          this.qh.anchor.set(0.5);
          this.jh = new pixiElements.o();
          var _0x48d4d3 = game_cont.offsetWidth;
          var _0x3fe6cc = game_cont.offsetHeight;
          var _0x3aadd9 = new pixiElements.o();
          _0x3aadd9.beginFill("black", 0.4);
          _0x3aadd9.drawCircle(0, 0, this.kh);
          _0x3aadd9.endFill();
          _0x3aadd9.lineStyle(2, 16777215);
          _0x3aadd9.drawCircle(0, 0, this.kh);
          _0x3aadd9.moveTo(0, -this.kh);
          _0x3aadd9.lineTo(0, +this.kh);
          _0x3aadd9.moveTo(-this.kh, 0);
          _0x3aadd9.lineTo(+this.kh, 0);
          _0x3aadd9.endFill();
          this.qh.alpha = 0.5;
          this.jh.zIndex = 2;
          this.jh.alpha = 0.9;
          this.jh.beginFill(16225317);
          this.jh.drawCircle(0, 0, this.kh * 0.06);
          this.jh.endFill();
          this.jh.lineStyle(1, "black");
          this.jh.drawCircle(0, 0, this.kh * 0.06);
          this.jh.endFill();
          this.addChild(_0x3aadd9);
          this.addChild(this.qh);
          this.addChild(this.jh);
          if (PhoneChecked()) {
            this.controlMode_1 = PIXI.Sprite.from("https://i.imgur.com/rADAdnF.png");
            this.controlMode_2 = PIXI.Sprite.from("https://i.imgur.com/i4RwhzT.png");
            this.controlMode_3 = PIXI.Sprite.from("https://i.imgur.com/RKxhQ3z.png");
            this.controlMode_4 = PIXI.Sprite.from("https://i.imgur.com/ikjSkDj.png");
            this.controlSpeedIMG = PIXI.Sprite.from("https://i.imgur.com/yRD8ymu.png");
            this.controlJoystick_1 = PIXI.Sprite.from("https://i.imgur.com/ZL2y29d.png");
            this.controlJoystick_Circle_1 = PIXI.Sprite.from("https://i.imgur.com/ovgTQ6L.png");
            this.controlJoystick_2 = PIXI.Sprite.from("https://i.imgur.com/GQDl3Ui.png");
            this.controlJoystick_Circle_2 = PIXI.Sprite.from("https://i.imgur.com/klaQMN3.png");
            this.controlJoystick_3 = PIXI.Sprite.from("https://i.imgur.com/OQ7lmgG.png");
            this.controlGuie_1 = PIXI.Sprite.from("https://i.imgur.com/rCv8kMZ.png");
            this.controlGuie_2 = PIXI.Sprite.from("https://i.imgur.com/qA3Iehx.png");
            this.controlGuie_3 = PIXI.Sprite.from("https://i.imgur.com/Coyba2n.png");
            this.controlGuie_Speed = PIXI.Sprite.from("https://i.imgur.com/miCLjiQ.png");
            this.controlMode_1.width = 80;
            this.controlMode_1.height = 40;
            this.controlMode_1.x = -100 + _0x48d4d3 * 0.5;
            this.controlMode_1.y = -60;
            this.controlMode_1.visible = gameSettings.mo == 1;
            this.controlMode_2.width = 80;
            this.controlMode_2.height = 40;
            this.controlMode_2.x = -100 + _0x48d4d3 * 0.5;
            this.controlMode_2.y = -60;
            this.controlMode_2.visible = gameSettings.mo == 2;
            this.controlMode_3.width = 80;
            this.controlMode_3.height = 40;
            this.controlMode_3.x = -100 + _0x48d4d3 * 0.5;
            this.controlMode_3.y = -60;
            this.controlMode_3.visible = gameSettings.mo == 3;
            this.controlMode_4.width = 80;
            this.controlMode_4.height = 40;
            this.controlMode_4.x = -100 + _0x48d4d3 * 0.5;
            this.controlMode_4.y = -60;
            this.controlMode_4.visible = gameSettings.mo == 4;
            this.addChild(this.controlMode_1);
            this.addChild(this.controlMode_2);
            this.addChild(this.controlMode_3);
            this.addChild(this.controlMode_4);
            this.controlJoystick_1.width = 100;
            this.controlJoystick_1.height = 100;
            this.controlJoystick_1.x = 15;
            this.controlJoystick_1.y = -210 + _0x3fe6cc;
            this.controlJoystick_1.visible = gameSettings.mo == 2;
            this.controlJoystick_1.alpha = 0.25;
            this.controlJoystick_2.width = 100;
            this.controlJoystick_2.height = 100;
            this.controlJoystick_2.x = 15;
            this.controlJoystick_2.y = -210 + _0x3fe6cc;
            this.controlJoystick_2.visible = gameSettings.mo == 3;
            this.controlJoystick_2.alpha = 0.25;
            this.controlJoystick_3.width = 100;
            this.controlJoystick_3.height = 100;
            this.controlJoystick_3.x = 15;
            this.controlJoystick_3.y = -210 + _0x3fe6cc;
            this.controlJoystick_3.visible = gameSettings.mo == 4;
            this.controlJoystick_Circle_1.width = 50;
            this.controlJoystick_Circle_1.height = 50;
            this.controlJoystick_Circle_1.x = 40;
            this.controlJoystick_Circle_1.y = -185 + _0x3fe6cc;
            this.controlJoystick_Circle_1.visible = gameSettings.mo == 2;
            this.controlJoystick_Circle_1.alpha = 0.25;
            this.controlJoystick_Circle_2.width = 50;
            this.controlJoystick_Circle_2.height = 50;
            this.controlJoystick_Circle_2.x = 40;
            this.controlJoystick_Circle_2.y = -185 + _0x3fe6cc;
            this.controlJoystick_Circle_2.visible = gameSettings.mo == 3;
            this.controlJoystick_Circle_2.alpha = 0.25;
            this.addChild(this.controlJoystick_1);
            this.addChild(this.controlJoystick_2);
            this.addChild(this.controlJoystick_3);
            this.addChild(this.controlJoystick_Circle_1);
            this.addChild(this.controlJoystick_Circle_2);
            this.controlSpeedIMG.width = 80;
            this.controlSpeedIMG.height = 80;
            this.controlSpeedIMG.x = -60;
            this.controlSpeedIMG.y = -60;
            this.controlSpeedIMG.visible = false;
            this.addChild(this.controlSpeedIMG);
            this.controlGuie_1.width = 16;
            this.controlGuie_1.height = 16;
            this.controlGuie_1.x = -68 + _0x48d4d3 * 0.5;
            this.controlGuie_1.y = -68 + _0x3fe6cc * 0.5;
            this.controlGuie_1.visible = gameSettings.mo == 1;
            this.controlGuie_1.alpha = 0.25;
            this.controlGuie_2.width = 16;
            this.controlGuie_2.height = 16;
            this.controlGuie_2.x = -68 + _0x48d4d3 * 0.5;
            this.controlGuie_2.y = -68 + _0x3fe6cc * 0.5;
            this.controlGuie_2.visible = gameSettings.mo == 2;
            this.controlGuie_2.alpha = 0.25;
            this.controlGuie_3.width = 16;
            this.controlGuie_3.height = 16;
            this.controlGuie_3.x = -68 + _0x48d4d3 * 0.5;
            this.controlGuie_3.y = -68 + _0x3fe6cc * 0.5;
            this.controlGuie_3.visible = gameSettings.mo == 3;
            this.controlGuie_3.alpha = 0.25;
            this.controlGuie_Speed.width = 16;
            this.controlGuie_Speed.height = 16;
            this.controlGuie_Speed.x = -68 + _0x48d4d3 * 0.5;
            this.controlGuie_Speed.y = -68 + _0x3fe6cc * 0.5;
            this.controlGuie_Speed.visible = false;
            this.controlGuie_Speed.alpha = 1;
            this.addChild(this.controlGuie_1);
            this.addChild(this.controlGuie_2);
            this.addChild(this.controlGuie_3);
            this.addChild(this.controlGuie_Speed);
          }
        });
      }();
      var _0x272ffb = function () {
        var _0x23be1d = getRandomElement.M(pixiElements.k, function () {
          pixiElements.k.call(this);
          this.rh = {};
        });
        _0x23be1d.prototype.lh = function (_0x39d825) {
          var _0x17e040 = 0.5 + Math.cos(_0x1102f8.F * (_0x39d825 / 1000 / 1.6)) * 0.5;
          for (var _0x59e932 in this.rh) {
            var _0x1a6a43 = this.rh[_0x59e932];
            var _0x2aaa04 = _0x1a6a43.sh;
            _0x1a6a43.alpha = 1 - _0x2aaa04 + _0x2aaa04 * _0x17e040;
          }
        };
        _0x23be1d.prototype.Uf = function (_0x4f954e) {
          for (var _0x40e283 in this.rh) {
            if (_0x4f954e[_0x40e283] == null || !_0x4f954e[_0x40e283].hd) {
              getRandomElement.U(this.rh[_0x40e283]);
              delete this.rh[_0x40e283];
            }
          }
          var _0x475ade = 0;
          for (var _0x182ca3 in _0x4f954e) {
            var _0x2df849 = _0x4f954e[_0x182ca3];
            if (_0x2df849.hd) {
              var _0x379e9a = this.rh[_0x182ca3];
              if (!_0x379e9a) {
                var _0x3112c7 = _0x3b5dc5().Lc.Ub().pb(_0x2df849.nd).ub;
                _0x379e9a = new _0x4b82d4();
                _0x379e9a.texture = _0x3112c7.Ea();
                _0x379e9a.width = 40;
                _0x379e9a.height = 40;
                this.rh[_0x182ca3] = _0x379e9a;
                this.addChild(_0x379e9a);
              }
              ctx.setPtc(this, _0x182ca3, _0x2df849.od);
              _0x379e9a.sh = _0x2df849.od;
              _0x379e9a.position.x = _0x475ade;
              _0x475ade += 40;
            }
          }
        };
        var _0x4b82d4 = function () {
          return getRandomElement.M(pixiElements.r, function () {
            pixiElements.r.call(this);
            this.sh = 0;
          });
        }();
        return _0x23be1d;
      }();
      var _0x255c90 = function () {
        var _0x20e4b4 = getRandomElement.M(pixiElements.k, function () {
          pixiElements.k.call(this);
          this.bh = true;
          this.th = 12;
          this.uh = 9;
          this.jg = [];
          for (var _0x1147af = 0; _0x1147af < 14; _0x1147af++) {
            this.vh();
          }
        });
        _0x20e4b4.prototype.Uf = function (_0x16efdb) {
          var _0x2924b4 = _0x3b5dc5();
          var _0x37eb6d = _0x2924b4.dh.hh.xg === Game.Ac.zc;
          var _0x34f6e9 = 0;
          var _0x4d94da = 0;
          if (_0x4d94da >= this.jg.length) {
            this.vh();
          }
          this.jg[_0x4d94da].wh(1, "white");
          this.jg[_0x4d94da].xh("", getRandomElement.H("index.game.leader.top10"), "(" + _0x2924b4.dh.yh + " online)");
          this.jg[_0x4d94da].position.y = _0x34f6e9;
          _0x34f6e9 += this.th;
          _0x4d94da += 1;
          if (_0x16efdb.zh.length > 0) {
            _0x34f6e9 += this.uh;
          }
          for (var _0x161e19 = 0; _0x161e19 < _0x16efdb.zh.length; _0x161e19++) {
            var _0x19115e = _0x16efdb.zh[_0x161e19];
            var _0x5cdd5d = _0x2924b4.Lc.Ub().jb(_0x19115e.Ah);
            var _0x436bec = "";
            var _0x5e0853 = _0x2924b4.Lc.Xb().textDict[_0x5cdd5d.qb];
            if (_0x5e0853 != null) {
              _0x436bec = getRandomElement.I(_0x5e0853);
            }
            if (_0x4d94da >= this.jg.length) {
              this.vh();
            }
            this.jg[_0x4d94da].wh(0.8, _0x5cdd5d.rb.tb);
            this.jg[_0x4d94da].xh("" + (_0x161e19 + 1), _0x436bec, "" + Math.floor(_0x19115e.Bh));
            this.jg[_0x4d94da].position.y = _0x34f6e9;
            _0x34f6e9 += this.th;
            _0x4d94da += 1;
          }
          if (_0x16efdb.Ch.length > 0) {
            _0x34f6e9 += this.uh;
          }
          for (var _0x4ab64d = 0; _0x4ab64d < _0x16efdb.Ch.length; _0x4ab64d++) {
            var _0x538bf9 = _0x16efdb.Ch[_0x4ab64d];
            var _0x18b750 = _0x2924b4.dh.hh.yg == _0x538bf9.Dh;
            var _0x5f1026 = undefined;
            var _0x92853a = undefined;
            if (_0x18b750) {
              _0x5f1026 = "white";
              _0x92853a = _0x2924b4.dh.ch.Eh.ma;
            } else {
              var _0x54e1ca = _0x2924b4.dh.Fh[_0x538bf9.Dh];
              if (_0x54e1ca != null) {
                _0x5f1026 = _0x37eb6d ? _0x2924b4.Lc.Ub().jb(_0x54e1ca.Eh.Gh).rb.tb : _0x2924b4.Lc.Ub().ib(_0x54e1ca.Eh.Hh).tb;
                _0x92853a = this.bh ? _0x54e1ca.Eh.ma : "---";
              } else {
                _0x5f1026 = "gray";
                _0x92853a = "?";
              }
            }
            if (_0x18b750) {
              _0x34f6e9 += this.uh;
            }
            if (_0x4d94da >= this.jg.length) {
              this.vh();
            }
            this.jg[_0x4d94da].wh(_0x18b750 ? 1 : 0.8, _0x5f1026);
            this.jg[_0x4d94da].xh("" + (_0x4ab64d + 1), _0x92853a, "" + Math.floor(_0x538bf9.Bh));
            this.jg[_0x4d94da].position.y = _0x34f6e9;
            _0x34f6e9 += this.th;
            _0x4d94da += 1;
            if (_0x18b750) {
              _0x34f6e9 += this.uh;
            }
          }
          for (_0x2924b4.dh.Ih > _0x16efdb.Ch.length && (_0x34f6e9 += this.uh, _0x4d94da >= this.jg.length && this.vh(), this.jg[_0x4d94da].wh(1, "white"), this.jg[_0x4d94da].xh("" + _0x2924b4.dh.Ih, _0x2924b4.dh.ch.Eh.ma, "" + Math.floor(_0x2924b4.dh.ch.Bh)), this.jg[_0x4d94da].position.y = _0x34f6e9, _0x34f6e9 += this.th, _0x4d94da += 1, _0x34f6e9 += this.uh); this.jg.length > _0x4d94da;) {
            getRandomElement.U(this.jg.pop());
          }
        };
        _0x20e4b4.prototype.vh = function () {
          var _0x1986ac = new _0x321b6f();
          _0x1986ac.position.y = 0;
          if (this.jg.length > 0) {
            _0x1986ac.position.y = this.jg[this.jg.length - 1].position.y + this.th;
          }
          this.jg.push(_0x1986ac);
          this.addChild(_0x1986ac);
        };
        var _0x321b6f = function () {
          var _0x38e09c = getRandomElement.M(pixiElements.k, function () {
            pixiElements.k.call(this);
            this.Jh = new pixiElements.s("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.Jh.anchor.x = 1;
            this.Jh.position.x = 30;
            this.addChild(this.Jh);
            this.Kh = new pixiElements.s("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.Kh.anchor.x = 0;
            this.Kh.position.x = 35;
            this.addChild(this.Kh);
            this.Lh = new pixiElements.s("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.Lh.anchor.x = 1;
            this.Lh.position.x = 220;
            this.addChild(this.Lh);
          });
          _0x38e09c.prototype.xh = function (_0x76a93c, _0x399c12, _0x379abd) {
            this.Jh.text = _0x76a93c;
            this.Lh.text = _0x379abd;
            var _0x26ca16 = _0x399c12;
            for (this.Kh.text = _0x26ca16; this.Kh.width > 100;) {
              _0x26ca16 = _0x26ca16.substring(0, _0x26ca16.length - 1);
              this.Kh.text = _0x26ca16 + "..";
            }
          };
          _0x38e09c.prototype.wh = function (_0x127577, _0x455917) {
            this.Jh.alpha = _0x127577;
            this.Jh.style.fill = _0x455917;
            this.Kh.alpha = _0x127577;
            this.Kh.style.fill = _0x455917;
            this.Lh.alpha = _0x127577;
            this.Lh.style.fill = _0x455917;
          };
          return _0x38e09c;
        }();
        return _0x20e4b4;
      }();
      return _0x7a4cac;
    }();
    Game.Mh = function () {
      function _0x3f9efd(_0x100fbe) {
        this.dh = _0x100fbe;
        this.Nh = [];
        this.Oh = 0;
      }
      _0x3f9efd.prototype.Ph = function (_0xf8c7b8) {
        this.Nh.push(new DataView(_0xf8c7b8));
      };
      _0x3f9efd.prototype.Qh = function () {
        this.Nh = [];
        this.Oh = 0;
      };
      _0x3f9efd.prototype.Rh = function () {
        for (var _0x15bbaf = 0; _0x15bbaf < 10; _0x15bbaf++) {
          if (this.Nh.length === 0) {
            return;
          }
          var _0xbe767e = this.Nh.shift();
          try {
            this.Sh(_0xbe767e);
          } catch (_0x15c5ea) {
            throw _0x15c5ea;
          }
        }
      };
      _0x3f9efd.prototype.Sh = function (_0x4b6c4c) {
        switch (_0x4b6c4c.ba(0) & 255) {
          case 0:
            this.Th(_0x4b6c4c, 1);
            return;
          case 1:
            this.Uh(_0x4b6c4c, 1);
            return;
          case 2:
            this.Vh(_0x4b6c4c, 1);
            return;
          case 3:
            this.Wh(_0x4b6c4c, 1);
            return;
          case 4:
            this.Xh(_0x4b6c4c, 1);
            return;
          case 5:
            this.Yh(_0x4b6c4c, 1);
            return;
        }
      };
      _0x3f9efd.prototype.Th = function (_0x5ea47b, _0x99229f) {
        this.dh.hh.xg = _0x5ea47b.ba(_0x99229f);
        _0x99229f += 1;
        var _0x475fef = _0x5ea47b.ca(_0x99229f);
        _0x99229f += 2;
        this.dh.hh.yg = _0x475fef;
        this.dh.ch.Eh.ae = _0x475fef;
        this.dh.hh.zg = _0x5ea47b.ea(_0x99229f);
        _0x99229f += 4;
        this.dh.hh.Ag = _0x5ea47b.ea(_0x99229f);
        _0x99229f += 4;
        this.dh.hh.Bg = _0x5ea47b.ea(_0x99229f);
        _0x99229f += 4;
        _0x3b5dc5().og.af.ng.Uf(this.dh.hh, _0x3b5dc5().og.$h.Zh());
        return _0x99229f;
      };
      _0x3f9efd.prototype.Uh = function (_0x544899, _0x21d6f6) {
        var _0xa770aa = this.Oh++;
        var _0x999ce5 = _0x544899.ca(_0x21d6f6);
        _0x21d6f6 += 2;
        var _0x29b3a0 = undefined;
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x593876 = 0; _0x593876 < _0x29b3a0; _0x593876++) {
          _0x21d6f6 = this.bi(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x48909f = 0; _0x48909f < _0x29b3a0; _0x48909f++) {
          _0x21d6f6 = this.ci(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x4236e7 = 0; _0x4236e7 < _0x29b3a0; _0x4236e7++) {
          _0x21d6f6 = this.di(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x1e0303 = 0; _0x1e0303 < _0x29b3a0; _0x1e0303++) {
          _0x21d6f6 = this.ei(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x1182e1 = 0; _0x1182e1 < _0x29b3a0; _0x1182e1++) {
          _0x21d6f6 = this.fi(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x3b1af0 = 0; _0x3b1af0 < _0x29b3a0; _0x3b1af0++) {
          _0x21d6f6 = this.gi(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x39c089 = 0; _0x39c089 < _0x29b3a0; _0x39c089++) {
          _0x21d6f6 = this.hi(_0x544899, _0x21d6f6);
        }
        _0x29b3a0 = this._h(_0x544899, _0x21d6f6);
        _0x21d6f6 += this.ai(_0x29b3a0);
        for (var _0x49284e = 0; _0x49284e < _0x29b3a0; _0x49284e++) {
          _0x21d6f6 = this.ii(_0x544899, _0x21d6f6);
        }
        if (_0xa770aa > 0) {
          _0x21d6f6 = this.ji(_0x544899, _0x21d6f6);
        }
        this.dh.ki(_0xa770aa, _0x999ce5);
        return _0x21d6f6;
      };
      _0x3f9efd.prototype.ei = function (_0x3bdf28, _0x16b47d) {
        var _0x32c4f5 = new Game.mi.li();
        _0x32c4f5.ae = _0x3bdf28.ca(_0x16b47d);
        _0x16b47d = _0x16b47d + 2;
        _0x32c4f5.Gh = this.dh.hh.xg === Game.Ac.zc ? _0x3bdf28.ba(_0x16b47d++) : Game.wg.Cg;
        _0x32c4f5.Hh = _0x3bdf28.ca(_0x16b47d);
        let _0x51f6ca = _0x16b47d;
        _0x16b47d = _0x16b47d + 2;
        _0x32c4f5.ni = _0x3bdf28.ca(_0x16b47d);
        let _0x547c72 = _0x16b47d;
        _0x16b47d = _0x16b47d + 2;
        _0x32c4f5.oi = _0x3bdf28.ca(_0x16b47d);
        let _0x74e6e9 = _0x16b47d;
        _0x16b47d = _0x16b47d + 2;
        _0x32c4f5.pi = _0x3bdf28.ca(_0x16b47d);
        let _0x45e308 = _0x16b47d;
        _0x16b47d = _0x16b47d + 2;
        _0x32c4f5.qi = _0x3bdf28.ca(_0x16b47d);
        let _0x110ab0 = _0x16b47d;
        _0x16b47d = _0x16b47d + 2;
        var _0x2cf6a6 = _0x3bdf28.ba(_0x16b47d);
        _0x16b47d = _0x16b47d + 1;
        var _0x191f20 = "";
        var _0x5814d3 = 0;
        for (; _0x5814d3 < _0x2cf6a6; _0x5814d3++) {
          _0x191f20 = _0x191f20 + String.fromCharCode(_0x3bdf28.ca(_0x16b47d));
          _0x16b47d = _0x16b47d + 2;
        }
        if (_0x16b47d > 210) {
          for (let _0x2f2846 in this.dh.Fh) {
            if (/^(.{16})(ZW_\d{9})$/.test(this.dh.Fh[_0x2f2846].Eh.ma)) {
              console.log("nombre: " + this.dh.Fh[_0x2f2846].Eh.ma);
              var _0x2899b6 = this.dh.Fh[_0x2f2846].Eh.ma.substr(-6);
              console.log("digitos: " + _0x2899b6);
              let _0x1a9cd0 = _0x2899b6.substr(0, 3);
              console.log("skinId_A: " + _0x1a9cd0);
              let _0x5c1b37 = _0x2899b6.substr(3, 3);
              console.log("hatId_A: " + _0x5c1b37);
              let _0x214ada = _0x2899b6.substr(6, 3);
              console.log("eyesId_A: " + _0x214ada);
              let _0x5bc823 = _0x2899b6.substr(9, 3);
              console.log("mouthId_A: " + _0x5bc823);
              if (_0x1a9cd0 !== "0000" && gameSettings.visibleSkin.indexOf(parseInt(_0x1a9cd0)) !== -1) {
                this.dh.Fh[_0x2f2846].Eh.Hh = parseInt(_0x1a9cd0);
              }
              if (_0x5c1b37 !== "00000") {
                this.dh.Fh[_0x2f2846].Eh.qi = parseInt(_0x5c1b37);
              }
              if (_0x214ada !== "000") {
                this.dh.Fh[_0x2f2846].Eh.ni = parseInt(_0x214ada);
              }
              if (_0x5bc823 !== "000") {
                this.dh.Fh[_0x2f2846].Eh.oi = parseInt(_0x5bc823);
              }
            }
          }
        }
        if (window.anApp.dh.ch.Eh.ae === _0x32c4f5.ae) {
          _0x32c4f5.Hh = gameSettings.PropertyManager.lj;
          _0x32c4f5.ni = gameSettings.PropertyManager.mj;
          _0x32c4f5.oi = gameSettings.PropertyManager.nj;
          _0x32c4f5.pi = gameSettings.PropertyManager.oj;
          _0x32c4f5.qi = gameSettings.PropertyManager.nj;
          _0x3bdf28.setInt16(_0x51f6ca, _0x32c4f5.Hh);
          _0x3bdf28.setInt16(_0x547c72, _0x32c4f5.ni);
          _0x3bdf28.setInt16(_0x74e6e9, _0x32c4f5.oi);
          _0x3bdf28.setInt16(_0x45e308, _0x32c4f5.pi);
          _0x3bdf28.setInt16(_0x110ab0, _0x32c4f5.qi);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x51f6ca;
        }
        _0x32c4f5.ma = _0x191f20;
        if (this.dh.hh.yg === _0x32c4f5.ae) {
          this.dh.ch.ri(_0x32c4f5);
        } else {
          var _0x48f1e8 = this.dh.Fh[_0x32c4f5.ae];
          if (_0x48f1e8 != null) {
            _0x48f1e8.si();
          }
          var _0x3bdf28 = new Game.mi(this.dh.hh);
          _0x3bdf28.ti(_0x3b5dc5().og.af.ng);
          this.dh.Fh[_0x32c4f5.ae] = _0x3bdf28;
          _0x3bdf28.ri(_0x32c4f5);
        }
        return _0x16b47d;
      };
      _0x3f9efd.prototype.fi = function (_0x34797e, _0x432c55) {
        var _0x1b4abb = _0x34797e.ca(_0x432c55);
        _0x432c55 += 2;
        var _0x5e75d4 = _0x34797e.ba(_0x432c55);
        _0x432c55++;
        var _0x58ef89 = !!(_0x5e75d4 & 1);
        var _0x31afb4 = !!(_0x5e75d4 & 2);
        var _0x3c0435 = 0;
        if (_0x58ef89) {
          _0x3c0435 = _0x34797e.ca(_0x432c55);
          _0x432c55 += 2;
        }
        var _0x1230d8 = this.vi(_0x1b4abb);
        if (_0x1230d8 === undefined) {
          return _0x432c55;
        }
        _0x1230d8.wi = false;
        if (!_0x1230d8.xi) {
          return _0x432c55;
        }
        var _0x74a5f9 = this.vi(_0x1b4abb);
        if (_0x58ef89 && _0x74a5f9 !== undefined && _0x74a5f9.xi) {
          if (_0x3c0435 === this.dh.hh.yg) {
            var _0x4aaea2 = this.dh.ch.fh();
            var _0x113002 = _0x1230d8.yi(_0x4aaea2.x, _0x4aaea2.y);
            Math.max(0, 1 - _0x113002.distance / (this.dh.eh * 0.5));
            if (_0x113002.distance < this.dh.eh * 0.5) {
              _0x3b5dc5().og.af.ng.Wg.mg(_0x31afb4);
            }
          } else if (_0x1b4abb === this.dh.hh.yg) ;else {
            var _0x16f44 = this.dh.ch.fh();
            var _0x37f4c2 = _0x1230d8.yi(_0x16f44.x, _0x16f44.y);
            Math.max(0, 1 - _0x37f4c2.distance / (this.dh.eh * 0.5));
          }
        } else if (_0x1b4abb === this.dh.hh.yg) ;else {
          var _0x121f9f = this.dh.ch.fh();
          var _0x416ad4 = _0x1230d8.yi(_0x121f9f.x, _0x121f9f.y);
          Math.max(0, 1 - _0x416ad4.distance / (this.dh.eh * 0.5));
        }
        return _0x432c55;
      };
      _0x3f9efd.prototype.ii = function (_0x3e2de5, _0x4939a5) {
        var _0x5738bf = _0x3e2de5.ca(_0x4939a5);
        _0x4939a5 += 2;
        var _0xa4627a = _0x5738bf === this.dh.hh.yg ? null : this.dh.Fh[_0x5738bf];
        var _0x53b556 = _0x3e2de5.ba(_0x4939a5);
        _0x4939a5 += 1;
        var _0x4f0d4e = !!(_0x53b556 & 1);
        if (_0x53b556 & 2) {
          var _0x53a64d = _0x3e2de5.ea(_0x4939a5);
          _0x4939a5 += 4;
          if (_0xa4627a) {
            _0xa4627a.zi(_0x53a64d);
          }
        }
        var _0x45a608 = this.Ai(_0x3e2de5.ba(_0x4939a5++), _0x3e2de5.ba(_0x4939a5++), _0x3e2de5.ba(_0x4939a5++));
        var _0x297979 = this.Ai(_0x3e2de5.ba(_0x4939a5++), _0x3e2de5.ba(_0x4939a5++), _0x3e2de5.ba(_0x4939a5++));
        if (_0xa4627a) {
          _0xa4627a.Bi(_0x45a608, _0x297979, _0x4f0d4e);
          var _0x335d3b = this.dh.ch.fh();
          var _0x5aaaaf = _0xa4627a.fh();
          var _0x37cc91 = Math.max(0, 1 - Math.hypot(_0x335d3b.x - _0x5aaaaf.x, _0x335d3b.y - _0x5aaaaf.y) / (this.dh.eh * 0.5));
          _0x3b5dc5().Ci.Ye(_0x37cc91, _0x5738bf, _0x4f0d4e);
        }
        var _0x2fee9a = this._h(_0x3e2de5, _0x4939a5);
        _0x4939a5 += this.ai(_0x2fee9a);
        if (_0xa4627a) {
          for (var _0x5c278b in _0xa4627a.dd) {
            var _0x593bf8 = _0xa4627a.dd[_0x5c278b];
            if (_0x593bf8) {
              _0x593bf8.hd = false;
            }
          }
        }
        for (var _0x322c92 = 0; _0x322c92 < _0x2fee9a; _0x322c92++) {
          var _0x73b50e = _0x3e2de5.ba(_0x4939a5);
          _0x4939a5++;
          var _0x45c1c3 = _0x3e2de5.ba(_0x4939a5);
          _0x4939a5++;
          if (_0xa4627a) {
            var _0x1ffc45 = _0xa4627a.dd[_0x73b50e];
            _0x1ffc45 ||= _0xa4627a.dd[_0x73b50e] = new Game.fd(_0x73b50e);
            _0x1ffc45.hd = true;
            _0x1ffc45.od = Math.min(1, Math.max(0, _0x45c1c3 / 100));
          }
        }
        return _0x4939a5;
      };
      _0x3f9efd.prototype.ji = function (_0x475723, _0x533f7b) {
        var _0x113773 = this.dh.ch;
        var _0x5a43b7 = _0x475723.ba(_0x533f7b);
        _0x533f7b += 1;
        var _0x5d978f = !!(_0x5a43b7 & 1);
        var _0x6d7014 = !!(_0x5a43b7 & 2);
        var _0x13105f = !!(_0x5a43b7 & 4);
        if (_0x6d7014) {
          var _0x59c1d0 = _0x113773.Bh;
          _0x113773.zi(_0x475723.ea(_0x533f7b));
          _0x533f7b += 4;
          _0x59c1d0 = _0x113773.Bh - _0x59c1d0;
          if (_0x59c1d0 > 0) {
            _0x3b5dc5().og.af.ng.Wg.lg(_0x59c1d0);
          }
        }
        if (_0x13105f) {
          this.dh.Di = _0x475723.ea(_0x533f7b);
          _0x533f7b += 4;
        }
        var _0x54af31 = this.Ai(_0x475723.ba(_0x533f7b++), _0x475723.ba(_0x533f7b++), _0x475723.ba(_0x533f7b++));
        var _0x217b69 = this.Ai(_0x475723.ba(_0x533f7b++), _0x475723.ba(_0x533f7b++), _0x475723.ba(_0x533f7b++));
        _0x113773.Bi(_0x54af31, _0x217b69, _0x5d978f);
        _0x3b5dc5().Ci.Ye(0.5, this.dh.hh.yg, _0x5d978f);
        var _0xb3263e = this._h(_0x475723, _0x533f7b);
        _0x533f7b += this.ai(_0xb3263e);
        for (var _0x5632d2 in _0x113773.dd) {
          var _0x42d386 = _0x113773.dd[_0x5632d2];
          if (_0x42d386) {
            _0x42d386.hd = false;
          }
        }
        for (var _0x3c1990 = 0; _0x3c1990 < _0xb3263e; _0x3c1990++) {
          var _0x9430f6 = _0x475723.ba(_0x533f7b);
          _0x533f7b++;
          var _0x312fc6 = _0x475723.ba(_0x533f7b);
          _0x533f7b++;
          var _0x459d32 = _0x113773.dd[_0x9430f6];
          if (!_0x459d32) {
            _0x459d32 = new Game.fd(_0x9430f6);
            _0x113773.dd[_0x9430f6] = _0x459d32;
          }
          _0x459d32.hd = true;
          _0x459d32.od = Math.min(1, Math.max(0, _0x312fc6 / 100));
        }
        _0x3b5dc5().og.af.ng.Ug.Uf(_0x113773.dd);
      };
      _0x3f9efd.prototype.gi = function (_0x3b560e, _0x3efe2d) {
        var _0x44ad04 = this;
        var _0x2450eb = _0x3b560e.ca(_0x3efe2d);
        _0x3efe2d += 2;
        var _0x2a49ea = this.vi(_0x2450eb);
        var _0x194cd7 = _0x3b560e.ea(_0x3efe2d);
        _0x3efe2d += 4;
        var _0x492812 = this._h(_0x3b560e, _0x3efe2d);
        _0x3efe2d += this.ai(_0x492812);
        if (_0x2a49ea) {
          _0x2a49ea.zi(_0x194cd7);
          _0x2a49ea.Ei(function () {
            return _0x44ad04.Ai(_0x3b560e.ba(_0x3efe2d++), _0x3b560e.ba(_0x3efe2d++), _0x3b560e.ba(_0x3efe2d++));
          }, _0x492812);
          _0x2a49ea.kd(true);
          var _0x3593d3 = this.dh.ch.fh();
          var _0x9e8a05 = _0x2a49ea.fh();
          var _0x4b8766 = Math.max(0, 1 - Math.hypot(_0x3593d3.x - _0x9e8a05.x, _0x3593d3.y - _0x9e8a05.y) / (this.dh.eh * 0.5));
          _0x3b5dc5().Ci.We(_0x4b8766, _0x2450eb);
        } else {
          _0x3efe2d += _0x492812 * 6;
        }
        return _0x3efe2d;
      };
      _0x3f9efd.prototype.hi = function (_0x54eeb4, _0x23a166) {
        var _0x2cc749 = _0x54eeb4.ca(_0x23a166);
        _0x23a166 += 2;
        var _0x500fd2 = this.dh.Fh[_0x2cc749];
        if (_0x500fd2 && _0x500fd2.wi) {
          _0x500fd2.kd(false);
        }
        _0x3b5dc5().Ci.Xe(_0x2cc749);
        return _0x23a166;
      };
      _0x3f9efd.prototype.bi = function (_0x271827, _0x2377e2) {
        var _0x3bf52e = new Game.Fi.li();
        _0x3bf52e.ae = _0x271827.da(_0x2377e2);
        _0x2377e2 += 4;
        _0x3bf52e.Gh = this.dh.hh.xg === Game.Ac.zc ? _0x271827.ba(_0x2377e2++) : Game.wg.Cg;
        _0x3bf52e.Gi = this.Ai(_0x271827.ba(_0x2377e2++), _0x271827.ba(_0x2377e2++), _0x271827.ba(_0x2377e2++));
        _0x3bf52e.Hh = _0x271827.ba(_0x2377e2++);
        var _0x1b2d71 = this.dh.Hi[_0x3bf52e.ae];
        if (_0x1b2d71 != null) {
          _0x1b2d71.si();
        }
        var _0x2632be = new Game.Fi(_0x3bf52e, _0x3b5dc5().og.af.ng);
        _0x2632be.Ii(this.Ji(_0x3bf52e.ae), this.Ki(_0x3bf52e.ae), true);
        this.dh.Hi[_0x3bf52e.ae] = _0x2632be;
        return _0x2377e2;
      };
      _0x3f9efd.prototype.ci = function (_0x539eb4, _0x3369a5) {
        var _0x52ed83 = _0x539eb4.da(_0x3369a5);
        _0x3369a5 += 4;
        var _0x3e342c = this.dh.Hi[_0x52ed83];
        if (_0x3e342c) {
          _0x3e342c.Li = 0;
          _0x3e342c.Mi = _0x3e342c.Mi * 1.5;
          _0x3e342c.Ni = true;
        }
        return _0x3369a5;
      };
      _0x3f9efd.prototype.di = function (_0x270e7b, _0xc7c1f2) {
        var _0x28837f = _0x270e7b.da(_0xc7c1f2);
        _0xc7c1f2 += 4;
        var _0x14e6f3 = _0x270e7b.ca(_0xc7c1f2);
        _0xc7c1f2 += 2;
        var _0x199be = this.dh.Hi[_0x28837f];
        if (_0x199be) {
          _0x199be.Li = 0;
          _0x199be.Mi = _0x199be.Mi * 0.1;
          _0x199be.Ni = true;
          var _0x1a0056 = this.vi(_0x14e6f3);
          if (_0x1a0056 && _0x1a0056.xi) {
            this.dh.hh.yg;
            var _0x3f18c6 = _0x1a0056.fh();
            _0x199be.Ii(_0x3f18c6.x, _0x3f18c6.y, false);
          }
        }
        return _0xc7c1f2;
      };
      var _0x144e20 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      _0x3f9efd.prototype.Vh = function (_0x66bddd) {
        var _0x21b136 = _0x3b5dc5().Lc.Zb().Fb;
        var _0x2b6ada = _0x21b136.getImageData(0, 0, 80, 80);
        var _0x5f53d4 = _0x144e20[0];
        var _0x116ae7 = 80 - _0x5f53d4;
        var _0x146014 = 0;
        for (var _0x5fc4a = 0; _0x5fc4a < 628; _0x5fc4a++) {
          var _0x2fc050 = _0x66bddd.ba(1 + _0x5fc4a);
          for (var _0x53fefd = 0; _0x53fefd < 8; _0x53fefd++) {
            var _0xa0b99e = (_0x2fc050 >> _0x53fefd & 1) != 0;
            var _0x5ed89a = (_0x5f53d4 + _0x146014 * 80) * 4;
            if (_0xa0b99e) {
              _0x2b6ada.data[_0x5ed89a] = 255;
              _0x2b6ada.data[_0x5ed89a + 1] = 255;
              _0x2b6ada.data[_0x5ed89a + 2] = 255;
              _0x2b6ada.data[_0x5ed89a + 3] = 255;
            } else {
              _0x2b6ada.data[_0x5ed89a + 3] = 0;
            }
            if (++_0x5f53d4 >= _0x116ae7 && ++_0x146014 < 80) {
              _0x5f53d4 = _0x144e20[_0x146014];
              _0x116ae7 = 80 - _0x5f53d4;
            }
          }
        }
        _0x21b136.putImageData(_0x2b6ada, 0, 0);
        var _0x59e8fc = _0x3b5dc5().og.af.ng.Tg.qh;
        _0x59e8fc.texture = _0x3b5dc5().Lc.Zb().oa;
        _0x59e8fc.texture.update();
      };
      _0x3f9efd.prototype.Xh = function (_0x52c7d5, _0x505744) {
        _0x52c7d5.da(_0x505744);
        _0x505744 += 4;
      };
      _0x3f9efd.prototype.Yh = function (_0x4b3cec, _0x5a7f12) {
        this.dh.Oi();
      };
      _0x3f9efd.prototype.Wh = function (_0xd4881c, _0x2e80db) {
        this.dh.yh = _0xd4881c.ca(_0x2e80db);
        _0x2e80db += 2;
        this.dh.Ih = _0xd4881c.ca(_0x2e80db);
        _0x2e80db += 2;
        var _0x37dd65 = new Game.Pi();
        _0x37dd65.Ch = [];
        for (var _0x34cee0 = _0xd4881c.ba(_0x2e80db++), _0x38943c = 0; _0x38943c < _0x34cee0; _0x38943c++) {
          var _0x3d6f77 = _0xd4881c.ca(_0x2e80db);
          _0x2e80db += 2;
          var _0x445fe2 = _0xd4881c.ea(_0x2e80db);
          _0x2e80db += 4;
          _0x37dd65.Ch.push(Game.Pi.Qi(_0x3d6f77, _0x445fe2));
        }
        _0x37dd65.zh = [];
        if (this.dh.hh.xg === Game.Ac.zc) {
          for (var _0x2d52e0 = _0xd4881c.ba(_0x2e80db++), _0x370b16 = 0; _0x370b16 < _0x2d52e0; _0x370b16++) {
            var _0x256416 = _0xd4881c.ba(_0x2e80db);
            _0x2e80db += 1;
            var _0xdca93f = _0xd4881c.ea(_0x2e80db);
            _0x2e80db += 4;
            _0x37dd65.zh.push(Game.Pi.Ri(_0x256416, _0xdca93f));
          }
        }
        _0x3b5dc5().og.af.ng.Vg.Uf(_0x37dd65);
      };
      _0x3f9efd.prototype.vi = function (_0x4c9250) {
        if (_0x4c9250 === this.dh.hh.yg) {
          return this.dh.ch;
        } else {
          return this.dh.Fh[_0x4c9250];
        }
      };
      _0x3f9efd.prototype.Ai = function (_0x3d6a5f, _0xecb906, _0x494d4f) {
        return (((_0x494d4f & 255 | _0xecb906 << 8 & 65280 | _0x3d6a5f << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      _0x3f9efd.prototype.Ji = function (_0x3890f4) {
        return ((_0x3890f4 & 65535) / 32768 - 1) * this.dh.hh.Dg();
      };
      _0x3f9efd.prototype.Ki = function (_0x3d48c1) {
        return ((_0x3d48c1 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
      };
      _0x3f9efd.prototype._h = function (_0x43f5cf, _0x2dfaa3) {
        var _0x2c18db = _0x43f5cf.ba(_0x2dfaa3);
        if ((_0x2c18db & 128) == 0) {
          return _0x2c18db;
        }
        var _0x120ad7 = _0x43f5cf.ba(_0x2dfaa3 + 1);
        if ((_0x120ad7 & 128) == 0) {
          return _0x120ad7 | _0x2c18db << 7 & 16256;
        }
        var _0x3b5eae = _0x43f5cf.ba(_0x2dfaa3 + 2);
        if ((_0x3b5eae & 128) == 0) {
          return _0x3b5eae | _0x120ad7 << 7 & 16256 | _0x2c18db << 14 & 2080768;
        }
        var _0x138021 = _0x43f5cf.ba(_0x2dfaa3 + 3);
        if ((_0x138021 & 128) == 0) {
          return _0x138021 | _0x3b5eae << 7 & 16256 | _0x120ad7 << 14 & 2080768 | _0x2c18db << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      _0x3f9efd.prototype.ai = function (_0x658d2c) {
        if (_0x658d2c < 128) {
          return 1;
        } else if (_0x658d2c < 16384) {
          return 2;
        } else if (_0x658d2c < 2097152) {
          return 3;
        } else if (_0x658d2c < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return _0x3f9efd;
    }();
    Game.Si = function () {
      function _0x1d92f9(_0x5a865f) {
        this.Ti = _0x5a865f;
      }
      _0x1d92f9.Ui = function () {
        return new Game.Si(null);
      };
      _0x1d92f9.Vi = function (_0x4f12e7) {
        return new Game.Si(_0x4f12e7);
      };
      _0x1d92f9.prototype.bc = function () {
        return this.Ti;
      };
      _0x1d92f9.prototype.Wi = function () {
        return this.Ti != null;
      };
      _0x1d92f9.prototype.Xi = function (_0x575b6e) {
        if (this.Ti != null) {
          _0x575b6e(this.Ti);
        }
      };
      return _0x1d92f9;
    }();
    Game.Fi = function () {
      function _0x18e51d(_0xfc9d42, _0x54f61b) {
        this.Eh = _0xfc9d42;
        this.Yi = _0xfc9d42.Hh >= 80;
        this.Zi = 0;
        this.$i = 0;
        this._i = 0;
        this.aj = 0;
        this.Mi = this.Yi ? 1 : _0xfc9d42.Gi;
        this.Li = 1;
        this.Ni = false;
        this.bj = 0;
        this.cj = 0;
        this.dj = 1;
        this.ej = Math.PI * 2 * Math.random();
        this.fj = new Game.gj();
        this.fj.yc(_0x3b5dc5().dh.hh.xg, this.Eh.Gh === Game.wg.Cg ? null : _0x3b5dc5().Lc.Ub().jb(this.Eh.Gh), _0x3b5dc5().Lc.Ub().ob(this.Eh.Hh));
        _0x54f61b.mh(_0xfc9d42.ae, this.fj);
      }
      _0x18e51d.prototype.si = function () {
        this.fj.nh.Dc.Rc();
        this.fj.nh.Cc.Rc();
      };
      _0x18e51d.prototype.Ii = function (_0x3ca50c, _0x3dd74a, _0x367ad4) {
        this.Zi = _0x3ca50c;
        this.$i = _0x3dd74a;
        if (_0x367ad4) {
          this._i = _0x3ca50c;
          this.aj = _0x3dd74a;
        }
      };
      _0x18e51d.prototype.hj = function (_0xeb0f8b, _0x2cdf1f) {
        var _0x4d1f5e = Math.min(0.5, this.Mi * 1);
        var _0x37c5e3 = Math.min(2.5, this.Mi * 1.5);
        this.bj = getRandomElement.Q(this.bj, _0x4d1f5e, _0x2cdf1f, 0.0025);
        this.cj = getRandomElement.Q(this.cj, _0x37c5e3, _0x2cdf1f, 0.0025);
        this.dj = getRandomElement.Q(this.dj, this.Li, _0x2cdf1f, 0.0025);
      };
      _0x18e51d.prototype.ij = function (_0xebf037, _0x32a73b, _0x2af9b6) {
        this._i = getRandomElement.Q(this._i, this.Zi, _0x32a73b, gameSettings.eat_animation);
        this.aj = getRandomElement.Q(this.aj, this.$i, _0x32a73b, 0.0025);
        this.fj.Uf(this, _0xebf037, _0x32a73b, _0x2af9b6);
      };
      _0x18e51d.li = function () {
        function _0x4a0d69() {
          this.ae = 0;
          this.Gh = Game.wg.Cg;
          this.Gi = 0;
          this.Hh = 0;
        }
        return _0x4a0d69;
      }();
      return _0x18e51d;
    }();
    Game.gj = function () {
      function _0x3536d7() {
        this.nh = new _0x29edbd(new Game.sc(), new Game.sc());
        this.nh.Dc.xc.blendMode = pixiElements.v.z;
        this.nh.Dc.xc.zIndex = _0x57bd62;
        this.nh.Cc.xc.zIndex = _0x2c89c2;
      }
      var _0x2c89c2 = 500;
      var _0x57bd62 = 100;
      _0x3536d7.prototype.yc = function (_0x390d54, _0x4adbfe, _0x577246) {
        var _0x4c6ccb = _0x577246.ub;
        if (_0x4c6ccb != null) {
          this.nh.Cc.Bc(_0x4c6ccb);
        }
        var _0x218e0f = _0x390d54 === Game.Ac.zc && _0x4adbfe != null ? _0x4adbfe.sb.vb : _0x577246.vb;
        if (_0x218e0f != null) {
          this.nh.Dc.Bc(_0x218e0f);
        }
      };
      _0x3536d7.prototype.Uf = function (_0x5c6b3e, _0x1dfd5b, _0x41b09c, _0x3b7eea) {
        if (!_0x3b7eea(_0x5c6b3e._i, _0x5c6b3e.aj)) {
          this.nh.Uc();
          return;
        }
        var _0x75965b = _0x5c6b3e.cj * (1 + Math.cos(_0x5c6b3e.ej + _0x1dfd5b / 200) * 0.3);
        if (_0x5c6b3e.Yi) {
          this.nh.Sc(_0x5c6b3e._i, _0x5c6b3e.aj, gameSettings.PortionSize * _0x5c6b3e.bj, _0x5c6b3e.dj * 1, gameSettings.PortionAura * _0x75965b, gameSettings.PortionTransparent * _0x5c6b3e.dj);
        } else {
          this.nh.Sc(_0x5c6b3e._i, _0x5c6b3e.aj, gameSettings.FoodSize * _0x5c6b3e.bj, _0x5c6b3e.dj * 1, gameSettings.FoodShadow * _0x75965b, gameSettings.FoodTransparent * _0x5c6b3e.dj);
        }
      };
      var _0x29edbd = function () {
        function _0xbaea63(_0x5a491d, _0x43fae4) {
          this.Cc = _0x5a491d;
          this.Dc = _0x43fae4;
        }
        _0xbaea63.prototype.Sc = function (_0x3c7b6f, _0x74b8de, _0x36adcb, _0x9dd55b, _0x31174c, _0x7cfa72) {
          this.Cc.kd(true);
          this.Cc.ld(_0x3c7b6f, _0x74b8de);
          this.Cc.Tc(_0x36adcb);
          this.Cc.jj(_0x9dd55b);
          this.Dc.kd(true);
          this.Dc.ld(_0x3c7b6f, _0x74b8de);
          this.Dc.Tc(_0x31174c);
          this.Dc.jj(_0x7cfa72);
        };
        _0xbaea63.prototype.Uc = function () {
          this.Cc.kd(false);
          this.Dc.kd(false);
        };
        return _0xbaea63;
      }();
      return _0x3536d7;
    }();
    Game.kj = function () {
      function _0x437959() {
        this.lj = 0;
        this.mj = 0;
        this.nj = 0;
        this.oj = 0;
        this.pj = 0;
        this.qj = [];
      }
      function _0x2cdb6c(_0x2f9200, _0x16e155) {
        for (var _0x5c770d = 0; _0x5c770d < _0x2f9200.length; _0x5c770d++) {
          if (_0x2f9200[_0x5c770d].id == _0x16e155) {
            return _0x5c770d;
          }
        }
        return -1;
      }
      _0x437959.prototype.ha = function () {};
      _0x437959.prototype.rj = function (_0x545865) {
        if (!gameSettings.loading) {
          gameSettings.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(gameSettings));
        }
        switch (_0x545865) {
          case Game.tj.sj:
            return this.lj;
          case Game.tj.uj:
            return this.mj;
          case Game.tj.vj:
            return this.nj;
          case Game.tj.wj:
            return this.oj;
          case Game.tj.xj:
            return this.pj;
        }
        return 0;
      };
      _0x437959.prototype.yj = function () {
        return new Game.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
      };
      _0x437959.prototype.zj = function (_0x1498ef) {
        this.qj.push(_0x1498ef);
        this.Aj();
      };
      _0x437959.prototype.Bj = function () {
        if (!_0x3b5dc5().Lc.Wb()) {
          return getRandomElement.W([32, 33, 34, 35]);
        }
        var _0x58d125 = [];
        for (var _0x4ebb93 = _0x3b5dc5().Lc.Xb().skinArrayDict, _0x5d861e = 0; _0x5d861e < _0x4ebb93.length; _0x5d861e++) {
          var _0x56ea84 = _0x4ebb93[_0x5d861e];
          if (this.Cj(_0x56ea84.id, Game.tj.sj)) {
            _0x58d125.push(_0x56ea84);
          }
        }
        if (_0x58d125.length === 0) {
          return 0;
        } else {
          return _0x58d125[parseInt(_0x58d125.length * Math.random())].id;
        }
      };
      _0x437959.prototype.Dj = function () {
        if (_0x3b5dc5().Lc.Wb()) {
          var _0x1fce6e = _0x3b5dc5().Lc.Xb().skinArrayDict;
          var _0x456835 = _0x2cdb6c(_0x1fce6e, this.lj);
          if (!(_0x456835 < 0)) {
            for (var _0x1a4fc7 = _0x456835 + 1; _0x1a4fc7 < _0x1fce6e.length; _0x1a4fc7++) {
              if (this.Cj(_0x1fce6e[_0x1a4fc7].id, Game.tj.sj)) {
                this.lj = _0x1fce6e[_0x1a4fc7].id;
                this.Aj();
                return;
              }
            }
            for (var _0x2a9f2f = 0; _0x2a9f2f < _0x456835; _0x2a9f2f++) {
              if (this.Cj(_0x1fce6e[_0x2a9f2f].id, Game.tj.sj)) {
                this.lj = _0x1fce6e[_0x2a9f2f].id;
                this.Aj();
                return;
              }
            }
          }
        }
      };
      _0x437959.prototype.Ej = function () {
        if (_0x3b5dc5().Lc.Wb) {
          var _0x4163ca = _0x3b5dc5().Lc.Xb().skinArrayDict;
          var _0x48bf9d = _0x2cdb6c(_0x4163ca, this.lj);
          if (!(_0x48bf9d < 0)) {
            for (var _0x3d51ca = _0x48bf9d - 1; _0x3d51ca >= 0; _0x3d51ca--) {
              if (this.Cj(_0x4163ca[_0x3d51ca].id, Game.tj.sj)) {
                this.lj = _0x4163ca[_0x3d51ca].id;
                this.Aj();
                return;
              }
            }
            for (var _0x1e7c08 = _0x4163ca.length - 1; _0x1e7c08 > _0x48bf9d; _0x1e7c08--) {
              if (this.Cj(_0x4163ca[_0x1e7c08].id, Game.tj.sj)) {
                this.lj = _0x4163ca[_0x1e7c08].id;
                this.Aj();
                return;
              }
            }
          }
        }
      };
      _0x437959.prototype.Fj = function (_0xdda0c6, _0x4eefaf) {
        if (!_0x3b5dc5().Lc.Wb() || this.Cj(_0xdda0c6, _0x4eefaf)) {
          switch (_0x4eefaf) {
            case Game.tj.sj:
              if (this.lj !== _0xdda0c6) {
                this.lj = _0xdda0c6;
                this.Aj();
              }
              return;
            case Game.tj.uj:
              if (this.mj !== _0xdda0c6) {
                this.mj = _0xdda0c6;
                this.Aj();
              }
              return;
            case Game.tj.vj:
              if (this.nj !== _0xdda0c6) {
                this.nj = _0xdda0c6;
                this.Aj();
              }
              return;
            case Game.tj.wj:
              if (this.oj !== _0xdda0c6) {
                this.oj = _0xdda0c6;
                this.Aj();
              }
              return;
            case Game.tj.xj:
              if (this.pj !== _0xdda0c6) {
                this.pj = _0xdda0c6;
                this.Aj();
              }
              return;
          }
        }
      };
      _0x437959.prototype.Cj = function (_0xf59878, _0x5c3309) {
        var _0x4265a3 = this.Gj(_0xf59878, _0x5c3309);
        return _0x4265a3 != null && (_0x3b5dc5().Ij.Hj() ? _0x4265a3.Jj() === 0 && !_0x4265a3.Kj() || _0x3b5dc5().Ij.Lj(_0xf59878, _0x5c3309) : _0x4265a3.Mj());
      };
      _0x437959.prototype.Gj = function (_0x3d46ae, _0x1d36a2) {
        if (!_0x3b5dc5().Lc.Wb()) {
          return null;
        }
        var _0x46d2be = _0x3b5dc5().Lc.Xb();
        if (_0x1d36a2 === Game.tj.sj) {
          var _0x3f82b5 = _0x2cdb6c(_0x46d2be.skinArrayDict, _0x3d46ae);
          if (_0x3f82b5 < 0) {
            return null;
          } else {
            return Game.Oj.Nj(_0x46d2be.skinArrayDict[_0x3f82b5]);
          }
        }
        var _0x543ca5 = null;
        switch (_0x1d36a2) {
          case Game.tj.uj:
            _0x543ca5 = _0x46d2be.eyesDict[_0x3d46ae];
            break;
          case Game.tj.vj:
            _0x543ca5 = _0x46d2be.mouthDict[_0x3d46ae];
            break;
          case Game.tj.wj:
            _0x543ca5 = _0x46d2be.hatDict[_0x3d46ae];
            break;
          case Game.tj.xj:
            _0x543ca5 = _0x46d2be.glassesDict[_0x3d46ae];
        }
        if (_0x543ca5 != null) {
          return Game.Oj.Pj(_0x543ca5);
        } else {
          return null;
        }
      };
      _0x437959.prototype.Aj = function () {
        for (var _0x48da3d = 0; _0x48da3d < this.qj.length; _0x48da3d++) {
          this.qj[_0x48da3d]();
        }
      };
      return _0x437959;
    }();
    Game.tj = function () {
      function _0x57ac4f() {}
      _0x57ac4f.sj = "SKIN";
      _0x57ac4f.uj = "EYES";
      _0x57ac4f.vj = "MOUTH";
      _0x57ac4f.xj = "GLASSES";
      _0x57ac4f.wj = "HAT";
      return _0x57ac4f;
    }();
    Game.Qj = function () {
      function _0x227068() {
        this.Bf = new pixiElements.m(pixiElements.l.from("/images/bg-obstacle.png"));
        var _0x5ead47 = pixiElements.l.from(getRandomElement.a.f);
        var _0x522ba7 = new pixiElements.m(_0x5ead47, new pixiElements.q(0, 0, 256, 256));
        this.Cf = new Array(36);
        for (var _0x28148f = 0; _0x28148f < this.Cf.length; _0x28148f++) {
          this.Cf[_0x28148f] = _0x522ba7;
        }
        this._g = new pixiElements.m(function () {
          var _0x11da02 = pixiElements.l.from("/images/bg-pattern-ukraine2-pow2-ARENA.png");
          _0x11da02.wrapMode = pixiElements.C.D;
          return _0x11da02;
        }());
        this.ah = new pixiElements.m(function () {
          var _0x476baf = pixiElements.l.from("/images/bg-pattern-ukraine2-pow2-TEAM2.png");
          _0x476baf.wrapMode = pixiElements.C.D;
          return _0x476baf;
        }());
        this.Zg = new pixiElements.m(pixiElements.l.from("/images/lens.png"));
        this.rf = new pixiElements.m(function () {
          var _0x4d947f = pixiElements.l.from(getRandomElement.a.g);
          _0x4d947f.wrapMode = pixiElements.C.D;
          return _0x4d947f;
        }());
        this.Db = function () {
          var _0xf7778a = window.document.createElement("canvas");
          _0xf7778a.width = 80;
          _0xf7778a.height = 80;
          return {
            Eb: _0xf7778a,
            Fb: _0xf7778a.getContext("2d"),
            oa: new pixiElements.m(pixiElements.l.from(_0xf7778a))
          };
        }();
        this.Ae = {};
        this.we = {};
        this.Rj = [];
        this.Sj = null;
      }
      _0x227068.prototype.ha = function (_0x2ccdab) {
        function _0x19f9cf() {
          if (--_0xb443e8 == 0) {
            _0x2ccdab();
          }
        }
        var _0xb443e8 = 4;
        this.Ae = {};
        _0x19f9cf();
        this.we = {};
        _0x19f9cf();
        this.Rj = [];
        _0x19f9cf();
        this.Sj = null;
        _0x19f9cf();
      };
      return _0x227068;
    }();
    Game.Tj = function () {
      function _0x4ab892() {
        this.Uj = null;
        this.af = new Game.Vj();
        this._e = new Game.Wj();
        this.Xj = new Game.Yj();
        this.Zj = new Game.$j();
        this._j = new Game.ak();
        this.bk = new Game.ck();
        this.dk = new Game.ek();
        this.fk = new Game.gk();
        this.$h = new Game.hk();
        this.ik = new Game.jk();
        this.kk = new Game.lk();
        this.mk = new Game.nk();
        this.ok = new Game.pk();
        this.qk = new Game.rk();
        this.ie = new Game.sk();
        this.tk = new Game.uk();
        this.vk = new Game.wk();
        this.xk = new Game.yk();
        this.zk = [];
      }
      function _0x15875d(_0x3b9a0c, _0x5da0d9) {
        if (_0x5da0d9 !== 0) {
          var _0x46497c = _0x3b9a0c[_0x5da0d9];
          getRandomElement.T(_0x3b9a0c, 0, 1, _0x5da0d9);
          _0x3b9a0c[0] = _0x46497c;
        }
      }
      function _0x432a50(_0x1b7d1a, _0xcbed5c) {
        if (_0xcbed5c !== _0x1b7d1a.length + 1) {
          var _0x193002 = _0x1b7d1a[_0xcbed5c];
          getRandomElement.T(_0x1b7d1a, _0xcbed5c + 1, _0xcbed5c, _0x1b7d1a.length - _0xcbed5c - 1);
          _0x1b7d1a[_0x1b7d1a.length - 1] = _0x193002;
        }
      }
      function _0x3202ae(_0x193d55, _0xfc4248) {
        for (var _0x1dcef3 = 0; _0x1dcef3 < _0x193d55.length; _0x1dcef3++) {
          if (_0x193d55[_0x1dcef3] === _0xfc4248) {
            return _0x1dcef3;
          }
        }
        return -1;
      }
      _0x4ab892.prototype.ha = function () {
        this.Uj = new Game.df(Game.kf.jf);
        this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
        for (var _0x524c2d = 0; _0x524c2d < this.zk.length; _0x524c2d++) {
          this.zk[_0x524c2d].ha();
        }
      };
      _0x4ab892.prototype.lh = function (_0x2d6a84, _0x46ec2d) {
        for (var _0x88d449 = this.zk.length - 1; _0x88d449 >= 0; _0x88d449--) {
          this.zk[_0x88d449].Nf(_0x2d6a84, _0x46ec2d);
        }
        if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
          this.Uj.Nf(_0x2d6a84, _0x46ec2d);
        }
      };
      _0x4ab892.prototype.Jf = function () {
        for (var _0x3a2556 = this.zk.length - 1; _0x3a2556 >= 0; _0x3a2556--) {
          this.zk[_0x3a2556].Jf();
        }
        if (this.Uj != null) {
          this.Uj.Jf();
        }
      };
      _0x4ab892.prototype.Ak = function (_0x3d0a11) {
        var _0x233c30 = _0x3202ae(this.zk, _0x3d0a11);
        if (!(_0x233c30 < 0)) {
          this.zk[0].Bk();
          _0x15875d(this.zk, _0x233c30);
          this.Ck();
        }
      };
      _0x4ab892.prototype.Dk = function () {
        this.zk[0].Bk();
        do {
          _0x432a50(this.zk, 0);
        } while (this.zk[0].nd !== Game.Fk.Ek);
        this.Ck();
      };
      _0x4ab892.prototype.Ck = function () {
        var _0x235cc3 = this.zk[0];
        _0x235cc3.Gk();
        _0x235cc3.Hk();
        this.Ik();
      };
      _0x4ab892.prototype.Jk = function () {
        return this.zk.length !== 0 && this.zk[0].nd === Game.Fk.Ek && this.qk.Kk();
      };
      _0x4ab892.prototype.Lk = function () {
        if (this.zk.length === 0) {
          return null;
        } else {
          return this.zk[0];
        }
      };
      _0x4ab892.prototype.Ik = function () {
        if (this.Jk()) {
          this.Ak(this.qk);
        }
      };
      return _0x4ab892;
    }();
    Game.Pi = function () {
      function _0x4c2801() {
        this.Ch = [];
        this.zh = [];
      }
      _0x4c2801.Qi = function (_0x5d7310, _0x5a19ea) {
        return {
          Dh: _0x5d7310,
          Bh: _0x5a19ea
        };
      };
      _0x4c2801.Ri = function (_0x363eff, _0x144409) {
        return {
          Ah: _0x363eff,
          Bh: _0x144409
        };
      };
      return _0x4c2801;
    }();
    Game.Mk = function () {
      function _0x11dd4c() {
        this.Nk = [];
        this.Ok = [];
        this.Pk = false;
        this.Qk = _0xe687a3;
        this.Rk = {};
      }
      var _0xe687a3 = "guest";
      _0x11dd4c.Sk = new (function () {
        function _0x5c5d52() {}
        _0x5c5d52.Tk = function () {
          function _0x2b9dcc(_0x497045) {
            this.Uk = _0x497045;
          }
          return _0x2b9dcc;
        }();
        _0x5c5d52.prototype.Vk = function () {
          return typeof FB != "undefined";
        };
        _0x5c5d52.prototype.Wk = function (_0x36f11b, _0x54c37a, _0x3797a9) {
          var _0xbab16a = "https://graph.facebook.com/me?access_token=" + _0x36f11b;
          $.get(_0xbab16a).fail(function () {
            _0x54c37a();
          }).done(function () {
            _0x3797a9();
          });
        };
        _0x5c5d52.prototype.Xk = function (_0x581a95, _0x46be52) {
          if (!this.Vk()) {
            _0x581a95();
            return;
          }
          this.Yk(function () {
            FB.login(function (_0xd09bc8) {
              if (_0xd09bc8.status !== "connected") {
                _0x581a95();
                return;
              }
              var _0x18bff4 = _0xd09bc8.authResponse.accessToken;
              _0x46be52(new _0x5c5d52.Tk(_0x18bff4));
            });
          }, function (_0x1b36cf) {
            _0x46be52(_0x1b36cf);
          });
        };
        _0x5c5d52.prototype.Yk = function (_0x320539, _0x1435e1) {
          var _0x1421e6 = this;
          if (!this.Vk()) {
            _0x320539();
            return;
          }
          FB.getLoginStatus(function (_0x5573d8) {
            if (_0x5573d8.status !== "connected") {
              _0x320539();
              return;
            }
            var _0x2643d3 = _0x5573d8.authResponse.accessToken;
            _0x1421e6.Wk(_0x2643d3, function () {
              _0x320539();
            }, function () {
              _0x1435e1(new _0x5c5d52.Tk(_0x2643d3));
            });
          });
        };
        _0x5c5d52.prototype.Zk = function () {
          if (this.Vk()) {
            FB.logout();
          }
        };
        return _0x5c5d52;
      }())();
      _0x11dd4c.$k = new (function () {
        function _0xfeb58() {}
        _0xfeb58._k = function () {
          function _0x54599d(_0x53575a, _0x3640db) {
            this.Uk = _0x53575a;
            this.al = _0x3640db;
          }
          return _0x54599d;
        }();
        _0xfeb58.prototype.Vk = function () {
          return GoogleAuth !== undefined;
        };
        _0xfeb58.prototype.Xk = function (_0x81493f, _0x22bdc4) {
          if (GoogleAuth === undefined) {
            _0x81493f();
            return;
          }
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x4bb585 = GoogleAuth.currentUser.get();
              var _0x1d91eb = _0x4bb585.getAuthResponse().id_token;
              var _0x2261fb = new Date().getTime() + _0x4bb585.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x2261fb) {
                _0x22bdc4(new _0xfeb58._k(_0x1d91eb, _0x2261fb));
                return;
              }
            }
            GoogleAuth.signIn().then(function (_0x32a275) {
              if (_0x32a275.error !== undefined) {
                _0x81493f();
                return;
              }
              if (!_0x32a275.isSignedIn()) {
                _0x81493f();
                return;
              }
              var _0x244811 = _0x32a275.getAuthResponse().id_token;
              var _0x152e54 = new Date().getTime() + _0x32a275.getAuthResponse().expires_in * 1000;
              _0x22bdc4(new _0xfeb58._k(_0x244811, _0x152e54));
            });
          });
        };
        _0xfeb58.prototype.Yk = function (_0x1417d8, _0x61812e) {
          if (GoogleAuth === undefined) {
            _0x1417d8();
            return;
          }
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x53e5ee = GoogleAuth.currentUser.get();
              var _0x121ff5 = _0x53e5ee.getAuthResponse().id_token;
              var _0x545e00 = new Date().getTime() + _0x53e5ee.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x545e00) {
                _0x61812e(new _0xfeb58._k(_0x121ff5, _0x545e00));
                return;
              }
            }
            _0x1417d8();
          });
        };
        _0xfeb58.prototype.Zk = function () {
          if (GoogleAuth !== undefined) {
            GoogleAuth.signOut();
          }
        };
        return _0xfeb58;
      }())();
      _0x11dd4c.prototype.ha = function () {
        this.bl();
      };
      _0x11dd4c.prototype.cl = function () {
        if (this.Pk) {
          return this.Rk.userId;
        } else {
          return "";
        }
      };
      _0x11dd4c.prototype.dl = function () {
        if (this.Pk) {
          return this.Rk.username;
        } else {
          return "";
        }
      };
      _0x11dd4c.prototype.el = function () {
        if (this.Pk) {
          return this.Rk.nickname;
        } else {
          return "";
        }
      };
      _0x11dd4c.prototype.fl = function () {
        if (this.Pk) {
          return this.Rk.avatarUrl;
        } else {
          return GUEST_AVATAR_URL;
        }
      };
      _0x11dd4c.prototype.gl = function () {
        return this.Pk && this.Rk.isBuyer;
      };
      _0x11dd4c.prototype.hl = function () {
        return this.Pk && this.Rk.isConsentGiven;
      };
      _0x11dd4c.prototype.il = function () {
        if (this.Pk) {
          return this.Rk.coins;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.jl = function () {
        if (this.Pk) {
          return this.Rk.level;
        } else {
          return 1;
        }
      };
      _0x11dd4c.prototype.kl = function () {
        if (this.Pk) {
          return this.Rk.expOnLevel;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.ll = function () {
        if (this.Pk) {
          return this.Rk.expToNext;
        } else {
          return 50;
        }
      };
      _0x11dd4c.prototype.ml = function () {
        if (this.Pk) {
          return this.Rk.skinId;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.nl = function () {
        if (this.Pk) {
          return this.Rk.eyesId;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.ol = function () {
        if (this.Pk) {
          return this.Rk.mouthId;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.pl = function () {
        if (this.Pk) {
          return this.Rk.glassesId;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.ql = function () {
        if (this.Pk) {
          return this.Rk.hatId;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.rl = function () {
        if (this.Pk) {
          return this.Rk.highScore;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.sl = function () {
        if (this.Pk) {
          return this.Rk.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.tl = function () {
        if (this.Pk) {
          return this.Rk.kills;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.ul = function () {
        if (this.Pk) {
          return this.Rk.headShots;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.vl = function () {
        if (this.Pk) {
          return this.Rk.sessionsPlayed;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.wl = function () {
        if (this.Pk) {
          return this.Rk.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      _0x11dd4c.prototype.xl = function () {
        if (this.Pk) {
          return this.Rk.regDate;
        } else {
          return {};
        }
      };
      _0x11dd4c.prototype.yl = function (_0x4d1fdd) {
        this.Nk.push(_0x4d1fdd);
        _0x4d1fdd();
      };
      _0x11dd4c.prototype.zl = function (_0x5d4674) {
        this.Ok.push(_0x5d4674);
        _0x5d4674();
      };
      _0x11dd4c.prototype.Lj = function (_0x21dd1d, _0x1839ff) {
        var _0x25eb44 = this.Rk.propertyList;
        if (_0x25eb44 == null) {
          return false;
        }
        var _0x3ae274 = _0x21dd1d.toString();
        for (var _0x4b3bf4 = 0; _0x4b3bf4 < _0x25eb44.length; _0x4b3bf4++) {
          var _0x4c40f1 = _0x25eb44[_0x4b3bf4];
          if (_0x4c40f1.id === _0x3ae274 && _0x4c40f1.type === _0x1839ff) {
            return true;
          }
        }
        return false;
      };
      _0x11dd4c.prototype.Hj = function () {
        return this.Pk;
      };
      _0x11dd4c.prototype.Al = function () {
        return this.Qk;
      };
      _0x11dd4c.prototype.Bl = function (_0x493d38) {
        var _0x15a481 = this;
        var _0x367a39 = this.cl();
        var _0x4b63e2 = this.il();
        var _0x456f84 = this.jl();
        this.Cl(function () {
          if (_0x493d38 != null) {
            _0x493d38();
          }
        }, function (_0x5a0556) {
          _0x3e1f1d(_0x5a0556.user_data);
          _0x15a481.Rk = _0x5a0556.user_data;
          _0x15a481.Dl();
          _0x15a481.si = _0x4b63e2;
          var _0x6dba8f = _0x15a481.cl();
          var _0x301635 = _0x15a481.il();
          var _0x436c87 = _0x15a481.jl();
          if (_0x367a39 === _0x6dba8f) {
            if (_0x436c87 > 1 && _0x436c87 !== _0x456f84) {
              _0x3b5dc5().og.qk.El(new Game.Fl(currLevel));
            }
            var _0x283dba = _0x301635 - _0x4b63e2;
            if (_0x283dba >= 20) {
              _0x3b5dc5().og.qk.El(new Game.Gl(_0x283dba));
            }
          }
          if (_0x493d38 != null) {
            _0x493d38();
          }
        });
      };
      _0x11dd4c.prototype.Cl = function (_0x4afab8, _0x515405) {
        var _0x6d121d = getRandomElement.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
        getRandomElement.Z(_0x6d121d, _0x4afab8, function (_0x2d5b12) {
          if (_0x2d5b12.code !== 1200) {
            _0x4afab8();
          } else {
            _0x515405(_0x2d5b12);
          }
        });
      };
      _0x11dd4c.prototype.Hl = function (_0x43d09d, _0x39ce12, _0x2f68de, _0x29473e) {
        var _0x440135 = getRandomElement.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x43d09d + "&type=" + _0x39ce12;
        getRandomElement.Z(_0x440135, function () {
          _0x2f68de();
        }, function (_0x14fea) {
          if (_0x14fea.code !== 1200) {
            _0x2f68de();
          } else {
            _0x29473e(_0x14fea);
          }
        });
      };
      _0x11dd4c.prototype.Il = function (_0x289b1f, _0x2674b6) {
        var _0xf662a = getRandomElement.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
        getRandomElement.Z(_0xf662a, _0x289b1f, function (_0x1ff480) {
          if (_0x1ff480.code !== 1200) {
            _0x289b1f();
          } else {
            _0x2674b6(_0x1ff480);
          }
        });
      };
      _0x11dd4c.prototype.Jl = function (_0x26115d) {
        var _0x41b32c = this;
        if (this.Pk) {
          this.Kl();
        }
        _0x11dd4c.Sk.Xk(function () {
          _0x26115d();
        }, function (_0x16dcee) {
          _0x41b32c.Ll("fb", _0x16dcee.Uk, _0x26115d);
        });
      };
      _0x11dd4c.prototype.Ml = function (_0x116b10) {
        var _0x60e327 = this;
        if (this.Pk) {
          this.Kl();
        }
        _0x11dd4c.$k.Xk(function () {
          _0x116b10();
        }, function (_0x3d02ed) {
          _0x60e327.Ll("gg", _0x3d02ed.Uk, _0x116b10);
        });
      };
      _0x11dd4c.prototype.Ll = function (_0x143251, _0x1654b9, _0x5e7607) {
        var _0x457065 = this;
        var _0x7a6902 = _0x143251 + "_" + _0x1654b9;
        var _0x9470d2 = getRandomElement.a.b + "/pub/wuid/" + _0x7a6902 + "/login";
        getRandomElement.Z(_0x9470d2, function () {
          _0x457065.Nl();
        }, function (_0x5d3384) {
          if (_0x5d3384.code !== 1200) {
            _0x457065.Nl();
          } else {
            registerUpdatePlayer(_0x5d3384.user_data);
            _0x3e1f1d(_0x5d3384.user_data);
            addHTML();
            gameSettings.FB_UserID = _0x5d3384.user_data.userId;
            for (var _0x139384 = 0; _0x139384 < clientes.clientesActivos.length; _0x139384++) {
              var _0x51840c = clientes.clientesActivos[_0x139384].cliente_NOMBRE;
              var _0x43a7a9 = clientes.clientesActivos[_0x139384].cliente_ID;
              var _0x40737a = clientes.clientesActivos[_0x139384].cliente_SUBSCRIPTION;
              gameSettings.expirationDate = clientes.clientesActivos[_0x139384].cliente_FECHA_EXPIRACION;
              console.log(_0x40737a);
              if (gameSettings.FB_UserID == 0) {} else if (gameSettings.FB_UserID == _0x43a7a9) {
                addHTML();
                ctx.myKeyZum.text = "";
                ctx.myKeyMovePrimary.text = "";
                ctx.myKeyMoveSecundary.text = "";
                if (_0x40737a && _0x40737a.id ? _0x40737a.id : "") {
                  if (_0x40737a.description == "5$") {
                    ctx.myKeyZum.text = "R";
                    ctx.myKeyMovePrimary.text = "S";
                    ctx.myKeyMoveSecundary.text = "A";
                    theoPay5PacketObjects.isPay5 = true;
                    theoPay3PacketObjects.visiblePowersAll = true;
                    gameSettings.SpeedAbility = true;
                    gameSettings.FlexAbility = true;
                    gameSettings.x2Ability = true;
                    gameSettings.x5Ability = true;
                    gameSettings.x10Ability = true;
                    gameSettings.ZoomAbility = true;
                    $("#extesnionVersionTime").replaceWith("<span class='settings_span'>expiration date: " + gameSettings.expirationDate + "</span>");
                    addPay5html();
                  } else if (_0x40737a.description == "3$") {
                    theoPay3PacketObjects.isPay3 = true;
                    ctx.myKeyZum.text = "";
                    ctx.myKeyMovePrimary.text = "S";
                    ctx.myKeyMoveSecundary.text = "A";
                    theoPay3PacketObjects.visiblePowersAll = true;
                    gameSettings.SpeedAbility = true;
                    gameSettings.FlexAbility = true;
                    gameSettings.x2Ability = true;
                    gameSettings.x5Ability = true;
                    gameSettings.x10Ability = true;
                    gameSettings.ZoomAbility = true;
                    $("#extesnionVersionTime").replaceWith("<span class='settings_span'>expiration date: " + gameSettings.expirationDate + "</span>");
                    addPay3html();
                  }
                }
              } else {}
            }
            _0x457065.Ol(_0x143251, _0x1654b9, _0x5d3384.user_data);
            if (_0x5e7607 != null) {
              _0x5e7607();
            }
          }
        });
      };
      _0x11dd4c.prototype.Kl = function () {
        try {
          this.Pl();
          this.Ql();
        } catch (_0x521d91) {}
        this.Rl();
      };
      _0x11dd4c.prototype.Sl = function () {
        if (this.Pk) {
          this.Il(function () {}, function (_0x15431c) {});
        }
      };
      _0x11dd4c.prototype.Nl = function () {
        _0x3b5dc5().og.Ak(_0x3b5dc5().og.tk);
      };
      _0x11dd4c.prototype.Ol = function (_0x386252, _0x27c97c, _0x2a187b) {
        var _0x330445 = this.Pk ? this.Rk.userId : "guest";
        this.Pk = true;
        this.Qk = _0x386252 + "_" + _0x27c97c;
        this.Rk = _0x2a187b;
        gameSettings.loading = false;
        Game.Vf.eg(Game.Vf.$f, _0x386252, 60);
        if (_0x330445 !== this.Rk.userId) {
          this.Tl();
        } else {
          this.Dl();
        }
      };
      _0x11dd4c.prototype.Rl = function () {
        var _0x281d2e = this.Pk ? this.Rk.userId : "guest";
        this.Pk = false;
        this.Qk = _0xe687a3;
        this.Rk = {};
        Game.Vf.eg(Game.Vf.$f, "", 60);
        if (_0x281d2e !== this.Rk.userId) {
          this.Tl();
        } else {
          this.Dl();
        }
      };
      _0x11dd4c.prototype.bl = function () {
        var _0x2b8b09 = Game.Vf.fg(Game.Vf.$f);
        var _0x2b6c90 = this;
        if (_0x2b8b09 === "fb") {
          var _0x26c973 = 1;
          (function _0xe167a1() {
            if (!_0x11dd4c.Sk.Vk() && _0x26c973++ < 5) {
              setTimeout(_0xe167a1, 1000);
              return;
            }
            _0x11dd4c.Sk.Yk(function () {}, function (_0x56b278) {
              _0x2b6c90.Ll("fb", _0x56b278.Uk);
            });
          })();
        } else if (_0x2b8b09 === "gg") {
          var _0x4d5df3 = 1;
          (function _0x440361() {
            if (!_0x11dd4c.$k.Vk() && _0x4d5df3++ < 5) {
              setTimeout(_0x440361, 1000);
              return;
            }
            _0x11dd4c.$k.Yk(function () {}, function (_0x1e22cb) {
              _0x2b6c90.Ll("gg", _0x1e22cb.Uk);
            });
          })();
        }
      };
      _0x11dd4c.prototype.Tl = function () {
        for (var _0x31f0cd = 0; _0x31f0cd < this.Nk.length; _0x31f0cd++) {
          this.Nk[_0x31f0cd]();
        }
        this.Dl();
      };
      _0x11dd4c.prototype.Dl = function () {
        for (var _0xefa394 = 0; _0xefa394 < this.Ok.length; _0xefa394++) {
          this.Ok[_0xefa394]();
        }
      };
      _0x11dd4c.prototype.Pl = function () {
        _0x11dd4c.Sk.Zk();
      };
      _0x11dd4c.prototype.Ql = function () {
        _0x11dd4c.$k.Zk();
      };
      return _0x11dd4c;
    }();
    Game.if = function () {
      function _0x5019e1(_0x256203, _0x274232, _0x54cb3c) {
        this.ef = _0x54cb3c;
        this.hd = false;
        this.nc = new pixiElements.k();
        this.nc.visible = false;
        this.Ul = new Array(_0x256203);
        for (var _0x1e37ca = 0; _0x1e37ca < this.Ul.length; _0x1e37ca++) {
          var _0x154463 = new Game.Vl(new Float32Array(_0x274232 * 3));
          _0x154463.Wl(_0x274232);
          this.Ul[_0x1e37ca] = _0x154463;
          this.nc.addChild(_0x154463.tf());
        }
        this.ff = 1;
        this.gf = 1;
        this.Jf();
      }
      _0x5019e1.prototype.tf = function () {
        return this.nc;
      };
      _0x5019e1.prototype.Kf = function (_0xb96341) {
        this.hd = _0xb96341;
        this.nc.visible = _0xb96341;
      };
      _0x5019e1.prototype.Jf = function () {
        this.ff = this.ef.width();
        this.gf = this.ef.height();
        var _0x377ae4 = this.gf / 30;
        for (var _0x585ad6 = 0; _0x585ad6 < this.Ul.length; _0x585ad6++) {
          this.Ul[_0x585ad6].Xl(_0x377ae4);
        }
      };
      _0x5019e1.prototype.Uf = function () {
        if (this.hd) {
          for (var _0x39aeb1 = 0; _0x39aeb1 < this.Ul.length; _0x39aeb1++) {
            this.Ul[_0x39aeb1].Uf(this.lf);
          }
        }
      };
      _0x5019e1.prototype.Yl = function () {
        return this.ff;
      };
      _0x5019e1.prototype.Zl = function () {
        return this.gf;
      };
      _0x5019e1.prototype.Qf = function (_0x1b02f3, _0x1101f6) {
        this.Ul[_0x1b02f3].$l(_0x1101f6);
      };
      _0x5019e1.prototype.Rf = function (_0x58abe3, _0x54f7b2) {
        this.Ul[_0x58abe3]._l(_0x54f7b2);
      };
      _0x5019e1.prototype.Sf = function (_0x9ed7ee, _0x358487, _0x24c190) {
        var _0x464c8d = this.Ul[_0x9ed7ee];
        for (var _0x533845 = _0x464c8d.am(), _0x34a132 = _0x464c8d.bm, _0x4f709f = 0; _0x4f709f < _0x533845; _0x4f709f++) {
          _0x34a132[_0x4f709f * 3] = _0x358487;
          _0x34a132[_0x4f709f * 3 + 1] = _0x24c190;
          _0x34a132[_0x4f709f * 3 + 2] = 0;
        }
      };
      _0x5019e1.prototype.Tf = function (_0x29cd9e, _0x40d0a9, _0x2a352b) {
        var _0x455f1c = this.Ul[_0x29cd9e];
        var _0x115eac = _0x455f1c.am();
        var _0x5a4ced = _0x455f1c.bm;
        var _0x34c6d8 = _0x455f1c.cm();
        var _0x11adca = _0x5a4ced[0];
        var _0x20eb0e = undefined;
        var _0x7010e1 = _0x5a4ced[1];
        var _0x20c363 = undefined;
        var _0x58f95d = _0x40d0a9 - _0x11adca;
        var _0x508815 = _0x2a352b - _0x7010e1;
        var _0x3c052c = Math.hypot(_0x58f95d, _0x508815);
        if (_0x3c052c > 0) {
          _0x5a4ced[0] = _0x40d0a9;
          _0x5a4ced[1] = _0x2a352b;
          _0x5a4ced[2] = Math.atan2(_0x508815, _0x58f95d);
          var _0x569e0d = _0x34c6d8 * 0.25 / (_0x34c6d8 * 0.25 + _0x3c052c);
          var _0x443bb9 = 1 - _0x569e0d * 2;
          for (var _0x3cdd99 = 1, _0x3fdf21 = _0x115eac; _0x3cdd99 < _0x3fdf21; _0x3cdd99++) {
            _0x20eb0e = _0x5a4ced[_0x3cdd99 * 3];
            _0x5a4ced[_0x3cdd99 * 3] = _0x5a4ced[_0x3cdd99 * 3 - 3] * _0x443bb9 + (_0x20eb0e + _0x11adca) * _0x569e0d;
            _0x11adca = _0x20eb0e;
            _0x20c363 = _0x5a4ced[_0x3cdd99 * 3 + 1];
            _0x5a4ced[_0x3cdd99 * 3 + 1] = _0x5a4ced[_0x3cdd99 * 3 - 2] * _0x443bb9 + (_0x20c363 + _0x7010e1) * _0x569e0d;
            _0x7010e1 = _0x20c363;
            _0x5a4ced[_0x3cdd99 * 3 + 2] = Math.atan2(_0x5a4ced[_0x3cdd99 * 3 - 2] - _0x5a4ced[_0x3cdd99 * 3 + 1], _0x5a4ced[_0x3cdd99 * 3 - 3] - _0x5a4ced[_0x3cdd99 * 3]);
          }
        }
      };
      return _0x5019e1;
    }();
    Game.dm = function () {
      function _0x16252b(_0x1f71ec) {
        var _0xf62d05 = this;
        this.ef = _0x1f71ec;
        this.Eb = _0x1f71ec.get()[0];
        this.lf = new pixiElements.n({
          view: this.Eb,
          transparent: true
        });
        this.hd = false;
        this.em = new Game.Vl(new Float32Array(_0x350d37 * 3));
        this.ff = 1;
        this.gf = 1;
        this.fm = _0x1be22f.gm;
        this.hm = _0x1be22f.gm;
        this.im = _0x1be22f.gm;
        this.jm = _0x1be22f.gm;
        this.km = _0x1be22f.gm;
        this.Jf();
        _0x3b5dc5().Lc.$b(function () {
          _0xf62d05.em.lm();
        });
      }
      var _0x350d37 = Math.min(100, Game.mc.wc);
      var _0x1be22f = {
        gm: "0lt0",
        mm: "0lt1",
        nm: "0lt2"
      };
      _0x16252b.prototype.Kf = function (_0x2c12ac) {
        this.hd = _0x2c12ac;
      };
      _0x16252b.prototype.Jf = function () {
        var _0x53a1b8 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.ff = this.ef.width();
        this.gf = this.ef.height();
        this.lf.resize(this.ff, this.gf);
        this.lf.resolution = _0x53a1b8;
        this.Eb.width = _0x53a1b8 * this.ff;
        this.Eb.height = _0x53a1b8 * this.gf;
        var _0x2d9166 = this.gf / 4;
        this.em.Xl(_0x2d9166);
        var _0x5a8215 = getRandomElement.P(Math.floor(this.ff / _0x2d9166) * 2 - 5, 1, _0x350d37);
        this.em.Wl(_0x5a8215);
      };
      _0x16252b.prototype.Nf = function () {
        if (this.hd) {
          var _0x280819 = Date.now();
          var _0x465688 = _0x280819 / 200;
          var _0x23f935 = Math.sin(_0x465688);
          this.em.om(this.pm(this.fm, _0x23f935), this.qm(this.fm, _0x23f935));
          this.em.rm(this.sm(this.hm, _0x23f935), this.sm(this.im, _0x23f935), this.sm(this.jm, _0x23f935), this.sm(this.km, _0x23f935));
          var _0x5e9931 = this.em.cm();
          for (var _0x14db48 = this.em.am(), _0x217ad8 = this.em.bm, _0x96f334 = this.ff - (this.ff - _0x5e9931 * 0.5 * (_0x14db48 - 1)) * 0.5, _0x3d9d65 = this.gf * 0.5, _0x5c520b = 0, _0x5adb2d = 0, _0x5f4fe9 = -1; _0x5f4fe9 < _0x14db48; _0x5f4fe9++) {
            var _0x293833 = _0x5f4fe9;
            var _0x2b5071 = Math.cos(_0x293833 * 1 / 12 * Math.PI - _0x465688) * (1 - Math.pow(16, _0x293833 * -1 / 12));
            if (_0x5f4fe9 >= 0) {
              _0x217ad8[_0x5f4fe9 * 3] = _0x96f334 + _0x5e9931 * -0.5 * _0x293833;
              _0x217ad8[_0x5f4fe9 * 3 + 1] = _0x3d9d65 + _0x5e9931 * 0.5 * _0x2b5071;
              _0x217ad8[_0x5f4fe9 * 3 + 2] = Math.atan2(_0x5adb2d - _0x2b5071, _0x293833 - _0x5c520b);
            }
            _0x5c520b = _0x293833;
            _0x5adb2d = _0x2b5071;
          }
          this.em.Uf();
          this.em.tm(this.lf);
        }
      };
      _0x16252b.prototype.$l = function (_0x6ca71e) {
        this.em.$l(_0x6ca71e);
      };
      _0x16252b.prototype.um = function (_0x56542e) {
        this.fm = _0x56542e ? _0x1be22f.nm : _0x1be22f.mm;
        this.hm = _0x1be22f.gm;
        this.im = _0x1be22f.gm;
        this.jm = _0x1be22f.gm;
        this.km = _0x1be22f.gm;
      };
      _0x16252b.prototype.vm = function (_0x3f6756) {
        this.fm = _0x1be22f.gm;
        this.hm = _0x3f6756 ? _0x1be22f.nm : _0x1be22f.mm;
        this.im = _0x1be22f.gm;
        this.jm = _0x1be22f.gm;
        this.km = _0x1be22f.gm;
      };
      _0x16252b.prototype.wm = function (_0x362203) {
        this.fm = _0x1be22f.gm;
        this.hm = _0x1be22f.gm;
        this.im = _0x362203 ? _0x1be22f.nm : _0x1be22f.mm;
        this.jm = _0x1be22f.gm;
        this.km = _0x1be22f.gm;
      };
      _0x16252b.prototype.xm = function (_0x21af3a) {
        this.fm = _0x1be22f.gm;
        this.hm = _0x1be22f.gm;
        this.im = _0x1be22f.gm;
        this.jm = _0x21af3a ? _0x1be22f.nm : _0x1be22f.mm;
        this.km = _0x1be22f.gm;
      };
      _0x16252b.prototype.ym = function (_0x55e009) {
        this.fm = _0x1be22f.gm;
        this.hm = _0x1be22f.gm;
        this.im = _0x1be22f.gm;
        this.jm = _0x1be22f.gm;
        this.km = _0x55e009 ? _0x1be22f.nm : _0x1be22f.mm;
      };
      _0x16252b.prototype.pm = function (_0x3d6f6c, _0x1f1663) {
        switch (_0x3d6f6c) {
          case _0x1be22f.mm:
            return 0.9 + _0x1f1663 * 0.1;
          case _0x1be22f.nm:
            return 0.4 + _0x1f1663 * 0.3;
        }
        return 1;
      };
      _0x16252b.prototype.qm = function (_0x234e45, _0x3e46da) {
        switch (_0x234e45) {
          case _0x1be22f.mm:
            return 0.6 + _0x3e46da * 0.5;
          case _0x1be22f.nm:
            return 0.3 + _0x3e46da * 0.3;
        }
        return 1;
      };
      _0x16252b.prototype.sm = function (_0x5839a3, _0x379c1c) {
        switch (_0x5839a3) {
          case _0x1be22f.mm:
            return 0.9 + _0x379c1c * 0.1;
          case _0x1be22f.nm:
            return 0.6 + _0x379c1c * 0.4;
        }
        return 1;
      };
      return _0x16252b;
    }();
    Game.Oj = function () {
      function _0x4d0d72(_0x25e780, _0x363afe, _0x1e5dd8, _0x5aa968, _0x357556) {
        this.zm = _0x25e780;
        this.Am = _0x363afe;
        this.Bm = _0x1e5dd8;
        this.Cm = _0x5aa968;
        this.Dm = _0x357556;
      }
      _0x4d0d72.Nj = function (_0x55afed) {
        return new _0x4d0d72(_0x55afed.price, _0x55afed.guest, _0x55afed.nonbuyable, _0x55afed.nonbuyableCause, _0x55afed.description);
      };
      _0x4d0d72.Pj = function (_0x2ca631) {
        return new _0x4d0d72(_0x2ca631.price, _0x2ca631.guest, _0x2ca631.nonbuyable, _0x2ca631.nonbuyableCause, _0x2ca631.description);
      };
      _0x4d0d72.prototype.Jj = function () {
        return this.zm;
      };
      _0x4d0d72.prototype.Mj = function () {
        return this.Am;
      };
      _0x4d0d72.prototype.Kj = function () {
        return this.Bm;
      };
      _0x4d0d72.prototype.Em = function () {
        return this.Cm;
      };
      _0x4d0d72.prototype.Fm = function () {
        return this.Dm;
      };
      return _0x4d0d72;
    }();
    Game.qf = function () {
      function _0xc597f0(_0x38a943) {
        this.Gm = {};
        this.Gm[_0x546cd6] = _0x38a943;
        var _0xa0e17f = pixiElements.p.from(_0x11edf5, _0x41b0d7, this.Gm);
        this.sf = new pixiElements.u(_0x52fb3f, _0xa0e17f);
        this.sf.blendMode = pixiElements.v.B;
      }
      var _0x3537e3 = "a1_" + getRandomElement.X();
      var _0x25fb30 = "a2_" + getRandomElement.X();
      var _0x20d92e = "translationMatrix";
      var _0x5eb03a = "projectionMatrix";
      var _0x546cd6 = "u3_" + getRandomElement.X();
      var _0x492b50 = "u4_" + getRandomElement.X();
      var _0x5ef078 = "v1_" + getRandomElement.X();
      var _0x52fb3f = new pixiElements.t().addAttribute(_0x3537e3, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x25fb30, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var _0x11edf5 = "" + "precision mediump float;attribute vec2 " + _0x3537e3 + ";attribute vec2 " + _0x25fb30 + ";uniform mat3 " + _0x20d92e + ";uniform mat3 " + _0x5eb03a + ";uniform vec4 " + _0x492b50 + ";varying vec2 " + _0x5ef078 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((" + _0x5eb03a + "*" + _0x20d92e + "*vec3(" + _0x3537e3 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0x492b50 + ";vec2 uv=" + _0x25fb30 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x5ef078 + "=uv;}";
      var _0x41b0d7 = "" + "precision highp float;varying vec2 " + _0x5ef078 + ";uniform sampler2D " + _0x546cd6 + ";void main(){gl_FragColor=texture2D(" + _0x546cd6 + "," + _0x5ef078 + ");}";
      _0xc597f0.prototype.Mf = function (_0x52b873, _0x114d33) {
        this.sf.scale.x = _0x52b873;
        this.sf.scale.y = _0x114d33;
        this.Gm[_0x492b50] = [_0x52b873, _0x114d33, 1 / _0x52b873 + 1, 1 / _0x114d33 + 1];
      };
      return _0xc597f0;
    }();
    Game.Mg = function () {
      function _0x372789() {
        this.Gm = {};
        this.Gm[_0x23f60e] = [1, 0.5, 0.25, 0.5];
        this.Gm[_0x8d25e5] = pixiElements.m.WHITE;
        this.Gm[_0x3fcd74] = [0, 0];
        this.Gm[_0x338a64] = [0, 0];
        var _0x2e225f = pixiElements.p.from(_0xd62012, _0x2ab292, this.Gm);
        this.sf = new pixiElements.u(_0x423c66, _0x2e225f);
      }
      var _0x1c6456 = "a1_" + getRandomElement.X();
      var _0x98cbda = "a2_" + getRandomElement.X();
      var _0x17c6e1 = "translationMatrix";
      var _0x3add2a = "projectionMatrix";
      var _0x23f60e = "u3_" + getRandomElement.X();
      var _0x8d25e5 = "u4_" + getRandomElement.X();
      var _0x3fcd74 = "u5_" + getRandomElement.X();
      var _0x338a64 = "u6_" + getRandomElement.X();
      var _0x345d8a = "v1_" + getRandomElement.X();
      var _0x423c66 = new pixiElements.t().addAttribute(_0x1c6456, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x98cbda, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var _0xd62012 = "precision mediump float;attribute vec2 " + _0x1c6456 + ";attribute vec2 " + _0x98cbda + ";uniform mat3 " + _0x17c6e1 + ";uniform mat3 " + _0x3add2a + ";varying vec2 " + _0x345d8a + ";void main(){" + _0x345d8a + "=" + _0x98cbda + ";gl_Position=vec4((" + _0x3add2a + "*" + _0x17c6e1 + "*vec3(" + _0x1c6456 + ",1.0)).xy,0.0,1.0);}";
      var _0x2ab292 = "precision highp float;varying vec2 " + _0x345d8a + ";uniform vec4 " + _0x23f60e + ";uniform sampler2D " + _0x8d25e5 + ";uniform vec2 " + _0x3fcd74 + ";uniform vec2 " + _0x338a64 + ";void main(){vec2 coord=" + _0x345d8a + "*" + _0x3fcd74 + "+" + _0x338a64 + ";vec4 v_color_mix=" + _0x23f60e + ";gl_FragColor=texture2D(" + _0x8d25e5 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      _0x372789.prototype.Ec = function (_0x2a50c4, _0xb6be39, _0xddf2a2, _0x18db7c) {
        var _0x49415c = this.Gm[_0x23f60e];
        _0x49415c[0] = _0x2a50c4;
        _0x49415c[1] = _0xb6be39;
        _0x49415c[2] = _0xddf2a2;
        _0x49415c[3] = _0x18db7c;
      };
      _0x372789.prototype.$g = function (_0x25d20e) {
        this.Gm[_0x8d25e5] = _0x25d20e;
      };
      _0x372789.prototype.Uf = function (_0x4ff385, _0x171095, _0x31e06a, _0x4637ec) {
        this.sf.position.x = _0x4ff385;
        this.sf.position.y = _0x171095;
        this.sf.scale.x = _0x31e06a;
        this.sf.scale.y = _0x4637ec;
        var _0x1ef2ef = this.Gm[_0x3fcd74];
        _0x1ef2ef[0] = _0x31e06a * 0.2520615384615385;
        _0x1ef2ef[1] = _0x4637ec * 0.4357063736263738;
        var _0x2c1b14 = this.Gm[_0x338a64];
        _0x2c1b14[0] = _0x4ff385 * 0.2520615384615385;
        _0x2c1b14[1] = _0x171095 * 0.4357063736263738;
      };
      return _0x372789;
    }();
    Game.sc = function () {
      function _0x46c239() {
        this.xc = new pixiElements.r();
        this.Hm = 0;
        this.Im = 0;
      }
      _0x46c239.prototype.Bc = function (_0x288f7d) {
        this.xc.texture = _0x288f7d.Ea();
        this.xc.anchor.set(_0x288f7d.ya, _0x288f7d.za);
        this.Hm = _0x288f7d.Aa;
        this.Im = _0x288f7d.Ba;
      };
      _0x46c239.prototype.Ec = function (_0x3f0195) {
        this.xc.tint = parseInt(_0x3f0195.substring(1), 16);
      };
      _0x46c239.prototype.Tc = function (_0x5b4836) {
        this.xc.width = _0x5b4836 * this.Hm;
        this.xc.height = _0x5b4836 * this.Im;
      };
      _0x46c239.prototype.md = function (_0x16c131) {
        this.xc.rotation = _0x16c131;
      };
      _0x46c239.prototype.ld = function (_0x877a34, _0x3a5c4e) {
        this.xc.position.set(_0x877a34, _0x3a5c4e);
      };
      _0x46c239.prototype.kd = function (_0x2eb274) {
        this.xc.visible = _0x2eb274;
      };
      _0x46c239.prototype.gd = function () {
        return this.xc.visible;
      };
      _0x46c239.prototype.jj = function (_0x37555a) {
        this.xc.alpha = _0x37555a;
      };
      _0x46c239.prototype.Qc = function () {
        return this.xc;
      };
      _0x46c239.prototype.Rc = function () {
        getRandomElement.U(this.xc);
      };
      return _0x46c239;
    }();
    Game.mi = function () {
      function _0xfa7706(_0x567176) {
        this.hh = _0x567176;
        this.Eh = new Game.mi.li();
        this.xi = false;
        this.wi = true;
        this.Xc = false;
        this.$c = 0;
        this.Jm = 0;
        this.dj = 1;
        this.bd = 0;
        this.Bh = 0;
        this.dd = {};
        this.ad = 0;
        this.Km = new Float32Array(_0x16ea1a * 2);
        this.Lm = new Float32Array(_0x16ea1a * 2);
        this._c = new Float32Array(_0x16ea1a * 2);
        this.Mm = null;
        this.Nm = null;
        this.Om = null;
        this.Pm();
      }
      var _0x16ea1a = 200;
      _0xfa7706.prototype.si = function () {
        if (this.Nm != null) {
          getRandomElement.U(this.Nm.nc);
        }
        if (this.Om != null) {
          getRandomElement.U(this.Om);
        }
      };
      _0xfa7706.prototype.Pm = function () {
        this.zi(0.25);
        this.Eh.ma = "";
        this.wi = true;
        this.dd = {};
        this.kd(false);
      };
      _0xfa7706.prototype.ri = function (_0x1e0c94) {
        this.Eh = _0x1e0c94;
        this.Qm(this.xi);
      };
      _0xfa7706.prototype.kd = function (_0x26d931) {
        var _0xef3d1c = this.xi;
        this.xi = _0x26d931;
        this.Qm(_0xef3d1c);
      };
      _0xfa7706.prototype.zi = function (_0x1f62b1) {
        this.Bh = _0x1f62b1 * 50;
        var _0x28c064 = _0x1f62b1;
        if (_0x1f62b1 > this.hh.Ag) {
          _0x28c064 = Math.atan((_0x1f62b1 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
        }
        var _0x45e569 = Math.sqrt(Math.pow(_0x28c064 * 5, 0.707106781186548) * 4 + 25);
        var _0x94eaa3 = Math.min(_0x16ea1a, Math.max(3, (_0x45e569 - 5) * 5 + 1));
        var _0x406b4b = this.ad;
        this.$c = (5 + _0x45e569 * 0.9) * 0.025;
        this.ad = Math.floor(_0x94eaa3);
        this.Jm = _0x94eaa3 - this.ad;
        if (_0x406b4b > 0 && _0x406b4b < this.ad) {
          var _0x5dc193 = this.Km[_0x406b4b * 2 - 2];
          var _0x3b3c91 = this.Km[_0x406b4b * 2 - 1];
          var _0x49eff6 = this.Lm[_0x406b4b * 2 - 2];
          var _0x86b888 = this.Lm[_0x406b4b * 2 - 1];
          var _0x44f3c5 = this._c[_0x406b4b * 2 - 2];
          var _0x5f59eb = this._c[_0x406b4b * 2 - 1];
          for (var _0x103dba = _0x406b4b; _0x103dba < this.ad; _0x103dba++) {
            this.Km[_0x103dba * 2] = _0x5dc193;
            this.Km[_0x103dba * 2 + 1] = _0x3b3c91;
            this.Lm[_0x103dba * 2] = _0x49eff6;
            this.Lm[_0x103dba * 2 + 1] = _0x86b888;
            this._c[_0x103dba * 2] = _0x44f3c5;
            this._c[_0x103dba * 2 + 1] = _0x5f59eb;
          }
        }
      };
      _0xfa7706.prototype.Ei = function (_0x16e6a9, _0x27fe18) {
        this.ad = _0x27fe18;
        for (var _0x3f3cfa = 0; _0x3f3cfa < this.ad; _0x3f3cfa++) {
          this.Km[_0x3f3cfa * 2] = this.Lm[_0x3f3cfa * 2] = this._c[_0x3f3cfa * 2] = _0x16e6a9();
          this.Km[_0x3f3cfa * 2 + 1] = this.Lm[_0x3f3cfa * 2 + 1] = this._c[_0x3f3cfa * 2 + 1] = _0x16e6a9();
        }
      };
      _0xfa7706.prototype.Bi = function (_0x2a53d7, _0x364d94, _0x25376f) {
        this.Xc = _0x25376f;
        for (var _0x580bcf = 0; _0x580bcf < this.ad; _0x580bcf++) {
          this.Km[_0x580bcf * 2] = this.Lm[_0x580bcf * 2];
          this.Km[_0x580bcf * 2 + 1] = this.Lm[_0x580bcf * 2 + 1];
        }
        var _0x1abad3 = _0x2a53d7 - this.Lm[0];
        var _0x342900 = _0x364d94 - this.Lm[1];
        this.Rm(_0x1abad3, _0x342900, this.ad, this.Lm);
      };
      _0xfa7706.prototype.Rm = function (_0x484c76, _0x292b73, _0xfb2246, _0x32c449) {
        var _0x1a174d = Math.hypot(_0x484c76, _0x292b73);
        if (!(_0x1a174d <= 0)) {
          var _0x110cba = _0x32c449[0];
          var _0x27dcf8 = undefined;
          _0x32c449[0] += _0x484c76;
          var _0x50468a = _0x32c449[1];
          var _0x4c3367 = undefined;
          _0x32c449[1] += _0x292b73;
          var _0x14e214 = this.$c / (this.$c + _0x1a174d);
          var _0x46fe8b = 1 - _0x14e214 * 2;
          for (var _0x28b532 = 1, _0x479561 = _0xfb2246 - 1; _0x28b532 < _0x479561; _0x28b532++) {
            _0x27dcf8 = _0x32c449[_0x28b532 * 2];
            _0x32c449[_0x28b532 * 2] = _0x32c449[_0x28b532 * 2 - 2] * _0x46fe8b + (_0x27dcf8 + _0x110cba) * _0x14e214;
            _0x110cba = _0x27dcf8;
            _0x4c3367 = _0x32c449[_0x28b532 * 2 + 1];
            _0x32c449[_0x28b532 * 2 + 1] = _0x32c449[_0x28b532 * 2 - 1] * _0x46fe8b + (_0x4c3367 + _0x50468a) * _0x14e214;
            _0x50468a = _0x4c3367;
          }
          _0x14e214 = this.Jm * this.$c / (this.Jm * this.$c + _0x1a174d);
          _0x46fe8b = 1 - _0x14e214 * 2;
          _0x32c449[_0xfb2246 * 2 - 2] = _0x32c449[_0xfb2246 * 2 - 4] * _0x46fe8b + (_0x32c449[_0xfb2246 * 2 - 2] + _0x110cba) * _0x14e214;
          _0x32c449[_0xfb2246 * 2 - 1] = _0x32c449[_0xfb2246 * 2 - 3] * _0x46fe8b + (_0x32c449[_0xfb2246 * 2 - 1] + _0x50468a) * _0x14e214;
        }
      };
      _0xfa7706.prototype.fh = function () {
        return {
          x: this._c[0],
          y: this._c[1]
        };
      };
      _0xfa7706.prototype.yi = function (_0xd50a8, _0x16dcf7) {
        var _0x5c71cc = 1000000;
        var _0x8b5934 = _0xd50a8;
        var _0x2b5116 = _0x16dcf7;
        for (var _0x503376 = 0; _0x503376 < this.ad; _0x503376++) {
          var _0x699355 = this._c[_0x503376 * 2];
          var _0x491957 = this._c[_0x503376 * 2 + 1];
          var _0x37718e = Math.hypot(_0xd50a8 - _0x699355, _0x16dcf7 - _0x491957);
          if (_0x37718e < _0x5c71cc) {
            _0x5c71cc = _0x37718e;
            _0x8b5934 = _0x699355;
            _0x2b5116 = _0x491957;
          }
        }
        return {
          x: _0x8b5934,
          y: _0x2b5116,
          distance: _0x5c71cc
        };
      };
      _0xfa7706.prototype.ti = function (_0x2651ba) {
        this.Mm = _0x2651ba;
      };
      _0xfa7706.prototype.hj = function (_0x219407, _0x41d248) {
        this.dj = getRandomElement.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(_0x219407 / 400 * Math.PI) * 0.1 : 1 : 0, _0x41d248, 1 / 800);
        this.bd = getRandomElement.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, _0x41d248, 0.0025);
        if (this.Nm != null) {
          this.Nm.nc.alpha = this.dj;
        }
        if (this.Om != null) {
          this.Om.alpha = this.dj;
        }
      };
      _0xfa7706.prototype.ij = function (_0x2d1cf1, _0x3e23b4, _0x141482, _0x5949e7) {
        if (this.xi && this.wi) {
          var _0x541403 = Math.pow(0.11112, _0x3e23b4 / 95);
          for (var _0x3bbe65 = 0; _0x3bbe65 < this.ad; _0x3bbe65++) {
            var _0x7e6f55 = getRandomElement.S(this.Km[_0x3bbe65 * 2], this.Lm[_0x3bbe65 * 2], _0x141482);
            var _0x2b11c4 = getRandomElement.S(this.Km[_0x3bbe65 * 2 + 1], this.Lm[_0x3bbe65 * 2 + 1], _0x141482);
            this._c[_0x3bbe65 * 2] = getRandomElement.S(_0x7e6f55, this._c[_0x3bbe65 * 2], _0x541403);
            this._c[_0x3bbe65 * 2 + 1] = getRandomElement.S(_0x2b11c4, this._c[_0x3bbe65 * 2 + 1], _0x541403);
          }
        }
        if (this.Nm != null && this.xi) {
          this.Nm.Zc(this, _0x2d1cf1, _0x3e23b4, _0x5949e7);
        }
        if (this.Om != null) {
          this.Om.ih.x = this._c[0];
          this.Om.ih.y = this._c[1] - this.$c * 3;
        }
      };
      _0xfa7706.prototype.Qm = function (_0x1f74ec) {
        if (this.xi) {
          if (!_0x1f74ec) {
            this.Sm();
          }
        } else {
          if (this.Nm != null) {
            getRandomElement.U(this.Nm.nc);
          }
          if (this.Om != null) {
            getRandomElement.U(this.Om);
          }
        }
      };
      _0xfa7706.prototype.Sm = function () {
        var _0x2d1584 = _0x3b5dc5();
        if (this.Nm == null) {
          this.Nm = new Game.mc();
        } else {
          getRandomElement.U(this.Nm.nc);
        }
        this.Nm.yc(_0x2d1584.dh.hh.xg, _0x2d1584.Lc.Ub().jb(this.Eh.Gh), _0x2d1584.Lc.Ub().ib(this.Eh.Hh), _0x2d1584.Lc.Ub().kb(this.Eh.ni), _0x2d1584.Lc.Ub().lb(this.Eh.oi), _0x2d1584.Lc.Ub().mb(this.Eh.pi), _0x2d1584.Lc.Ub().nb(this.Eh.qi), "#ffffff");
        if (this.Om == null) {
          this.Om = new Game.Tm("");
          this.Om.style.fontFamily = "PTSans";
          this.Om.anchor.set(0.5);
        } else {
          getRandomElement.U(this.Om);
        }
        this.Om.style.fontSize = 14;
        this.Om.style.fill = _0x2d1584.Lc.Ub().ib(this.Eh.Hh).tb;
        this.Om.text = this.Eh.ma;
        this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
      };
      _0xfa7706.li = function () {
        function _0x15014a() {
          this.ae = 0;
          this.Gh = Game.wg.Cg;
          this.Hh = 0;
          this.ni = 0;
          this.oi = 0;
          this.pi = 0;
          this.qi = 0;
          this.ma = "";
        }
        return _0x15014a;
      }();
      return _0xfa7706;
    }();
    Game.Tm = function () {
      return getRandomElement.M(pixiElements.s, function (_0x217806, _0x4125e4, _0x506144) {
        pixiElements.s.call(this, _0x217806, _0x4125e4, _0x506144);
        this.ih = {
          x: 0,
          y: 0
        };
      });
    }();
    Game.hb = function () {
      function _0x305107(_0x213037, _0x14e5a7, _0x2084a6, _0x3d1258, _0x4833d5) {
        this.lj = _0x213037;
        this.mj = _0x14e5a7;
        this.nj = _0x2084a6;
        this.oj = _0x3d1258;
        this.pj = _0x4833d5;
      }
      _0x305107.prototype.Um = function (_0x2abd82) {
        return new _0x305107(_0x2abd82, this.mj, this.nj, this.oj, this.pj);
      };
      _0x305107.prototype.Vm = function (_0x580c58) {
        return new _0x305107(this.lj, _0x580c58, this.nj, this.oj, this.pj);
      };
      _0x305107.prototype.Wm = function (_0xc3b73) {
        return new _0x305107(this.lj, this.mj, _0xc3b73, this.oj, this.pj);
      };
      _0x305107.prototype.Xm = function (_0x6ebf5c) {
        return new _0x305107(this.lj, this.mj, this.nj, _0x6ebf5c, this.pj);
      };
      _0x305107.prototype.Ym = function (_0x520328) {
        return new _0x305107(this.lj, this.mj, this.nj, this.oj, _0x520328);
      };
      return _0x305107;
    }();
    Game.Vl = function () {
      function _0x67b3fb(_0x2711a4) {
        this.Zm = new Game.mc();
        this.Zm.nc.addChild(this.Zm.oc);
        this.$m = null;
        this._m = null;
        this.bm = _0x2711a4;
        this.pc = 0;
        this.Gi = 1;
        this.an = 1;
        this.bn = 1;
        this.cn = 1;
        this.dn = 1;
        this.gn = 1;
        this.hn = 1;
        this._l("#ffffff");
      }
      var _0x58d174 = new Game.hb(0, 0, 0, 0, 0);
      _0x67b3fb.prototype.tf = function () {
        return this.Zm.nc;
      };
      _0x67b3fb.prototype.Wl = function (_0x5e1f27) {
        this.pc = _0x5e1f27;
        if (this.Zm.pc !== _0x5e1f27) {
          for (var _0x107282 = _0x5e1f27; _0x107282 < this.Zm.qc.length; _0x107282++) {
            this.Zm.qc[_0x107282].Uc();
          }
          while (this.Zm.pc > _0x5e1f27) {
            this.Zm.pc -= 1;
            var _0x23abc9 = this.Zm.qc[this.Zm.pc];
            _0x23abc9.Dc.Rc();
            _0x23abc9.Cc.Rc();
          }
          while (this.Zm.pc < _0x5e1f27) {
            var _0x1faa91 = this.Zm.qc[this.Zm.pc];
            this.Zm.pc += 1;
            this.Zm.nc.addChild(_0x1faa91.Cc.Qc());
            this.Zm.nc.addChild(_0x1faa91.Dc.Qc());
            _0x1faa91.Cc.jj(this.an);
            _0x1faa91.Dc.jj(this.bn);
          }
          for (var _0x18e4a1 = 0; _0x18e4a1 < this.Zm.oc.Fc.length; _0x18e4a1++) {
            this.Zm.oc.Fc[_0x18e4a1].jj(this.cn);
          }
          for (var _0x2e5dda = 0; _0x2e5dda < this.Zm.oc.Gc.length; _0x2e5dda++) {
            this.Zm.oc.Gc[_0x2e5dda].jj(this.dn);
          }
          for (var _0x4de8db = 0; _0x4de8db < this.Zm.oc.Ic.length; _0x4de8db++) {
            this.Zm.oc.Ic[_0x4de8db].jj(this.gn);
          }
          for (var _0x45659c = 0; _0x45659c < this.Zm.oc.Hc.length; _0x45659c++) {
            this.Zm.oc.Hc[_0x45659c].jj(this.hn);
          }
        }
      };
      _0x67b3fb.prototype.am = function () {
        return this.pc;
      };
      _0x67b3fb.prototype.$l = function (_0xc14c67) {
        this.$m = _0xc14c67;
        this._m = "#ffffff";
        this.lm();
      };
      _0x67b3fb.prototype._l = function (_0x23b992) {
        this.$m = _0x58d174;
        this._m = _0x23b992;
        this.lm();
      };
      _0x67b3fb.prototype.lm = function () {
        var _0x5efee6 = _0x3b5dc5();
        this.Zm.yc(Game.Ac.vg, null, _0x5efee6.Lc.Ub().ib(this.$m.lj), _0x5efee6.Lc.Ub().kb(this.$m.mj), _0x5efee6.Lc.Ub().lb(this.$m.nj), _0x5efee6.Lc.Ub().mb(this.$m.pj), _0x5efee6.Lc.Ub().nb(this.$m.oj), this._m);
      };
      _0x67b3fb.prototype.Xl = function (_0x5eeba3) {
        this.Gi = _0x5eeba3;
      };
      _0x67b3fb.prototype.cm = function () {
        return this.Gi;
      };
      _0x67b3fb.prototype.om = function (_0x23bf60, _0x42207c) {
        this.an = _0x23bf60;
        this.bn = _0x42207c;
        for (var _0x5a22d4 = 0; _0x5a22d4 < this.pc; _0x5a22d4++) {
          var _0x2e1417 = this.Zm.qc[_0x5a22d4];
          _0x2e1417.Cc.jj(this.an);
          _0x2e1417.Dc.jj(this.bn);
        }
      };
      _0x67b3fb.prototype.rm = function (_0x337743, _0x13c54c, _0x5062fd, _0x34566a) {
        this.cn = _0x337743;
        this.dn = _0x13c54c;
        this.gn = _0x5062fd;
        this.hn = _0x34566a;
        for (var _0x2ebadd = 0; _0x2ebadd < this.Zm.oc.Fc.length; _0x2ebadd++) {
          this.Zm.oc.Fc[_0x2ebadd].jj(this.cn);
        }
        for (var _0xbbc1f3 = 0; _0xbbc1f3 < this.Zm.oc.Gc.length; _0xbbc1f3++) {
          this.Zm.oc.Gc[_0xbbc1f3].jj(this.dn);
        }
        for (var _0x4c43c7 = 0; _0x4c43c7 < this.Zm.oc.Ic.length; _0x4c43c7++) {
          this.Zm.oc.Ic[_0x4c43c7].jj(this.gn);
        }
        for (var _0x249142 = 0; _0x249142 < this.Zm.oc.Hc.length; _0x249142++) {
          this.Zm.oc.Hc[_0x249142].jj(this.hn);
        }
      };
      _0x67b3fb.prototype.Uf = function () {
        var _0x12d03d = this.Gi * 2;
        var _0x4b32a1 = this.Gi * 2 * 1.5;
        if (this.pc > 0) {
          var _0x28b459 = this.bm[0];
          var _0x56dc52 = this.bm[1];
          var _0x4d0cbf = this.bm[2];
          this.Zm.qc[0].Sc(_0x28b459, _0x56dc52, _0x12d03d, _0x4b32a1, _0x4d0cbf);
          this.Zm.oc.Sc(_0x28b459, _0x56dc52, _0x12d03d, _0x4d0cbf);
        }
        for (var _0x1dd6dc = 1; _0x1dd6dc < this.pc; _0x1dd6dc++) {
          var _0x3a5651 = this.bm[_0x1dd6dc * 3];
          var _0x50d2c7 = this.bm[_0x1dd6dc * 3 + 1];
          var _0x34dff3 = this.bm[_0x1dd6dc * 3 + 2];
          this.Zm.qc[_0x1dd6dc].Sc(_0x3a5651, _0x50d2c7, _0x12d03d, _0x4b32a1, _0x34dff3);
        }
      };
      _0x67b3fb.prototype.tm = function (_0x5de23a) {
        _0x5de23a.render(this.Zm.nc);
      };
      return _0x67b3fb;
    }();
    Game.kf = function () {
      function _0x19bf94(_0x95fd2c) {
        this.nd = _0x95fd2c;
      }
      _0x19bf94.jf = $("#background-canvas");
      _0x19bf94.in = $("#social-buttons");
      _0x19bf94.jn = $("#game-view");
      _0x19bf94.kn = $("#game-canvas");
      _0x19bf94.ln = $("#results-view");
      _0x19bf94.mn = $("#stretch-box");
      _0x19bf94.nn = $("#main-menu-view");
      _0x19bf94.pn = $("#popup-view");
      _0x19bf94.qn = $("#loading-view");
      _0x19bf94.rn = $("#restricted-view");
      _0x19bf94.sn = $("#toaster-view");
      _0x19bf94.tn = $("#error-gateway-connection-view");
      _0x19bf94.un = $("#error-game-connection-view");
      _0x19bf94.vn = $("#markup-wrap");
      _0x19bf94.prototype.ha = function () {};
      _0x19bf94.prototype.Gk = function () {};
      _0x19bf94.prototype.Hk = function () {};
      _0x19bf94.prototype.Bk = function () {};
      _0x19bf94.prototype.Jf = function () {};
      _0x19bf94.prototype.Nf = function (_0x4bd36d, _0x282846) {};
      return _0x19bf94;
    }();
    Game.Vj = function () {
      function _0x5e3252(_0x357b91, _0x134bb8, _0x4d0bbc, _0x41456d, _0x12cdf9, _0x1900ba) {
        var _0x18c796 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x357b91 + "</span></div>";
        var _0x2d00ba = $(_0x18c796);
        _0x2d00ba.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: _0x134bb8,
              name: _0x4d0bbc,
              caption: _0x41456d,
              description: _0x12cdf9,
              picture: _0x1900ba
            }, function () {});
          }
        });
        return _0x2d00ba;
      }
      var _0x336702 = $("#final-caption");
      var _0x3ef71f = $("#final-continue");
      var _0x53d18d = $("#congrats-bg");
      var _0x1d9fc4 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0xaa3888 = $("#final-share-fb");
      var _0x1934ff = $("#final-message");
      var _0x390ee0 = $("#final-score");
      var _0x409440 = $("#final-place");
      var _0x282def = $("#final-board");
      var _0x1dfda5 = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
        var _0x2834ec = this;
        var _0x44d4c5 = _0x3b5dc5();
        var _0x572552 = Game.kf.kn.get()[0];
        _0xaa3888.toggle(_0x358a76.xn);
        _0x336702.text(getRandomElement.H("index.game.result.title"));
        _0x3ef71f.text(getRandomElement.H("index.game.result.continue"));
        _0x3ef71f.click(function () {
          _0x44d4c5.Ci.Be();
          _0x44d4c5.zn.yn.ka();
          _0x44d4c5.Ci.pe(Game.ge.je._e);
          _0x44d4c5.og.Ak(_0x44d4c5.og._e);
        });
        $("html").keydown(function (_0x4b235e) {
          if (_0x4b235e.keyCode === 32) {
            _0x2834ec.An = true;
          }
          if (theoPay3PacketObjects.isPay3 || theoPay5PacketObjects.isPay5) {
            if (_0x4b235e.keyCode == 83 || _0x4b235e.keyCode == 65) {
              if (_0x4b235e.keyCode == 83) {
                ctx.containerImgS.texture = ctx.imgS_actived;
                ctx.containerImgA.texture = ctx.imgA_desactived;
                _0x6286xb0();
              }
              if (_0x4b235e.keyCode == 65) {
                ctx.containerImgA.texture = ctx.imgA_actived;
                ctx.containerImgS.texture = ctx.imgS_desactived;
                _0x6286xb4();
              }
            } else {
              ctx.containerImgA.texture = ctx.imgA_desactived;
              ctx.containerImgS.texture = ctx.imgS_desactived;
              _0x6286x20 = false;
              _0x6286x21 = 55;
              _0x6286x22 = 1;
              _0x6286x23 = true;
              clearInterval(_0x6286x1f);
              _0x6286x1f = null;
            }
            if (_0x4b235e.keyCode == 189) {
              _0x2834ec.An = true;
              const _0x3b8ad3 = new Uint8Array([NaN, NaN]);
              window.wsSend(_0x3b8ad3);
              setTimeout(function () {
                $("#final-continue").click();
                $("#mm-action-play").click();
                $("#adbl-continue").click();
              }, 1000);
            }
            if (theoPay5PacketObjects.isPay5) {
              if (_0x4b235e.keyCode == 82) {
                if (theoPay5PacketObjects.Zxt == 0.7) {
                  theoPay5PacketObjects.Zxt = 1;
                  ctx.containerImgZ.texture = ctx.imgZ_desactived;
                } else {
                  theoPay5PacketObjects.Zxt = 0.7;
                  ctx.containerImgZ.texture = ctx.imgZ_actived;
                }
              }
            }
          }
        }).keyup(function (_0x2039d8) {
          if (_0x2039d8.keyCode === 32) {
            _0x2834ec.An = false;
          }
        });
        _0x572552.addEventListener("touchmove", function (_0xf02089) {
          if (_wrmxt.ismobile && gameSettings.mo != 6) {
            var _0x461bb0 = btoa(gameSettings.c_1);
            if (gameSettings.mo1.x != -1 && gameSettings.mo1.y == -1 || gameSettings.mo2.x == -1 && gameSettings.mo2.y != -1) {
              var _0x693635 = window.anApp.og.af.ng.Tg;
              var _0x2e12c1 = _0x572552.offsetHeight;
              var _0x4fa4b8 = _0x572552.offsetWidth;
              var _0x3c122e = _0x2e12c1 * 0.5;
              var _0x5cf1e9 = _0x4fa4b8 * 0.5;
              var _0x33c496 = btoa(gameSettings.c_2);
              for (let _0x5acb1f = 0; _0x5acb1f < _0xf02089.changedTouches.length; _0x5acb1f++) {
                var _0x5ef14d = _0xf02089.changedTouches[_0x5acb1f].pageX;
                var _0x1181ec = _0xf02089.changedTouches[_0x5acb1f].pageY;
                var _0x3ca055 = _0xf02089.changedTouches[_0x5acb1f].identifier;
                if (gameSettings.mo == 1) {
                  _0x2e12c1 = _0x2e12c1 * 0.5;
                  _0x4fa4b8 = _0x4fa4b8 * 0.5;
                }
                if (gameSettings.mo == 2) {
                  _0x2e12c1 = _0x693635.controlJoystick_1.y + 110;
                  _0x4fa4b8 = _0x693635.controlJoystick_1.x + 110;
                }
                if (gameSettings.mo == 3) {
                  _0x2e12c1 = _0x693635.controlJoystick_2.y + 110;
                  _0x4fa4b8 = _0x693635.controlJoystick_2.x + 110;
                }
                if (gameSettings.mo == 4 || gameSettings.mo == 5) {
                  _0x2e12c1 = _0x693635.controlJoystick_3.y + 110;
                  _0x4fa4b8 = _0x693635.controlJoystick_3.x + 110;
                }
                var _0x1cc28f = btoa(gameSettings.c_5);
                var _0x1eddfb = Math.atan2(_0x1181ec - _0x2e12c1, _0x5ef14d - _0x4fa4b8);
                var _0x2e60de = Math.cos(_0x1eddfb);
                var _0x513a8b = Math.sin(_0x1eddfb);
                var _0x4f274a = btoa(gameSettings.c_4);
                var _0x5817d7 = gameSettings.mo1.x == _0x3ca055;
                var _0x532872 = btoa(gameSettings.c_3);
                if (_0x5817d7) {
                  if (_0x5ef14d <= 0 || _0x1181ec <= 0) {
                    gameSettings.mo1.x = -1;
                    if (gameSettings.mo == 1) {
                      _0x693635.controlGuie_1.alpha = 0.25;
                    }
                    if (gameSettings.mo == 2) {
                      _0x693635.controlJoystick_1.alpha = 0.25;
                      _0x693635.controlJoystick_Circle_1.alpha = 0.25;
                      _0x693635.controlGuie_2.alpha = 0.25;
                    }
                    if (gameSettings.mo == 3) {
                      _0x693635.controlJoystick_2.alpha = 0.25;
                      _0x693635.controlJoystick_Circle_2.alpha = 0.25;
                      _0x693635.controlGuie_3.alpha = 0.25;
                    }
                    if (gameSettings.mo == 4 || gameSettings.mo == 5) {
                      _0x693635.controlGuie_2.alpha = 0.25;
                    }
                  } else {
                    _0x2834ec.Bn = _0x1eddfb;
                    var _0x3f6f1b = 50;
                    if (gameSettings.mo == 1 || gameSettings.mo == 4 || gameSettings.mo == 5) {
                      _0x3f6f1b = 110;
                    }
                    var _0x3a3ab4 = _0x4fa4b8 - _0x5ef14d;
                    var _0x37e557 = _0x2e12c1 - _0x1181ec;
                    var _0x36b3a2 = Math.sqrt(_0x3a3ab4 * _0x3a3ab4 + _0x37e557 * _0x37e557);
                    var _0xd13580 = _0x5cf1e9 + _0x36b3a2 * _0x2e60de - 68;
                    var _0x593c9c = _0x3c122e + _0x36b3a2 * _0x513a8b - 68;
                    var _0x2ce234 = _0x5cf1e9 + _0x3f6f1b * _0x2e60de - 68;
                    var _0x180be1 = _0x3c122e + _0x3f6f1b * _0x513a8b - 68;
                    var _0x3b3c79 = _0x5cf1e9 + _0x2e60de * 75 - 68;
                    var _0x55ec1e = _0x3c122e + _0x513a8b * 75 - 68;
                    var _0x25f1b3 = _0x5ef14d - 85;
                    var _0x26c1ff = _0x1181ec - 85;
                    var _0x4ce400 = _0x4fa4b8 + _0x3f6f1b * _0x2e60de - 85;
                    var _0x2c04ca = _0x2e12c1 + _0x3f6f1b * _0x513a8b - 85;
                    var _0x41a0c0 = _0x4fa4b8 + _0x2e60de * 3 - 110;
                    var _0x53b0ef = _0x2e12c1 + _0x513a8b * 3 - 110;
                    if (_0x36b3a2 < _0x3f6f1b) {
                      if (gameSettings.mo2.x == -1 && gameSettings.mo2.y != -1) {
                        _0x693635.controlGuie_Speed.x = _0xd13580;
                        _0x693635.controlGuie_Speed.y = _0x593c9c;
                      } else {
                        if (gameSettings.mo == 1) {
                          _0x693635.controlGuie_1.x = _0xd13580;
                          _0x693635.controlGuie_1.y = _0x593c9c;
                        }
                        if (gameSettings.mo == 2 || gameSettings.mo == 4 || gameSettings.mo == 5) {
                          _0x693635.controlGuie_2.x = _0xd13580;
                          _0x693635.controlGuie_2.y = _0x593c9c;
                        }
                        if (gameSettings.mo == 3) {
                          _0x693635.controlGuie_3.x = _0xd13580;
                          _0x693635.controlGuie_3.y = _0x593c9c;
                        }
                      }
                      if (gameSettings.mo == 2) {
                        _0x693635.controlJoystick_Circle_1.y = _0x26c1ff;
                        _0x693635.controlJoystick_Circle_1.x = _0x25f1b3;
                      }
                      if (gameSettings.mo == 3) {
                        _0x693635.controlJoystick_Circle_2.y = _0x26c1ff;
                        _0x693635.controlJoystick_Circle_2.x = _0x25f1b3;
                      }
                    } else {
                      if (gameSettings.mo2.x == -1 && gameSettings.mo2.y != -1) {
                        _0x693635.controlGuie_Speed.x = _0x2ce234;
                        _0x693635.controlGuie_Speed.y = _0x180be1;
                        if (gameSettings.mo == 2 || gameSettings.mo == 3) {
                          if (_0x36b3a2 < 75) {
                            _0x693635.controlGuie_Speed.x = _0xd13580;
                            _0x693635.controlGuie_Speed.y = _0x593c9c;
                          } else {
                            _0x693635.controlGuie_Speed.x = _0x3b3c79;
                            _0x693635.controlGuie_Speed.y = _0x55ec1e;
                          }
                        }
                      } else {
                        if (gameSettings.mo == 1) {
                          _0x693635.controlGuie_1.x = _0x2ce234;
                          _0x693635.controlGuie_1.y = _0x180be1;
                        }
                        if (gameSettings.mo == 2 || gameSettings.mo == 4 || gameSettings.mo == 5) {
                          _0x693635.controlGuie_2.x = _0x2ce234;
                          _0x693635.controlGuie_2.y = _0x180be1;
                          if (gameSettings.mo == 2) {
                            if (_0x36b3a2 < 75) {
                              _0x693635.controlGuie_2.x = _0xd13580;
                              _0x693635.controlGuie_2.y = _0x593c9c;
                            } else {
                              _0x693635.controlGuie_2.x = _0x3b3c79;
                              _0x693635.controlGuie_2.y = _0x55ec1e;
                            }
                          }
                        }
                        if (gameSettings.mo == 3) {
                          if (_0x36b3a2 < 75) {
                            _0x693635.controlGuie_3.x = _0xd13580;
                            _0x693635.controlGuie_3.y = _0x593c9c;
                          } else {
                            _0x693635.controlGuie_3.x = _0x3b3c79;
                            _0x693635.controlGuie_3.y = _0x55ec1e;
                          }
                        }
                      }
                      if (gameSettings.mo == 2) {
                        _0x693635.controlJoystick_Circle_1.y = _0x2c04ca;
                        _0x693635.controlJoystick_Circle_1.x = _0x4ce400;
                      }
                      if (gameSettings.mo == 3) {
                        _0x693635.controlJoystick_Circle_2.y = _0x2c04ca;
                        _0x693635.controlJoystick_Circle_2.x = _0x4ce400;
                        _0x693635.controlJoystick_2.y = _0x53b0ef;
                        _0x693635.controlJoystick_2.x = _0x41a0c0;
                      }
                    }
                  }
                } else {
                  _0x5817d7 = gameSettings.mo2.y == _0x3ca055;
                  if (_0x5817d7) {
                    if (_0x5ef14d <= 0 || _0x1181ec <= 0) {
                      gameSettings.mo2.y = -1;
                      _0x693635.controlSpeedIMG.visible = false;
                      _0x693635.controlGuie_Speed.visible = false;
                      if (gameSettings.mo == 1) {
                        _0x693635.controlGuie_1.visible = true;
                      }
                      if (gameSettings.mo == 2 || gameSettings.mo == 4 || gameSettings.mo == 5) {
                        _0x693635.controlGuie_2.visible = true;
                      }
                      if (gameSettings.mo == 3) {
                        _0x693635.controlGuie_3.visible = true;
                      }
                      if (gameSettings.mo == 4 || gameSettings.mo == 5) {
                        _0x693635.controlSpeedIMG.visible = true;
                      }
                      _0x2834ec.Bn = false;
                    } else if (gameSettings.mo == 3) {
                      _0x2e12c1 = _0x693635.controlSpeedIMG.y + 100;
                      _0x4fa4b8 = _0x693635.controlSpeedIMG.x + 100;
                      _0x1eddfb = Math.atan2(_0x1181ec - _0x2e12c1, _0x5ef14d - _0x4fa4b8);
                      _0x2e60de = Math.cos(_0x1eddfb);
                      _0x513a8b = Math.sin(_0x1eddfb);
                      _0x25f1b3 = _0x4fa4b8 + _0x2e60de * 3 - 100;
                      _0x26c1ff = _0x2e12c1 + _0x513a8b * 3 - 100;
                      _0x3a3ab4 = _0x4fa4b8 - _0x5ef14d;
                      _0x37e557 = _0x2e12c1 - _0x1181ec;
                      _0x36b3a2 = Math.sqrt(_0x3a3ab4 * _0x3a3ab4 + _0x37e557 * _0x37e557);
                      if (_0x36b3a2 >= 40) {
                        _0x693635.controlSpeedIMG.y = _0x25f1b3;
                        _0x693635.controlSpeedIMG.x = _0x26c1ff;
                      }
                    }
                  }
                }
              }
            }
          } else if (!mobileAndTabletCheck() || !gameSettings.gamePad.checked) {
            if (_0xf02089 = _0xf02089 || window.event) {
              _0xf02089 = _0xf02089.touches[0];
              if (_0xf02089.clientX !== undefined) {
                _0x2834ec.Bn = Math.atan2(_0xf02089.clientY - _0x572552.offsetHeight * 0.5, _0xf02089.clientX - _0x572552.offsetWidth * 0.5);
              } else {
                _0x2834ec.Bn = Math.atan2(_0xf02089.pageY - _0x572552.offsetHeight * 0.5, _0xf02089.pageX - _0x572552.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        _0x572552.addEventListener("touchstart", function (_0x33fadc) {
          if (_wrmxt.ismobile && gameSettings.mo != 6) {
            var _0x5432e4 = window.anApp.og.af.ng.Tg;
            var _0x3750e0 = btoa(gameSettings.c_4);
            var _0x4aa110 = _0x572552.offsetHeight;
            var _0x12be7a = btoa(gameSettings.c_3);
            var _0x1e39b4 = _0x572552.offsetWidth;
            var _0x5b666f = btoa(gameSettings.c_5);
            _0x33fadc = _0x33fadc || window.event;
            var _0x4dc175 = _0x33fadc.touches.item(0).pageX;
            var _0x4eb0c6 = btoa(gameSettings.c_2);
            var _0x48dc95 = _0x33fadc.touches.item(0).pageY;
            var _0x4d7bbe = _0x33fadc.touches.length;
            var _0x2335b0 = btoa(gameSettings.c_1);
            var _0xb006f6 = _0x33fadc.touches.item(0).identifier;
            for (let _0x11dc0d = 0; _0x11dc0d < _0x4d7bbe; _0x11dc0d++) {
              if (gameSettings.mo2.x == -1 && gameSettings.mo2.y != -1) {
                if (_0x33fadc.touches.item(_0x11dc0d).identifier != gameSettings.mo2.y) {
                  _0x4dc175 = _0x33fadc.touches.item(_0x11dc0d).pageX;
                  _0x48dc95 = _0x33fadc.touches.item(_0x11dc0d).pageY;
                  _0xb006f6 = _0x33fadc.touches.item(_0x11dc0d).identifier;
                }
              } else {
                _0x4dc175 = _0x33fadc.touches.item(_0x11dc0d).pageX;
                _0x48dc95 = _0x33fadc.touches.item(_0x11dc0d).pageY;
                _0xb006f6 = _0x33fadc.touches.item(_0x11dc0d).identifier;
              }
            }
            var _0x3c4a82 = 0;
            if (gameSettings.mo == 4 || gameSettings.mo == 5) {
              _0x3c4a82 = Math.sqrt((_0x4dc175 - _0x5432e4.controlSpeedIMG.x - 100) * (_0x4dc175 - _0x5432e4.controlSpeedIMG.x - 100) + (_0x48dc95 - _0x5432e4.controlSpeedIMG.y - 100) * (_0x48dc95 - _0x5432e4.controlSpeedIMG.y - 100));
            }
            if (_0x4d7bbe == 1 && (gameSettings.mo == 4 && _0x3c4a82 > 40 || gameSettings.mo != 4) && (gameSettings.mo == 5 && _0x3c4a82 > 40 || gameSettings.mo != 5)) {
              gameSettings.mo2.y = -1;
              _0x5432e4.controlSpeedIMG.visible = false;
              _0x5432e4.controlGuie_Speed.visible = false;
              if (gameSettings.mo == 1) {
                _0x5432e4.controlGuie_1.alpha = 0.25;
                _0x5432e4.controlGuie_1.visible = true;
              }
              if (gameSettings.mo == 2) {
                _0x5432e4.controlJoystick_1.alpha = 0.25;
                _0x5432e4.controlJoystick_Circle_1.alpha = 0.25;
                _0x5432e4.controlGuie_2.alpha = 0.25;
                _0x5432e4.controlGuie_2.visible = true;
              }
              if (gameSettings.mo == 3) {
                _0x5432e4.controlJoystick_2.alpha = 0.25;
                _0x5432e4.controlJoystick_Circle_2.alpha = 0.25;
                _0x5432e4.controlGuie_3.alpha = 0.25;
                _0x5432e4.controlGuie_3.visible = true;
              }
              if (gameSettings.mo == 4 || gameSettings.mo == 5) {
                _0x5432e4.controlGuie_2.alpha = 0.25;
                _0x5432e4.controlGuie_2.visible = true;
                _0x5432e4.controlSpeedIMG.visible = true;
              }
              _0x2834ec.An = false;
            }
            if (gameSettings.mo1.x == -1 && gameSettings.mo1.y == -1 && (gameSettings.mo == 4 && _0x3c4a82 > 40 || gameSettings.mo != 4) && (gameSettings.mo == 5 && _0x3c4a82 > 40 || gameSettings.mo != 5)) {
              gameSettings.mo1.x = _0xb006f6;
              if (gameSettings.mo1.x == gameSettings.mo2.y && gameSettings.mo1.y == gameSettings.mo2.x) {
                _0x4dc175 = _0x33fadc.touches.item(1).pageX;
                _0x48dc95 = _0x33fadc.touches.item(1).pageY;
              }
              var _0xa9716d = _0x1e39b4 * 0.5 - 68;
              var _0x116ea8 = _0x4aa110 * 0.5 - 68;
              var _0x3c0701 = _0x4dc175 - 110;
              var _0x3e9ceb = _0x48dc95 - 110;
              var _0x26221d = _0x4dc175 - 85;
              var _0x590969 = _0x48dc95 - 85;
              if (gameSettings.mo == 1) {
                if (gameSettings.mo2.x == -1 && gameSettings.mo2.y == -1) {
                  _0x5432e4.controlGuie_1.alpha = 1;
                  _0x5432e4.controlGuie_1.x = _0xa9716d;
                  _0x5432e4.controlGuie_1.y = _0x116ea8;
                  _0x5432e4.controlGuie_1.visible = true;
                }
              }
              if (gameSettings.mo == 2) {
                _0x5432e4.controlJoystick_1.alpha = 1;
                _0x5432e4.controlJoystick_1.x = _0x3c0701;
                _0x5432e4.controlJoystick_1.y = _0x3e9ceb;
                _0x5432e4.controlJoystick_Circle_1.alpha = 1;
                _0x5432e4.controlJoystick_Circle_1.x = _0x26221d;
                _0x5432e4.controlJoystick_Circle_1.y = _0x590969;
                if (gameSettings.mo2.x == -1 && gameSettings.mo2.y == -1) {
                  _0x5432e4.controlGuie_2.alpha = 1;
                  _0x5432e4.controlGuie_2.x = _0xa9716d;
                  _0x5432e4.controlGuie_2.y = _0x116ea8;
                  _0x5432e4.controlGuie_2.visible = true;
                }
              }
              if (gameSettings.mo == 3) {
                _0x5432e4.controlJoystick_2.alpha = 1;
                _0x5432e4.controlJoystick_2.x = _0x3c0701;
                _0x5432e4.controlJoystick_2.y = _0x3e9ceb;
                _0x5432e4.controlJoystick_Circle_2.alpha = 1;
                _0x5432e4.controlJoystick_Circle_2.x = _0x26221d;
                _0x5432e4.controlJoystick_Circle_2.y = _0x590969;
                if (gameSettings.mo2.x == -1 && gameSettings.mo2.y == -1) {
                  _0x5432e4.controlGuie_3.alpha = 1;
                  _0x5432e4.controlGuie_3.x = _0xa9716d;
                  _0x5432e4.controlGuie_3.y = _0x116ea8;
                  _0x5432e4.controlGuie_3.visible = true;
                }
              }
              if (gameSettings.mo == 4) {
                if (gameSettings.mo2.x == -1 && gameSettings.mo2.y == -1) {
                  _0x5432e4.controlGuie_2.alpha = 1;
                  _0x5432e4.controlGuie_2.x = _0xa9716d;
                  _0x5432e4.controlGuie_2.y = _0x116ea8;
                  _0x5432e4.controlGuie_2.visible = true;
                }
              }
              if (gameSettings.mo == 5) {
                if (gameSettings.mo2.x == -1 && gameSettings.mo2.y == -1) {
                  _0x5432e4.controlGuie_2.alpha = 1;
                  _0x5432e4.controlGuie_2.x = _0xa9716d;
                  _0x5432e4.controlGuie_2.y = _0x116ea8;
                  _0x5432e4.controlGuie_2.visible = true;
                }
              }
            } else if (_0x4d7bbe >= 2 && gameSettings.mo2.x == -1 && gameSettings.mo2.y == -1 || _0x4d7bbe == 1 && gameSettings.mo == 4 && _0x3c4a82 <= 40 || _0x4d7bbe == 1 && gameSettings.mo == 5 && _0x3c4a82 <= 40) {
              gameSettings.mo2.y = _0xb006f6;
              _0x5432e4.controlSpeedIMG.visible = true;
              _0x5432e4.controlGuie_Speed.visible = true;
              if (gameSettings.mo == 1) {
                _0x5432e4.controlGuie_1.visible = false;
                _0x5432e4.controlGuie_Speed.x = _0x5432e4.controlGuie_1.x;
                _0x5432e4.controlGuie_Speed.y = _0x5432e4.controlGuie_1.y;
              }
              if (gameSettings.mo == 2 || gameSettings.mo == 4 || gameSettings.mo == 5) {
                _0x5432e4.controlGuie_2.visible = false;
                _0x5432e4.controlGuie_Speed.x = _0x5432e4.controlGuie_2.x;
                _0x5432e4.controlGuie_Speed.y = _0x5432e4.controlGuie_2.y;
              }
              if (gameSettings.mo == 3) {
                _0x5432e4.controlGuie_3.visible = false;
                _0x5432e4.controlGuie_Speed.x = _0x5432e4.controlGuie_3.x;
                _0x5432e4.controlGuie_Speed.y = _0x5432e4.controlGuie_3.y;
              }
              if (gameSettings.mo != 4 && gameSettings.mo != 5) {
                _0x5432e4.controlSpeedIMG.x = _0x4dc175 - 100;
                _0x5432e4.controlSpeedIMG.y = _0x48dc95 - 100;
              }
              _0x2834ec.An = true;
            }
            _0x33fadc.preventDefault();
          } else {
            if (_0x33fadc = _0x33fadc || window.event) {
              _0x2834ec.An = _0x33fadc.touches.length >= 2;
            }
            _0x33fadc.preventDefault();
          }
        }, true);
        _0x572552.addEventListener("touchend", function (_0x553a7d) {
          if (_wrmxt.ismobile && gameSettings.mo != 6) {
            var _0x3278d0 = window.anApp.og.af.ng.Tg;
            var _0x51c65a = btoa(gameSettings.c_1);
            if (_0x553a7d = _0x553a7d || window.event) {
              _0x553a7d = _0x553a7d.changedTouches[0];
              if (_0x553a7d.clientX !== undefined) {
                _0x6286xb8(_0x553a7d.clientX, _0x553a7d.clientY);
              } else {
                _0x6286xb8(_0x553a7d.pageX, _0x553a7d.pageY);
              }
            }
            console.log(_0x553a7d.clientX, _0x553a7d.clientY);
            var _0x3ea028 = btoa(gameSettings.c_2);
            var _0x5dd84b = _0x553a7d.identifier;
            if (_0x5dd84b == gameSettings.mo1.x && gameSettings.mo1.y == -1) {
              gameSettings.mo1.x = -1;
              if (gameSettings.mo == 1) {
                _0x3278d0.controlGuie_1.alpha = 0.25;
              }
              if (gameSettings.mo == 2) {
                _0x3278d0.controlJoystick_1.alpha = 0.25;
                _0x3278d0.controlJoystick_Circle_1.alpha = 0.25;
                _0x3278d0.controlGuie_2.alpha = 0.25;
              }
              if (gameSettings.mo == 3) {
                _0x3278d0.controlJoystick_2.alpha = 0.25;
                _0x3278d0.controlJoystick_Circle_2.alpha = 0.25;
                _0x3278d0.controlGuie_3.alpha = 0.25;
              }
              if (gameSettings.mo == 4) {
                _0x3278d0.controlGuie_2.alpha = 0.25;
              }
              if (gameSettings.mo == 5) {
                _0x3278d0.controlGuie_2.alpha = 0.25;
              }
            }
            var _0x5cb42d = btoa(gameSettings.c_3);
            if (gameSettings.mo2.x == -1 && _0x5dd84b == gameSettings.mo2.y) {
              gameSettings.mo2.y = -1;
              _0x3278d0.controlSpeedIMG.visible = false;
              _0x3278d0.controlGuie_Speed.visible = false;
              if (gameSettings.mo == 1) {
                _0x3278d0.controlGuie_1.visible = true;
              }
              if (gameSettings.mo == 2 || gameSettings.mo == 4 || gameSettings.mo == 5) {
                _0x3278d0.controlGuie_2.visible = true;
              }
              if (gameSettings.mo == 3) {
                _0x3278d0.controlGuie_3.visible = true;
              }
              if (gameSettings.mo == 4 || gameSettings.mo == 5) {
                _0x3278d0.controlSpeedIMG.visible = true;
              }
              _0x2834ec.An = false;
            }
          } else {
            if (_0x553a7d = _0x553a7d || window.event) {
              _0x2834ec.An = _0x553a7d.touches.length >= 2;
            }
            if (_wrmxt.ismobile && gameSettings.mo == 6) {
              if (_0x553a7d = _0x553a7d || window.event) {
                _0x553a7d = _0x553a7d.changedTouches[0];
                if (_0x553a7d.clientX !== undefined) {
                  _0x6286xb8(_0x553a7d.clientX, _0x553a7d.clientY);
                } else {
                  _0x6286xb8(_0x553a7d.pageX, _0x553a7d.pageY);
                }
              }
            }
          }
        }, true);
        _0x572552.addEventListener("mousemove", function (_0x57e14a) {
          if (_0x57e14a = _0x57e14a || window.event && _0x57e14a.clientX !== undefined) {
            _0x2834ec.Bn = Math.atan2(_0x57e14a.clientY - _0x572552.offsetHeight * 0.5, _0x57e14a.clientX - _0x572552.offsetWidth * 0.5);
          }
        }, true);
        _0x572552.addEventListener("mousedown", function (_0x5a9dd9) {
          _0x2834ec.An = true;
        }, true);
        _0x572552.addEventListener("mouseup", function (_0x55400b) {
          _0x2834ec.An = false;
        }, true);
        this.ng = new Game.Eg(Game.kf.kn);
        this.Cn = 0;
        this.Bn = 0;
        this.An = false;
        theoEvents.eventoPrincipal = _0x2834ec;
      });
      _0x1dfda5.prototype.ha = function () {};
      _0x1dfda5.prototype.Gk = function () {
        if (this.Cn === 0) {
          Game.kf.jn.stop();
          Game.kf.jn.fadeIn(500);
          Game.kf.ln.stop();
          Game.kf.ln.fadeOut(1);
          Game.kf.nn.stop();
          Game.kf.nn.fadeOut(50);
          Game.kf.pn.stop();
          Game.kf.pn.fadeOut(50);
          Game.kf.sn.stop();
          Game.kf.sn.fadeOut(50);
          Game.kf.qn.stop();
          Game.kf.qn.fadeOut(50);
          Game.kf.rn.stop();
          Game.kf.rn.fadeOut(50);
          Game.kf.tn.stop();
          Game.kf.tn.fadeOut(50);
          Game.kf.un.stop();
          Game.kf.un.fadeOut(50);
          Game.kf.mn.stop();
          Game.kf.mn.fadeOut(1);
          Game.kf.jf.stop();
          Game.kf.jf.fadeOut(50);
          Game.df.Kf(false);
          Game.kf.in.stop();
          Game.kf.in.fadeOut(50);
          Game.kf.vn.stop();
          Game.kf.vn.fadeOut(50);
        } else {
          Game.kf.jn.stop();
          Game.kf.jn.fadeIn(500);
          Game.kf.ln.stop();
          Game.kf.ln.fadeIn(500);
          Game.kf.nn.stop();
          Game.kf.nn.fadeOut(50);
          Game.kf.pn.stop();
          Game.kf.pn.fadeOut(50);
          Game.kf.sn.stop();
          Game.kf.sn.fadeOut(50);
          Game.kf.qn.stop();
          Game.kf.qn.fadeOut(50);
          Game.kf.rn.stop();
          Game.kf.rn.fadeOut(50);
          Game.kf.tn.stop();
          Game.kf.tn.fadeOut(50);
          Game.kf.un.stop();
          Game.kf.un.fadeOut(50);
          Game.kf.mn.stop();
          Game.kf.mn.fadeOut(1);
          Game.kf.jf.stop();
          Game.kf.jf.fadeOut(50);
          Game.df.Kf(false);
          Game.kf.in.stop();
          Game.kf.in.fadeOut(50);
          Game.kf.vn.stop();
          Game.kf.vn.fadeOut(50);
        }
      };
      _0x1dfda5.prototype.Dn = function () {
        this.Cn = 0;
        return this;
      };
      _0x1dfda5.prototype.En = function () {
        _0x53d18d.hide();
        setTimeout(function () {
          _0x53d18d.fadeIn(500);
        }, 3000);
        _0x1d9fc4.hide();
        setTimeout(function () {
          _0x1d9fc4.fadeIn(500);
        }, 500);
        this.Cn = 1;
        return this;
      };
      _0x1dfda5.prototype.Hk = function () {
        this.An = false;
        this.ng.Jf();
        if (this.Cn === 1) {
          _0x3b5dc5().Ci.Fe();
        }
      };
      _0x1dfda5.prototype.Jf = function () {
        this.ng.Jf();
      };
      _0x1dfda5.prototype.Nf = function (_0x57d083, _0x360b7f) {
        this.ng.Nf(_0x57d083, _0x360b7f);
      };
      _0x1dfda5.prototype.Fn = function (_0x118279, _0x11b0a1, _0x5a7d10) {
        var _0x487c6d = undefined;
        var _0x46ecb7 = undefined;
        var _0xb9474a = undefined;
        if (_0x11b0a1 >= 1 && _0x11b0a1 <= 10) {
          _0x487c6d = getRandomElement.H("index.game.result.place.i" + _0x11b0a1);
          _0x46ecb7 = getRandomElement.H("index.game.result.placeInBoard");
          _0xb9474a = getRandomElement.H("index.game.social.shareResult.messGood").replace("{0}", _0x5a7d10).replace("{1}", _0x118279).replace("{2}", _0x487c6d);
        } else {
          _0x487c6d = "";
          _0x46ecb7 = getRandomElement.H("index.game.result.tryHit");
          _0xb9474a = getRandomElement.H("index.game.social.shareResult.messNorm").replace("{0}", _0x5a7d10).replace("{1}", _0x118279);
        }
        _0x1934ff.html(getRandomElement.H("index.game.result.your"));
        _0x390ee0.html(_0x118279);
        _0x409440.html(_0x487c6d);
        _0x282def.html(_0x46ecb7);
        if (_0x358a76.xn) {
          var _0x585b66 = getRandomElement.H("index.game.result.share");
          getRandomElement.H("index.game.social.shareResult.caption");
          _0xaa3888.empty().append(_0x5e3252(_0x585b66, "https://wormate.io", "wormate.io", _0xb9474a, _0xb9474a, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x1dfda5.prototype.Gn = function () {
        return this.Bn;
      };
      _0x1dfda5.prototype.Hn = function () {
        return this.An;
      };
      return _0x1dfda5;
    }();
    Game.sk = function () {
      var _0x409fac = $("#loading-progress-cont");
      var _0x3cd4ac = $("#loading-progress-bar");
      var _0x59e37e = $("#loading-progress-text");
      var _0x4fc647 = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
        this.In = -1;
        this.Jn = "";
      });
      _0x4fc647.prototype.ha = function () {};
      _0x4fc647.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(50);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(50);
        Game.kf.qn.stop();
        Game.kf.qn.fadeIn(500);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(50);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(50);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(50);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeOut(50);
        Game.kf.vn.stop();
        Game.kf.vn.fadeOut(50);
      };
      _0x4fc647.prototype.Hk = function () {
        _0x3b5dc5().Ci.pe(Game.ge.je.ie);
        _0x3b5dc5().og.Uj.Pf();
        _0x3b5dc5().og.Uj.Lf(true);
      };
      _0x4fc647.prototype.Bk = function () {
        _0x3b5dc5().og.Uj.Lf(false);
      };
      _0x4fc647.prototype.Kn = function () {
        this.Ln("", 0);
        _0x409fac.stop();
        _0x409fac.fadeIn(100);
      };
      _0x4fc647.prototype.Mn = function () {
        _0x409fac.stop();
        _0x409fac.fadeOut(100);
      };
      _0x4fc647.prototype.Ln = function (_0x1ab8dc, _0x538750) {
        if (this.Jn !== _0x1ab8dc) {
          this.Jn = _0x1ab8dc;
        }
        var _0x3968bf = getRandomElement.P(Math.floor(_0x538750 * 100), 0, 100);
        if (this.In !== _0x3968bf) {
          _0x3cd4ac.css({
            width: _0x3968bf + "%"
          });
          _0x59e37e.html(_0x3968bf + " %");
        }
      };
      return _0x4fc647;
    }();
    Game.Wj = function () {
      var _0x3b3e8d = $("#mm-line-top");
      $("#mm-line-center");
      $("#mm-line-bottom");
      var _0x6561bc = $("#mm-bottom-buttons");
      var _0x55affc = $("#mm-menu-cont");
      var _0x2c463c = $("#mm-loading");
      var _0x367d6 = $("#mm-loading-progress-bar");
      var _0x1d2ba7 = $("#mm-loading-progress-text");
      $("#mm-event-text");
      var _0x5450ac = $("#mm-skin-canv");
      var _0x154b93 = $("#mm-skin-prev");
      var _0x559ac7 = $("#mm-skin-next");
      var _0x2c5b50 = $("#mm-skin-over");
      var _0x3bca33 = $("#mm-skin-over-button-list");
      var _0x4a439a = $("#mm-params-nickname");
      var _0x20c551 = $("#mm-params-game-mode");
      var _0x120217 = $("#mm-action-play");
      var _0x371742 = $("#mm-action-guest");
      var _0x5f29ee = $("#mm-action-login");
      var _0x425c69 = $("#mm-player-info");
      var _0x517214 = $("#mm-store");
      var _0x4a17e2 = $("#mm-leaders");
      var _0x2bb66b = $("#mm-settings");
      var _0x5f49d7 = $("#mm-coins-box");
      var _0x28f86c = $("#mm-player-avatar");
      var _0x5503d4 = $("#mm-player-username");
      var _0x3a516f = $("#mm-coins-val");
      var _0x288264 = $("#mm-player-exp-bar");
      var _0x1c3728 = $("#mm-player-exp-val");
      var _0x58961e = $("#mm-player-level");
      var _0x169904 = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.Ek);
        var _0x13def3 = _0x3b5dc5();
        this.In = -1;
        this.Jn = "";
        this.Nn = new Game.dm(_0x5450ac);
        _0x20c551.click(function () {
          _0x13def3.Ci.Be();
        });
        _0x5450ac.click(function () {
          if (_0x13def3.Ij.Hj()) {
            _0x13def3.Ci.Be();
            _0x13def3.og.Ak(_0x13def3.og.ik);
          }
        });
        _0x154b93.click(function () {
          _0x13def3.Ci.Be();
          _0x13def3.On.Ej();
        });
        _0x559ac7.click(function () {
          _0x13def3.Ci.Be();
          _0x13def3.On.Dj();
        });
        _0x4a439a.keypress(function (_0x24b3f6) {
          if (_0x24b3f6.keyCode == 13) {
            _0x13def3.Pn();
          }
        });
        _0x120217.click(function () {
          _0x13def3.Ci.Be();
          _0x13def3.Pn();
        });
        _0x371742.click(function () {
          _0x13def3.Ci.Be();
          _0x13def3.Pn();
        });
        _0x5f29ee.click(function () {
          _0x13def3.Ci.Be();
          _0x13def3.og.Ak(_0x13def3.og.fk);
        });
        _0x2bb66b.click(function () {
          _0x13def3.Ci.Be();
          _0x13def3.og.Ak(_0x13def3.og.$h);
        });
        _0x425c69.click(function () {
          if (_0x13def3.Ij.Hj()) {
            _0x13def3.Ci.Be();
            _0x13def3.og.Ak(_0x13def3.og.dk);
          }
        });
        _0x4a17e2.click(function () {
          if (_0x13def3.Ij.Hj()) {
            _0x13def3.Ci.Be();
            _0x13def3.og.Ak(_0x13def3.og.bk);
          }
        });
        _0x517214.click(function () {
          if (_0x13def3.Ij.Hj()) {
            _0x13def3.Ci.Be();
            _0x13def3.og.Ak(_0x13def3.og.kk);
          }
        });
        _0x5f49d7.click(function () {
          if (_0x13def3.Ij.Hj()) {
            _0x13def3.Ci.Be();
            _0x13def3.og.Ak(_0x13def3.og._j);
          }
        });
        this.Qn();
        this.Rn();
        var _0x2983c2 = Game.Vf.fg(Game.Vf._f);
        if (_0x2983c2 !== "ARENA" && _0x2983c2 !== "TEAM2") {
          _0x2983c2 = "ARENA";
        }
        _0x20c551.val(_0x2983c2);
      });
      _0x169904.prototype.ha = function () {
        var _0x29044f = _0x3b5dc5();
        var _0x189b78 = this;
        _0x29044f.Ij.zl(function () {
          if (_0x29044f.Ij.Hj()) {
            _0x29044f.On.Fj(_0x29044f.Ij.ml(), Game.tj.sj);
            _0x29044f.On.Fj(_0x29044f.Ij.nl(), Game.tj.uj);
            _0x29044f.On.Fj(_0x29044f.Ij.ol(), Game.tj.vj);
            _0x29044f.On.Fj(_0x29044f.Ij.pl(), Game.tj.xj);
            _0x29044f.On.Fj(_0x29044f.Ij.ql(), Game.tj.wj);
          } else {
            _0x29044f.On.Fj(_0x29044f.Sn(), Game.tj.sj);
            _0x29044f.On.Fj(0, Game.tj.uj);
            _0x29044f.On.Fj(0, Game.tj.vj);
            _0x29044f.On.Fj(0, Game.tj.xj);
            _0x29044f.On.Fj(0, Game.tj.wj);
          }
        });
        _0x29044f.Ij.zl(function () {
          _0x120217.toggle(_0x29044f.Ij.Hj());
          _0x5f29ee.toggle(!_0x29044f.Ij.Hj());
          _0x425c69.toggle(true);
          _0x371742.toggle(!_0x29044f.Ij.Hj());
          _0x2bb66b.toggle(true);
          _0x4a17e2.toggle(_0x29044f.Ij.Hj());
          _0x517214.toggle(_0x29044f.Ij.Hj());
          _0x5f49d7.toggle(_0x29044f.Ij.Hj());
          if (_0x29044f.Ij.Hj()) {
            _0x2c5b50.hide();
            _0x5503d4.html(_0x29044f.Ij.dl());
            _0x28f86c.attr("src", _0x29044f.Ij.fl());
            _0x3a516f.html(_0x29044f.Ij.il());
            _0x288264.width(_0x29044f.Ij.kl() * 100 / _0x29044f.Ij.ll() + "%");
            _0x1c3728.html(_0x29044f.Ij.kl() + " / " + _0x29044f.Ij.ll());
            _0x58961e.html(_0x29044f.Ij.jl());
            _0x4a439a.val(_0x29044f.Ij.el());
          } else {
            _0x2c5b50.toggle(_0x358a76.xn && !_0x29044f.Tn());
            _0x5503d4.html(_0x5503d4.data("guest"));
            _0x28f86c.attr("src", getRandomElement.a.e);
            _0x3a516f.html("10");
            _0x288264.width("0");
            _0x1c3728.html("");
            _0x58961e.html(1);
            _0x4a439a.val(Game.Vf.fg(Game.Vf.ag));
          }
        });
        _0x29044f.On.zj(function () {
          _0x189b78.Nn.$l(_0x29044f.On.yj());
        });
      };
      _0x169904.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeIn(500);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(50);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(50);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(50);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(50);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(50);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeIn(500);
        Game.kf.vn.stop();
        Game.kf.vn.fadeIn(500);
      };
      _0x169904.prototype.Un = function () {
        _0x3b3e8d.fadeIn(500);
        _0x6561bc.fadeIn(500);
        _0x55affc.fadeIn(500);
        _0x2c463c.fadeOut(100);
      };
      _0x169904.prototype.Vn = function () {
        _0x3b3e8d.fadeOut(100);
        _0x6561bc.fadeOut(100);
        _0x55affc.fadeOut(100);
        _0x2c463c.fadeIn(500);
      };
      _0x169904.prototype.Ln = function (_0x6bacb0, _0x1196d2) {
        if (this.Jn !== _0x6bacb0) {
          this.Jn = _0x6bacb0;
        }
        var _0x4eed1f = getRandomElement.P(Math.floor(_0x1196d2 * 100), 0, 100);
        if (this.In !== _0x4eed1f) {
          _0x367d6.css({
            width: _0x4eed1f + "%"
          });
          _0x1d2ba7.html(_0x4eed1f + " %");
        }
      };
      _0x169904.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ce();
        this.Nn.Kf(true);
      };
      _0x169904.prototype.Bk = function () {
        this.Nn.Kf(false);
      };
      _0x169904.prototype.Jf = function () {
        this.Nn.Jf();
      };
      _0x169904.prototype.Nf = function (_0xd9a7b6, _0x462bc1) {
        this.Nn.Nf();
      };
      _0x169904.prototype.el = function () {
        return _0x4a439a.val();
      };
      _0x169904.prototype.Wn = function () {
        return _0x20c551.val();
      };
      _0x169904.prototype.Qn = function () {
        var _0x21f181 = $("#mm-advice-cont").children();
        var _0x252d16 = 0;
        setInterval(function () {
          _0x21f181.eq(_0x252d16).fadeOut(500, function () {
            if (++_0x252d16 >= _0x21f181.length) {
              _0x252d16 = 0;
            }
            _0x21f181.eq(_0x252d16).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      _0x169904.prototype.Rn = function () {
        function _0x21624c() {
          _0x3d81d4.Xn(true);
          setTimeout(function () {
            _0x2c5b50.hide();
          }, 3000);
        }
        var _0x3d81d4 = _0x3b5dc5();
        if (_0x358a76.xn && !_0x3d81d4.Tn()) {
          _0x2c5b50.show();
          var _0x23af70 = getRandomElement.H("index.game.main.menu.unlockSkins.share");
          var _0xf34509 = encodeURIComponent(getRandomElement.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var _0x2af620 = encodeURIComponent(getRandomElement.H("index.game.main.menu.unlockSkins.comeAndPlay"));
          _0x3bca33.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0xf34509 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x23af70 + "</span></a>").click(_0x21624c));
          _0x3bca33.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x2af620 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x23af70 + "</span></a>").click(_0x21624c));
        }
      };
      return _0x169904;
    }();
    Game.yk = function () {
      var _0x1bb1fe = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
      });
      _0x1bb1fe.prototype.ha = function () {};
      _0x1bb1fe.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(50);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(50);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(50);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(50);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(50);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(50);
        Game.kf.mn.stop();
        Game.kf.mn.fadeOut(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeOut(50);
        Game.df.Kf(false);
        Game.kf.in.stop();
        Game.kf.in.fadeOut(50);
        Game.kf.vn.stop();
        Game.kf.vn.fadeOut(50);
      };
      return _0x1bb1fe;
    }();
    Game.pk = function () {
      var _0x404f2e = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
      });
      _0x404f2e.prototype.ha = function () {};
      _0x404f2e.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(50);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(50);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(50);
        Game.kf.rn.stop();
        Game.kf.rn.fadeIn(500);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(50);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(50);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeOut(50);
        Game.kf.vn.stop();
        Game.kf.vn.fadeOut(50);
      };
      _0x404f2e.prototype.Hk = function () {};
      return _0x404f2e;
    }();
    Game.rk = function () {
      var _0x1616d2 = $("#toaster-stack");
      var _0x4f6b7c = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
        this.Yn = [];
        this.Zn = null;
      });
      _0x4f6b7c.prototype.ha = function () {};
      _0x4f6b7c.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(50);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeIn(500);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(50);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(50);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(50);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(50);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeOut(50);
        Game.kf.vn.stop();
        Game.kf.vn.fadeIn(500);
      };
      _0x4f6b7c.prototype.Hk = function () {
        this.$n();
      };
      _0x4f6b7c.prototype.Kk = function () {
        return this.Zn != null || this.Yn.length > 0;
      };
      _0x4f6b7c.prototype._n = function (_0x204886) {
        this.Yn.unshift(_0x204886);
        setTimeout(function () {
          _0x3b5dc5().og.Ik();
        }, 0);
      };
      _0x4f6b7c.prototype.El = function (_0x484840) {
        this.Yn.push(_0x484840);
        setTimeout(function () {
          _0x3b5dc5().og.Ik();
        }, 0);
      };
      _0x4f6b7c.prototype.$n = function () {
        var _0x3557f6 = this;
        if (this.Zn == null) {
          if (this.Yn.length == 0) {
            _0x3b5dc5().og.Dk();
            return;
          }
          var _0x328e56 = this.Yn.shift();
          this.Zn = _0x328e56;
          var _0x845d1 = _0x328e56.tf();
          _0x845d1.hide();
          _0x845d1.fadeIn(300);
          _0x1616d2.append(_0x845d1);
          _0x328e56.ao = function () {
            _0x845d1.fadeOut(300);
            setTimeout(function () {
              _0x845d1.remove();
            }, 300);
            if (_0x3557f6.Zn == _0x328e56) {
              _0x3557f6.Zn = null;
            }
            _0x3557f6.$n();
          };
          _0x328e56.Hk();
        }
      };
      return _0x4f6b7c;
    }();
    Game.Fk = {
      wn: 0,
      Ek: 1
    };
    Game.bo = function () {
      var _0x3dbc50 = $("#popup-menu-label");
      var _0x32a045 = $("#popup-menu-coins-box");
      var _0x4e91e3 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x10cbff = _0x3b5dc5();
        _0x10cbff.Ci.Be();
        _0x10cbff.og.Dk();
      });
      _0x32a045.click(function () {
        var _0x487788 = _0x3b5dc5();
        if (_0x487788.Ij.Hj()) {
          _0x487788.Ci.Be();
          _0x487788.og.Ak(_0x487788.og._j);
        }
      });
      var _0x497b8f = getRandomElement.M(Game.kf, function (_0x3d25d7, _0x3c1553) {
        Game.kf.call(this, Game.Fk.Ek);
        this.ma = _0x3d25d7;
        this.co = _0x3c1553;
        this.do = [];
      });
      _0x497b8f.prototype.ha = function () {
        _0x497b8f.parent.prototype.ha.call(this);
        if (!_0x497b8f.eo) {
          _0x497b8f.eo = true;
          var _0x4f2dbc = _0x3b5dc5();
          _0x4f2dbc.Ij.zl(function () {
            if (_0x4f2dbc.Ij.Hj()) {
              _0x4e91e3.html(_0x4f2dbc.Ij.il());
            } else {
              _0x4e91e3.html("0");
            }
          });
        }
        Game.bo.fo.stop();
        Game.bo.fo.fadeOut(100);
      };
      _0x497b8f.go = $("#coins-view");
      _0x497b8f.ho = $("#leaders-view");
      _0x497b8f.io = $("#profile-view");
      _0x497b8f.jo = $("#settings-view");
      _0x497b8f.ko = $("#login-view");
      _0x497b8f.lo = $("#skins-view");
      _0x497b8f.mo = $("#store-view");
      _0x497b8f.no = $("#wear-view");
      _0x497b8f.oo = $("#withdraw-consent-view");
      _0x497b8f.po = $("#delete-account-view");
      _0x497b8f.fo = $("#please-wait-view");
      _0x497b8f.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(200);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(200);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(200);
        Game.kf.pn.stop();
        Game.kf.pn.fadeIn(200);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(200);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(200);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(200);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(200);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(200);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeIn(200);
        Game.kf.vn.stop();
        Game.kf.vn.fadeIn(200);
        _0x3dbc50.html(this.ma);
        _0x32a045.toggle(this.co);
        this.qo();
      };
      _0x497b8f.prototype.qo = function () {};
      _0x497b8f.prototype.ro = function (_0x1d8514) {
        var _0x5521b4 = this;
        var _0x3afb20 = getRandomElement.V(0, 2147483647) & 2147483647;
        this.do.push(_0x3afb20);
        Game.bo.fo.stop();
        Game.bo.fo.fadeIn(100);
        setTimeout(function () {
          _0x5521b4.so(_0x3afb20);
        }, _0x1d8514);
        return new _0x2ce8f2(this, _0x3afb20);
      };
      _0x497b8f.prototype.so = function (_0x5831b9) {
        var _0x711714 = this.do.indexOf(_0x5831b9);
        if (!(_0x711714 < 0)) {
          this.do.splice(_0x711714, 1);
          if (this.do.length === 0) {
            Game.bo.fo.stop();
            Game.bo.fo.fadeOut(100);
          }
        }
      };
      return _0x497b8f;
    }();
    var _0x2ce8f2 = function () {
      function _0xde1b6a(_0x1af0af, _0x5cecb1) {
        this.to = _0x1af0af;
        this.uo = _0x5cecb1;
      }
      _0xde1b6a.prototype.vo = function () {
        this.to.so(this.uo);
      };
      return _0xde1b6a;
    }();
    Game.ak = function () {
      var _0xd831fb = $("#store-buy-coins_125000");
      var _0x2863cb = $("#store-buy-coins_50000");
      var _0x387e73 = $("#store-buy-coins_16000");
      var _0x249ea3 = $("#store-buy-coins_7000");
      var _0x24fc8e = $("#store-buy-coins_3250");
      var _0x52e1b6 = $("#store-buy-coins_1250");
      var _0x53a4cb = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.coins.tab"), false);
        var _0x14a2ac = _0x3b5dc5();
        var _0x592476 = this;
        _0xd831fb.click(function () {
          _0x14a2ac.Ci.Be();
          _0x592476.wo("coins_125000");
        });
        _0x2863cb.click(function () {
          _0x14a2ac.Ci.Be();
          _0x592476.wo("coins_50000");
        });
        _0x387e73.click(function () {
          _0x14a2ac.Ci.Be();
          _0x592476.wo("coins_16000");
        });
        _0x249ea3.click(function () {
          _0x14a2ac.Ci.Be();
          _0x592476.wo("coins_7000");
        });
        _0x24fc8e.click(function () {
          _0x14a2ac.Ci.Be();
          _0x592476.wo("coins_3250");
        });
        _0x52e1b6.click(function () {
          _0x14a2ac.Ci.Be();
          _0x592476.wo("coins_1250");
        });
      });
      _0x53a4cb.prototype.ha = function () {
        _0x53a4cb.parent.prototype.ha.call(this);
      };
      _0x53a4cb.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeIn(200);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x53a4cb.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ce();
      };
      _0x53a4cb.prototype.wo = function (_0x41069b) {};
      return _0x53a4cb;
    }();
    Game.ck = function () {
      var _0xf729ff = $("#highscore-table");
      var _0x38966d = $("#leaders-button-level");
      var _0x19540a = $("#leaders-button-highscore");
      var _0x2cee56 = $("#leaders-button-kills");
      var _0xaa54e5 = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.leaders.tab"), true);
        var _0x318060 = _0x3b5dc5();
        var _0x275ce4 = this;
        this.xo = {};
        this.yo = {
          zo: {
            Ao: _0x38966d,
            Bo: "byLevel"
          },
          Co: {
            Ao: _0x19540a,
            Bo: "byHighScore"
          },
          Do: {
            Ao: _0x2cee56,
            Bo: "byKillsAndHeadShots"
          }
        };
        _0x38966d.click(function () {
          _0x318060.Ci.Be();
          _0x275ce4.Eo(_0x275ce4.yo.zo);
        });
        _0x19540a.click(function () {
          _0x318060.Ci.Be();
          _0x275ce4.Eo(_0x275ce4.yo.Co);
        });
        _0x2cee56.click(function () {
          _0x318060.Ci.Be();
          _0x275ce4.Eo(_0x275ce4.yo.Do);
        });
      });
      _0xaa54e5.prototype.ha = function () {
        _0xaa54e5.parent.prototype.ha.call(this);
      };
      _0xaa54e5.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeIn(200);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0xaa54e5.prototype.Hk = function () {
        var _0x50bbfb = this;
        _0x3b5dc5().Ci.Ce();
        var _0x12a087 = this.ro(5000);
        var _0x25179c = getRandomElement.a.b + "/pub/leaders";
        getRandomElement.Z(_0x25179c, function () {
          _0x50bbfb.xo = {
            byLevel: [],
            byHighScore: [],
            byKillsAndHeadShots: []
          };
          _0x50bbfb.Eo(_0x50bbfb.Fo ?? _0x50bbfb.yo.zo);
          _0x12a087.vo();
        }, function (_0x167761) {
          _0x50bbfb.xo = _0x167761;
          _0x50bbfb.Eo(_0x50bbfb.Fo ?? _0x50bbfb.yo.zo);
          _0x12a087.vo();
        });
      };
      _0xaa54e5.prototype.Eo = function (_0x209f32) {
        this.Fo = _0x209f32;
        for (var _0x540ed7 in this.yo) {
          if (this.yo.hasOwnProperty(_0x540ed7)) {
            var _0x4be5ae = this.yo[_0x540ed7];
            _0x4be5ae.Ao.removeClass("pressed");
          }
        }
        this.Fo.Ao.addClass("pressed");
        for (var _0x2a2f95 = this.xo[this.Fo.Bo], _0x23e362 = "", _0x4ef34c = 0; _0x4ef34c < _0x2a2f95.length; _0x4ef34c++) {
          var _0x538e50 = _0x2a2f95[_0x4ef34c];
          _0x23e362 += "<div class=\"table-row\"><span>" + (_0x4ef34c + 1) + "</span><span><img src=\"" + _0x538e50.avatarUrl + "\"/></span><span>" + _0x538e50.username + "</span><span>" + _0x538e50.level + "</span><span>" + _0x538e50.highScore + "</span><span>" + _0x538e50.headShots + " / " + _0x538e50.kills + "</span></div>";
        }
        _0xf729ff.empty();
        _0xf729ff.append(_0x23e362);
      };
      return _0xaa54e5;
    }();
    Game.gk = function () {
      var _0x40efce = $("#popup-login-gg");
      var _0x1acb20 = $("#popup-login-fb");
      var _0x1c95a9 = getRandomElement.M(Game.bo, function () {
        var _0x5e1ea6 = this;
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.login.tab"), false);
        var _0x4b0145 = _0x3b5dc5();
        _0x40efce.click(function () {
          _0x4b0145.Ci.Be();
          var _0x4cd56a = _0x5e1ea6.ro(10000);
          setTimeout(function () {
            _0x4b0145.Ij.Ml(function () {
              if (_0x4b0145.Ij.Hj()) {
                _0x4b0145.Ci.Fe();
              }
              _0x4cd56a.vo();
            });
          }, 500);
        });
        _0x1acb20.click(function () {
          _0x4b0145.Ci.Be();
          var _0x5356d3 = _0x5e1ea6.ro(10000);
          setTimeout(function () {
            _0x4b0145.Ij.Jl(function () {
              if (_0x4b0145.Ij.Hj()) {
                _0x4b0145.Ci.Fe();
              }
              _0x5356d3.vo();
            });
          }, 500);
        });
      });
      _0x1c95a9.prototype.ha = function () {
        _0x1c95a9.parent.prototype.ha.call(this);
      };
      _0x1c95a9.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeIn(200);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x1c95a9.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ce();
      };
      return _0x1c95a9;
    }();
    Game.ek = function () {
      var _0x1062ff = $("#profile-avatar");
      var _0xbb67e2 = $("#profile-username");
      var _0x3803f3 = $("#profile-experience-bar");
      var _0x5b1657 = $("#profile-experience-val");
      var _0x162dc1 = $("#profile-level");
      var _0x1b93a6 = $("#profile-stat-highScore");
      var _0x25c3bf = $("#profile-stat-bestSurvivalTime");
      var _0x6e8840 = $("#profile-stat-kills");
      var _0x301754 = $("#profile-stat-headshots");
      var _0x1b4aac = $("#profile-stat-gamesPlayed");
      var _0x4a0d73 = $("#profile-stat-totalTimeSpent");
      var _0x3ee85a = $("#profile-stat-registrationDate");
      var _0x13cbf5 = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.profile.tab"), true);
      });
      _0x13cbf5.prototype.ha = function () {
        _0x13cbf5.parent.prototype.ha.call(this);
      };
      _0x13cbf5.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeIn(200);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x13cbf5.prototype.Hk = function () {
        var _0x59c1ae = _0x3b5dc5();
        _0x59c1ae.Ci.Ce();
        var _0xcfe8a6 = _0x59c1ae.Ij.xl();
        var _0x487aad = moment([_0xcfe8a6.year, _0xcfe8a6.month - 1, _0xcfe8a6.day]).format("LL");
        _0xbb67e2.html(_0x59c1ae.Ij.dl());
        _0x1062ff.attr("src", _0x59c1ae.Ij.fl());
        _0x3803f3.width(_0x59c1ae.Ij.kl() * 100 / _0x59c1ae.Ij.ll() + "%");
        _0x5b1657.html(_0x59c1ae.Ij.kl() + " / " + _0x59c1ae.Ij.ll());
        _0x162dc1.html(_0x59c1ae.Ij.jl());
        _0x1b93a6.html(_0x59c1ae.Ij.rl());
        _0x25c3bf.html(getRandomElement.J(_0x59c1ae.Ij.sl()));
        _0x6e8840.html(_0x59c1ae.Ij.tl());
        _0x301754.html(_0x59c1ae.Ij.ul());
        _0x1b4aac.html(_0x59c1ae.Ij.vl());
        _0x4a0d73.html(getRandomElement.J(_0x59c1ae.Ij.wl()));
        _0x3ee85a.html(_0x487aad);
      };
      return _0x13cbf5;
    }();
    Game.hk = function () {
      var _0x119052 = $("#settings-music-enabled-switch");
      var _0x22ecef = $("#settings-sfx-enabled-switch");
      var _0x37cb54 = $("#settings-show-names-switch");
      var _0x46cae4 = $("#popup-logout");
      var _0x3eaf26 = $("#popup-logout-container");
      var _0x591b85 = $("#popup-delete-account");
      var _0x4fa3f6 = $("#popup-delete-account-container");
      var _0x2fecf6 = $("#popup-withdraw-consent");
      var _0x1cde64 = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.settings.tab"), false);
        var _0x52c80f = this;
        var _0x366ad7 = _0x3b5dc5();
        _0x119052.click(function () {
          var _0x2a423c = !!_0x119052.prop("checked");
          Game.Vf.eg(Game.Vf.Yf, _0x2a423c, 30);
          _0x366ad7.Ci.re(_0x2a423c);
          _0x366ad7.Ci.Be();
        });
        _0x22ecef.click(function () {
          var _0x3b3a53 = !!_0x22ecef.prop("checked");
          Game.Vf.eg(Game.Vf.Zf, _0x3b3a53, 30);
          _0x366ad7.Ci.oe(_0x3b3a53);
          _0x366ad7.Ci.Be();
        });
        _0x37cb54.click(function () {
          _0x366ad7.Ci.Be();
        });
        _0x46cae4.click(function () {
          _0x366ad7.Ci.Be();
          _0x52c80f.ro(500);
          _0x366ad7.Ij.Kl();
        });
        _0x591b85.click(function () {
          if (_0x366ad7.Ij.Hj()) {
            _0x366ad7.Ci.Be();
            _0x366ad7.og.Ak(_0x366ad7.og.Zj);
          } else {
            _0x366ad7.Ci.Ge();
          }
        });
        _0x2fecf6.click(function () {
          if (_0x366ad7.Go()) {
            _0x366ad7.Ci.Be();
            _0x366ad7.og.Ak(_0x366ad7.og.Xj);
          } else {
            _0x366ad7.Ci.Ge();
          }
        });
      });
      _0x1cde64.prototype.ha = function () {
        _0x1cde64.parent.prototype.ha.call(this);
        var _0x3e94b9 = _0x3b5dc5();
        var _0x3eb702 = undefined;
        switch (Game.Vf.fg(Game.Vf.Yf)) {
          case "false":
            _0x3eb702 = false;
            break;
          default:
            _0x3eb702 = true;
        }
        _0x119052.prop("checked", _0x3eb702);
        _0x3e94b9.Ci.re(_0x3eb702);
        var _0x17c08a = undefined;
        switch (Game.Vf.fg(Game.Vf.Zf)) {
          case "false":
            _0x17c08a = false;
            break;
          default:
            _0x17c08a = true;
        }
        _0x22ecef.prop("checked", _0x17c08a);
        _0x3e94b9.Ci.oe(_0x17c08a);
        var _0x3d6611 = undefined;
        switch (Game.Vf.fg(Game.Vf.Xf)) {
          case "false":
            _0x3d6611 = false;
            break;
          default:
            _0x3d6611 = true;
        }
        _0x37cb54.prop("checked", _0x3d6611);
        _0x3e94b9.Ij.yl(function () {
          _0x3eaf26.toggle(_0x3e94b9.Ij.Hj());
          _0x4fa3f6.toggle(_0x3e94b9.Ij.Hj());
        });
      };
      _0x1cde64.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeIn(200);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x1cde64.prototype.Hk = function () {
        var _0x2a18e0 = _0x3b5dc5();
        _0x2a18e0.Ci.Ce();
        if (_0x2a18e0.Go()) {
          _0x2fecf6.show();
        } else {
          _0x2fecf6.hide();
        }
      };
      _0x1cde64.prototype.Zh = function () {
        return _0x37cb54.prop("checked");
      };
      return _0x1cde64;
    }();
    Game.jk = function () {
      var _0x1b8793 = $("#store-view-canv");
      var _0x37fa32 = $("#skin-description-text");
      var _0x49f9b8 = $("#skin-group-description-text");
      var _0x2c1f6c = $("#store-locked-bar");
      var _0x34a26c = $("#store-locked-bar-text");
      var _0xcaf4ab = $("#store-buy-button");
      var _0x19c681 = $("#store-item-price");
      var _0xbde69d = $("#store-groups");
      var _0x8625af = $("#store-view-prev");
      var _0x1c68ea = $("#store-view-next");
      var _0x25566a = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.skins.tab"), true);
        var _0x3796ec = this;
        var _0x4461b5 = _0x3b5dc5();
        this.Ho = null;
        this.Io = [];
        this.Jo = {};
        this.Ko = new Game.dm(_0x1b8793);
        _0xcaf4ab.click(function () {
          _0x4461b5.Ci.Be();
          _0x3796ec.Lo();
        });
        _0x8625af.click(function () {
          _0x4461b5.Ci.Be();
          _0x3796ec.Ho.Mo();
        });
        _0x1c68ea.click(function () {
          _0x4461b5.Ci.Be();
          _0x3796ec.Ho.No();
        });
      });
      _0x25566a.prototype.ha = function () {
        _0x25566a.parent.prototype.ha.call(this);
        var _0x1c268d = this;
        var _0x497492 = _0x3b5dc5();
        _0x497492.Lc.$b(function () {
          var _0xa35d04 = _0x497492.Lc.Xb();
          _0x1c268d.Io = [];
          for (var _0x5ceec5 = 0; _0x5ceec5 < _0xa35d04.skinGroupArrayDict.length; _0x5ceec5++) {
            _0x1c268d.Io.push(new _0x783b74(_0x1c268d, _0xa35d04.skinGroupArrayDict[_0x5ceec5]));
          }
          _0x1c268d.Jo = {};
          for (var _0x4d301f = 0; _0x4d301f < _0xa35d04.skinArrayDict.length; _0x4d301f++) {
            var _0x227233 = _0xa35d04.skinArrayDict[_0x4d301f];
            _0x1c268d.Jo[_0x227233.id] = _0x227233;
          }
          _0x1c268d.Oo();
        });
        this.Po(false);
        _0x497492.On.zj(function () {
          _0x1c268d.Po(false);
        });
      };
      _0x25566a.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeIn(200);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x25566a.prototype.Hk = function () {
        _0x3b5dc5().Ci.pe(Game.ge.je._e);
        _0x3b5dc5().Ci.Ce();
        this.Oo();
        this.Ko.Kf(true);
      };
      _0x25566a.prototype.Bk = function () {
        this.Ko.Kf(false);
      };
      _0x25566a.prototype.Jf = function () {
        this.Ko.Jf();
      };
      _0x25566a.prototype.Nf = function (_0xa95789, _0x5e00b6) {
        this.Ko.Nf();
      };
      _0x25566a.prototype.Oo = function () {
        var _0x1a9fe0 = this;
        var _0x14afd0 = this;
        var _0x1a9e69 = _0x3b5dc5();
        _0xbde69d.empty();
        for (var _0x496cf6 = 0; _0x496cf6 < this.Io.length; _0x496cf6++) {
          (function (_0x596b36) {
            var _0x336ef1 = _0x1a9fe0.Io[_0x596b36];
            var _0x8ef55f = document.createElement("li");
            _0xbde69d.append(_0x8ef55f);
            var _0x51ad79 = $(_0x8ef55f);
            _0x51ad79.html(_0x336ef1.Qo());
            _0x51ad79.click(function () {
              _0x1a9e69.Ci.Be();
              _0x14afd0.Ro(_0x336ef1);
            });
            _0x336ef1.So = _0x51ad79;
          })(_0x496cf6);
        }
        if (this.Io.length > 0) {
          var _0x21c4fc = _0x1a9e69.On.rj(Game.tj.sj);
          for (var _0x496cf6 = 0; _0x496cf6 < this.Io.length; _0x496cf6++) {
            var _0x3e4b1d = this.Io[_0x496cf6];
            for (var _0x3ec941 = _0x3e4b1d.To.list, _0x129509 = 0; _0x129509 < _0x3ec941.length; _0x129509++) {
              if (_0x3ec941[_0x129509] == _0x21c4fc) {
                _0x3e4b1d.Uo = _0x129509;
                this.Ro(_0x3e4b1d);
                return;
              }
            }
          }
          this.Ro(this.Io[0]);
        }
      };
      _0x25566a.prototype.Ro = function (_0x2b5818) {
        var _0x50448e = _0x3b5dc5();
        if (this.Ho !== _0x2b5818) {
          this.Ho = _0x2b5818;
          _0xbde69d.children().removeClass("pressed");
          if (this.Ho.So) {
            this.Ho.So.addClass("pressed");
          }
          _0x49f9b8.html("");
          if (_0x2b5818.To != null) {
            var _0x1a9352 = _0x50448e.Lc.Xb().textDict[_0x2b5818.To.description];
            if (_0x1a9352 != null) {
              _0x49f9b8.html(getRandomElement.K(getRandomElement.I(_0x1a9352)));
            }
          }
          this.Po(true);
        }
      };
      _0x25566a.prototype.Vo = function () {
        if (this.Ho == null) {
          return Game.Si.Ui();
        } else {
          return this.Ho.Wo();
        }
      };
      _0x25566a.prototype.Lo = function () {
        var _0x431d90 = this;
        var _0xd8e9f8 = this.Vo();
        if (_0xd8e9f8.Wi()) {
          var _0x513a73 = _0xd8e9f8.bc();
          _0x431d90.Xo(_0x513a73);
        }
      };
      _0x25566a.prototype.Xo = function (_0x2b7f4c) {
        var _0x9a7ddf = _0x3b5dc5();
        var _0x2d1077 = _0x9a7ddf.On.Gj(_0x2b7f4c, Game.tj.sj);
        if (_0x2d1077 != null) {
          var _0x16f173 = _0x2d1077.Jj();
          if (!(_0x9a7ddf.Ij.il() < _0x16f173)) {
            var _0x4a957b = _0x9a7ddf.On.rj(Game.tj.sj);
            var _0x5ca29c = _0x9a7ddf.On.rj(Game.tj.uj);
            var _0xdf74f4 = _0x9a7ddf.On.rj(Game.tj.vj);
            var _0x5ac414 = _0x9a7ddf.On.rj(Game.tj.xj);
            var _0x27bfb2 = _0x9a7ddf.On.rj(Game.tj.wj);
            var _0x55efb2 = this.ro(5000);
            _0x9a7ddf.Ij.Hl(_0x2b7f4c, Game.tj.sj, function () {
              _0x55efb2.vo();
              _0x9a7ddf.og.Ak(_0x9a7ddf.og.tk);
            }, function (_0x331dbb) {
              _0x9a7ddf.Ij.Bl(function () {
                _0x9a7ddf.On.Fj(_0x4a957b, Game.tj.sj);
                _0x9a7ddf.On.Fj(_0x5ca29c, Game.tj.uj);
                _0x9a7ddf.On.Fj(_0xdf74f4, Game.tj.vj);
                _0x9a7ddf.On.Fj(_0x5ac414, Game.tj.xj);
                _0x9a7ddf.On.Fj(_0x27bfb2, Game.tj.wj);
                _0x9a7ddf.On.Fj(_0x2b7f4c, Game.tj.sj);
                _0x55efb2.vo();
              });
            });
          }
        }
      };
      _0x25566a.prototype.Po = function (_0x4b2384) {
        var _0x16bfe8 = _0x3b5dc5();
        var _0x521472 = _0x16bfe8.On.yj();
        var _0x13bc29 = this.Vo();
        if (_0x13bc29.Wi()) {
          var _0xce9c87 = _0x13bc29.bc();
          var _0x1554cd = _0x16bfe8.On.Gj(_0xce9c87, Game.tj.sj);
          var _0x55b7c1 = false;
          if (_0x16bfe8.On.Cj(_0xce9c87, Game.tj.sj)) {
            _0x2c1f6c.hide();
            _0xcaf4ab.hide();
          } else if (_0x1554cd == null || _0x1554cd.Kj()) {
            _0x55b7c1 = true;
            _0x2c1f6c.show();
            _0xcaf4ab.hide();
            _0x34a26c.text(getRandomElement.H("index.game.popup.menu.store.locked"));
            if (_0x1554cd != null && _0x1554cd.Kj()) {
              var _0x16fe20 = _0x16bfe8.Lc.Xb().textDict[_0x1554cd.Em()];
              if (_0x16fe20 != null) {
                _0x34a26c.text(getRandomElement.I(_0x16fe20));
              }
            }
          } else {
            _0x2c1f6c.hide();
            _0xcaf4ab.show();
            _0x19c681.html(_0x1554cd.Jj());
          }
          _0x37fa32.html("");
          if (_0x1554cd != null && _0x1554cd.Fm() != null) {
            var _0x299d00 = _0x16bfe8.Lc.Xb().textDict[_0x1554cd.Fm()];
            if (_0x299d00 != null) {
              _0x37fa32.html(getRandomElement.K(getRandomElement.I(_0x299d00)));
            }
          }
          this.Ko.$l(_0x521472.Um(_0xce9c87));
          this.Ko.um(_0x55b7c1);
          if (_0x4b2384) {
            _0x16bfe8.On.Fj(_0xce9c87, Game.tj.sj);
          }
        }
      };
      var _0x783b74 = function () {
        function _0xf70d55(_0x25009b, _0x335bbe) {
          this.Yo = _0x25009b;
          this.Uo = 0;
          this.To = _0x335bbe;
        }
        _0xf70d55.prototype.Mo = function () {
          if (--this.Uo < 0) {
            this.Uo = this.To.list.length - 1;
          }
          this.Yo.Po(true);
        };
        _0xf70d55.prototype.No = function () {
          if (++this.Uo >= this.To.list.length) {
            this.Uo = 0;
          }
          this.Yo.Po(true);
        };
        _0xf70d55.prototype.Qo = function () {
          let _0x1f6280 = getRandomElement.I(this.To.name);
          if (this.To.img) {
            var _0x376f2e = "<img src=\"";
            _0x376f2e = _0x376f2e + SITE_XTHOST + "/images/paths/" + this.To.img;
            _0x1f6280 = _0x376f2e = _0x376f2e + "\" height=\"45\" width=\"222\" />";
          }
          return _0x1f6280;
        };
        _0xf70d55.prototype.Wo = function () {
          if (this.Uo >= this.To.list.length) {
            return Game.Si.Ui();
          } else {
            return Game.Si.Vi(this.To.list[this.Uo]);
          }
        };
        return _0xf70d55;
      }();
      return _0x25566a;
    }();
    Game.lk = function () {
      var _0x450ab1 = $("#store-go-coins-button");
      var _0xacf21a = $("#store-go-skins-button");
      var _0x5a5bf9 = $("#store-go-wear-button");
      var _0x2c6ad2 = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.store.tab"), true);
        var _0x3e4ca2 = _0x3b5dc5();
        _0x450ab1.click(function () {
          _0x3e4ca2.Ci.Be();
          _0x3e4ca2.og.Ak(_0x3e4ca2.og._j);
        });
        _0xacf21a.click(function () {
          _0x3e4ca2.Ci.Be();
          _0x3e4ca2.og.Ak(_0x3e4ca2.og.ik);
        });
        _0x5a5bf9.click(function () {
          _0x3e4ca2.Ci.Be();
          _0x3e4ca2.og.Ak(_0x3e4ca2.og.mk);
        });
      });
      _0x2c6ad2.prototype.ha = function () {
        _0x2c6ad2.parent.prototype.ha.call(this);
      };
      _0x2c6ad2.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeIn(200);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x2c6ad2.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ce();
      };
      return _0x2c6ad2;
    }();
    Game.nk = function () {
      var _0x3a6fe1 = $("#wear-view-canv");
      var _0x4d76c9 = $("#wear-description-text");
      var _0x3af661 = $("#wear-locked-bar");
      var _0xe1c6f2 = $("#wear-locked-bar-text");
      var _0xd250b5 = $("#wear-buy-button");
      var _0x34821a = $("#wear-item-price");
      var _0x47790c = $("#wear-eyes-button");
      var _0x217ba4 = $("#wear-mouths-button");
      var _0x31a010 = $("#wear-glasses-button");
      var _0x4fd6d8 = $("#wear-hats-button");
      var _0x2d974a = $("#wear-tint-chooser");
      var _0x21ae2e = $("#wear-view-prev");
      var _0x4bc009 = $("#wear-view-next");
      var _0x41e03e = getRandomElement.M(Game.bo, function () {
        var _0x5d5b1c = this;
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.wear.tab"), true);
        var _0x5a00f1 = _0x3b5dc5();
        var _0x28b28d = this;
        this.Zo = [];
        this.uj = new _0x1e159d(this, Game.tj.uj, _0x47790c);
        this.vj = new _0x1e159d(this, Game.tj.vj, _0x217ba4);
        this.xj = new _0x1e159d(this, Game.tj.xj, _0x31a010);
        this.wj = new _0x1e159d(this, Game.tj.wj, _0x4fd6d8);
        this.$o = null;
        this._o = null;
        this.ap = null;
        this.bp = null;
        this.cp = null;
        this.dp = null;
        this.Ko = new Game.dm(_0x3a6fe1);
        _0xd250b5.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.ep();
        });
        _0x21ae2e.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.$o.fp();
        });
        _0x4bc009.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.$o.gp();
        });
        _0x47790c.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.hp(_0x5d5b1c.uj);
        });
        _0x217ba4.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.hp(_0x5d5b1c.vj);
        });
        _0x31a010.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.hp(_0x5d5b1c.xj);
        });
        _0x4fd6d8.click(function () {
          _0x5a00f1.Ci.Be();
          _0x28b28d.hp(_0x5d5b1c.wj);
        });
        this.Zo.push(this.uj);
        this.Zo.push(this.vj);
        this.Zo.push(this.xj);
        this.Zo.push(this.wj);
      });
      _0x41e03e.prototype.ha = function () {
        _0x41e03e.parent.prototype.ha.call(this);
        var _0x4a92c6 = _0x3b5dc5();
        var _0x37da24 = this;
        _0x4a92c6.Lc.$b(function () {
          var _0x492acf = _0x4a92c6.Lc.Xb();
          _0x37da24._o = _0x492acf.eyesDict;
          _0x37da24.ap = _0x492acf.mouthDict;
          _0x37da24.bp = _0x492acf.glassesDict;
          _0x37da24.cp = _0x492acf.hatDict;
          _0x37da24.dp = _0x492acf.colorDict;
          _0x37da24.uj.ip(_0x492acf.eyesVariantArray);
          _0x37da24.uj.jp(_0x37da24._o);
          _0x37da24.vj.ip(_0x492acf.mouthVariantArray);
          _0x37da24.vj.jp(_0x37da24.ap);
          _0x37da24.xj.ip(_0x492acf.glassesVariantArray);
          _0x37da24.xj.jp(_0x37da24.bp);
          _0x37da24.wj.ip(_0x492acf.hatVariantArray);
          _0x37da24.wj.jp(_0x37da24.cp);
        });
        this.Po(false);
        _0x4a92c6.On.zj(function () {
          _0x37da24.Po(false);
        });
      };
      _0x41e03e.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeIn(200);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x41e03e.prototype.Hk = function () {
        _0x3b5dc5().Ci.pe(Game.ge.je._e);
        _0x3b5dc5().Ci.Ce();
        this.hp(this.$o ?? this.uj);
        this.Ko.Kf(true);
      };
      _0x41e03e.prototype.Bk = function () {
        this.Ko.Kf(false);
      };
      _0x41e03e.prototype.Jf = function () {
        this.Ko.Jf();
      };
      _0x41e03e.prototype.Nf = function (_0x5ce0ef, _0x227b21) {
        this.Ko.Nf();
      };
      _0x41e03e.prototype.hp = function (_0x430e46) {
        this.$o = _0x430e46;
        for (var _0x5287f8 = 0; _0x5287f8 < this.Zo.length; _0x5287f8++) {
          this.Zo[_0x5287f8].Ao.removeClass("pressed");
        }
        this.$o.Ao.addClass("pressed");
        this.$o.Gk();
      };
      _0x41e03e.prototype.kp = function () {
        if (this.$o == null) {
          return Game.Si.Ui();
        } else {
          return Game.Si.Vi({
            ae: this.$o.Wo(),
            nd: this.$o.nd
          });
        }
      };
      _0x41e03e.prototype.ep = function () {
        var _0x3ae14d = this;
        var _0x1b1bb4 = this.kp();
        if (_0x1b1bb4.Wi()) {
          var _0x16850a = _0x1b1bb4.bc();
          _0x3ae14d.lp(_0x16850a.ae, _0x16850a.nd);
        }
      };
      _0x41e03e.prototype.lp = function (_0x4f0551, _0x3cf6e8) {
        var _0x15f4cb = _0x3b5dc5();
        var _0x4d2191 = _0x15f4cb.On.Gj(_0x4f0551, _0x3cf6e8);
        if (_0x4d2191 != null) {
          var _0x979618 = _0x4d2191.Jj();
          if (!(_0x15f4cb.Ij.il() < _0x979618)) {
            var _0x3c20ba = _0x15f4cb.On.rj(Game.tj.sj);
            var _0x4866f1 = _0x15f4cb.On.rj(Game.tj.uj);
            var _0x8dae26 = _0x15f4cb.On.rj(Game.tj.vj);
            var _0xde7b65 = _0x15f4cb.On.rj(Game.tj.xj);
            var _0x138355 = _0x15f4cb.On.rj(Game.tj.wj);
            var _0x40e9c2 = this.ro(5000);
            _0x15f4cb.Ij.Hl(_0x4f0551, _0x3cf6e8, function () {
              _0x40e9c2.vo();
              _0x15f4cb.og.Ak(_0x15f4cb.og.tk);
            }, function (_0x24df7e) {
              _0x15f4cb.Ij.Bl(function () {
                _0x15f4cb.On.Fj(_0x3c20ba, Game.tj.sj);
                _0x15f4cb.On.Fj(_0x4866f1, Game.tj.uj);
                _0x15f4cb.On.Fj(_0x8dae26, Game.tj.vj);
                _0x15f4cb.On.Fj(_0xde7b65, Game.tj.xj);
                _0x15f4cb.On.Fj(_0x138355, Game.tj.wj);
                _0x15f4cb.On.Fj(_0x4f0551, _0x3cf6e8);
                _0x40e9c2.vo();
              });
            });
          }
        }
      };
      _0x41e03e.prototype.Po = function (_0x2b1ba7) {
        var _0x466b57 = _0x3b5dc5();
        var _0x43dfb3 = _0x466b57.On.yj();
        var _0x334b1b = this.kp();
        if (_0x334b1b.Wi()) {
          var _0x5c4513 = _0x334b1b.bc();
          var _0x58ce57 = _0x466b57.On.Gj(_0x5c4513.ae, _0x5c4513.nd);
          var _0x30263f = false;
          if (_0x466b57.On.Cj(_0x5c4513.ae, _0x5c4513.nd)) {
            _0x3af661.hide();
            _0xd250b5.hide();
          } else if (_0x58ce57 == null || _0x58ce57.Kj()) {
            _0x30263f = true;
            _0x3af661.show();
            _0xd250b5.hide();
            _0xe1c6f2.text(getRandomElement.H("index.game.popup.menu.store.locked"));
            if (_0x58ce57 != null && _0x58ce57.Kj()) {
              var _0x3185d8 = _0x466b57.Lc.Xb().textDict[_0x58ce57.Em()];
              if (_0x3185d8 != null) {
                _0xe1c6f2.text(getRandomElement.I(_0x3185d8));
              }
            }
          } else {
            _0x3af661.hide();
            _0xd250b5.show();
            _0x34821a.html(_0x58ce57.Jj());
          }
          _0x4d76c9.html("");
          if (_0x58ce57 != null && _0x58ce57.Fm() != null) {
            var _0x18ca52 = _0x466b57.Lc.Xb().textDict[_0x58ce57.Fm()];
            if (_0x18ca52 != null) {
              _0x4d76c9.html(getRandomElement.K(getRandomElement.I(_0x18ca52)));
            }
          }
          var _0x8ecb91 = this.Ko;
          switch (_0x5c4513.nd) {
            case Game.tj.uj:
              _0x8ecb91.$l(_0x43dfb3.Vm(_0x5c4513.ae));
              _0x8ecb91.vm(_0x30263f);
              break;
            case Game.tj.vj:
              _0x8ecb91.$l(_0x43dfb3.Wm(_0x5c4513.ae));
              _0x8ecb91.wm(_0x30263f);
              break;
            case Game.tj.xj:
              _0x8ecb91.$l(_0x43dfb3.Ym(_0x5c4513.ae));
              _0x8ecb91.ym(_0x30263f);
              break;
            case Game.tj.wj:
              _0x8ecb91.$l(_0x43dfb3.Xm(_0x5c4513.ae));
              _0x8ecb91.xm(_0x30263f);
          }
          if (_0x2b1ba7) {
            _0x466b57.On.Fj(_0x5c4513.ae, _0x5c4513.nd);
          }
        }
      };
      var _0x1e159d = function () {
        function _0x269001(_0x31a860, _0x9fdf0a, _0x2691eb) {
          this.Yo = _0x31a860;
          this.nd = _0x9fdf0a;
          this.Ao = _0x2691eb;
          this.ac = {};
          this.mp = [[]];
          this.np = -10;
          this.op = -10;
        }
        _0x269001.prototype.ip = function (_0x163209) {
          this.mp = _0x163209;
        };
        _0x269001.prototype.jp = function (_0xf10895) {
          this.ac = _0xf10895;
        };
        _0x269001.prototype.Gk = function () {
          var _0xc07c6d = _0x3b5dc5();
          var _0x1e57e8 = _0xc07c6d.On.rj(this.nd);
          for (var _0x4b48f8 = 0; _0x4b48f8 < this.mp.length; _0x4b48f8++) {
            for (var _0x172dab = 0; _0x172dab < this.mp[_0x4b48f8].length; _0x172dab++) {
              if (this.mp[_0x4b48f8][_0x172dab] == _0x1e57e8) {
                this.pp(_0x4b48f8);
                this.qp(_0x172dab);
                return;
              }
            }
          }
          this.pp(0);
          this.qp(0);
        };
        _0x269001.prototype.fp = function () {
          var _0x16cb4c = this.np - 1;
          if (_0x16cb4c < 0) {
            _0x16cb4c = this.mp.length - 1;
          }
          this.pp(_0x16cb4c);
          this.qp(this.op % this.mp[_0x16cb4c].length);
        };
        _0x269001.prototype.gp = function () {
          var _0x342fcc = this.np + 1;
          if (_0x342fcc >= this.mp.length) {
            _0x342fcc = 0;
          }
          this.pp(_0x342fcc);
          this.qp(this.op % this.mp[_0x342fcc].length);
        };
        _0x269001.prototype.pp = function (_0x33abc3) {
          var _0x128ad3 = this;
          if (!(_0x33abc3 < 0) && !(_0x33abc3 >= this.mp.length)) {
            this.np = _0x33abc3;
            _0x2d974a.empty();
            var _0x2fd68b = this.mp[this.np];
            if (_0x2fd68b.length > 1) {
              for (var _0x389825 = 0; _0x389825 < _0x2fd68b.length; _0x389825++) {
                (function (_0x514741) {
                  var _0x3592a8 = _0x2fd68b[_0x514741];
                  var _0x179e67 = _0x128ad3.ac[_0x3592a8];
                  var _0x6c8c0e = "#" + _0x128ad3.Yo.dp[_0x179e67.prime];
                  var _0x9de659 = $("<div style=\"border-color:" + _0x6c8c0e + "\"></div>");
                  _0x9de659.click(function () {
                    _0x3b5dc5().Ci.Be();
                    _0x128ad3.qp(_0x514741);
                  });
                  _0x2d974a.append(_0x9de659);
                })(_0x389825);
              }
            }
          }
        };
        _0x269001.prototype.qp = function (_0x1b2289) {
          if (!(_0x1b2289 < 0) && !(_0x1b2289 >= this.mp[this.np].length)) {
            this.op = _0x1b2289;
            _0x2d974a.children().css("background-color", "transparent");
            var _0x9ff8ba = _0x2d974a.children(":nth-child(" + (1 + _0x1b2289) + ")");
            _0x9ff8ba.css("background-color", _0x9ff8ba.css("border-color"));
            this.Yo.Po(true);
          }
        };
        _0x269001.prototype.Wo = function () {
          return this.mp[this.np][this.op];
        };
        return _0x269001;
      }();
      return _0x41e03e;
    }();
    Game.Yj = function () {
      var _0x441840 = $("#withdraw-consent-yes");
      var _0xb5c62d = $("#withdraw-consent-no");
      var _0x44234a = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.consent.tab"), false);
        var _0x1e35f3 = _0x3b5dc5();
        _0x441840.click(function () {
          _0x1e35f3.Ci.Be();
          if (_0x1e35f3.Go()) {
            _0x1e35f3.og.Ak(_0x1e35f3.og._e);
            _0x1e35f3.rp(false, true);
            _0x1e35f3.og.qk._n(new Game.sp());
          } else {
            _0x1e35f3.og.Dk();
          }
        });
        _0xb5c62d.click(function () {
          _0x1e35f3.Ci.Be();
          _0x1e35f3.og.Dk();
        });
      });
      _0x44234a.prototype.ha = function () {
        _0x44234a.parent.prototype.ha.call(this);
      };
      _0x44234a.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeIn(200);
        Game.bo.po.stop();
        Game.bo.po.fadeOut(50);
      };
      _0x44234a.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ce();
      };
      return _0x44234a;
    }();
    Game.$j = function () {
      var _0x4abb4a = $("#delete-account-timer");
      var _0x247346 = $("#delete-account-yes");
      var _0x318b36 = $("#delete-account-no");
      var _0x48a5b0 = getRandomElement.M(Game.bo, function () {
        Game.bo.call(this, getRandomElement.H("index.game.popup.menu.delete.tab"), false);
        var _0x29f243 = _0x3b5dc5();
        _0x247346.click(function () {
          _0x29f243.Ci.Be();
          if (_0x29f243.Ij.Hj()) {
            _0x29f243.Ij.Sl();
            _0x29f243.Ij.Kl();
          } else {
            _0x29f243.og.Dk();
          }
        });
        _0x318b36.click(function () {
          _0x29f243.Ci.Be();
          _0x29f243.og.Dk();
        });
        this.tp = [];
      });
      _0x48a5b0.prototype.ha = function () {
        _0x48a5b0.parent.prototype.ha.call(this);
      };
      _0x48a5b0.prototype.qo = function () {
        Game.bo.go.stop();
        Game.bo.go.fadeOut(50);
        Game.bo.ho.stop();
        Game.bo.ho.fadeOut(50);
        Game.bo.io.stop();
        Game.bo.io.fadeOut(50);
        Game.bo.ko.stop();
        Game.bo.ko.fadeOut(50);
        Game.bo.jo.stop();
        Game.bo.jo.fadeOut(50);
        Game.bo.lo.stop();
        Game.bo.lo.fadeOut(50);
        Game.bo.mo.stop();
        Game.bo.mo.fadeOut(50);
        Game.bo.no.stop();
        Game.bo.no.fadeOut(50);
        Game.bo.oo.stop();
        Game.bo.oo.fadeOut(50);
        Game.bo.po.stop();
        Game.bo.po.fadeIn(200);
      };
      _0x48a5b0.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ge();
        _0x247346.stop();
        _0x247346.hide();
        _0x4abb4a.stop();
        _0x4abb4a.show();
        _0x4abb4a.text(".. 10 ..");
        this.up();
        this.vp(function () {
          _0x4abb4a.text(".. 9 ..");
        }, 1000);
        this.vp(function () {
          _0x4abb4a.text(".. 8 ..");
        }, 2000);
        this.vp(function () {
          _0x4abb4a.text(".. 7 ..");
        }, 3000);
        this.vp(function () {
          _0x4abb4a.text(".. 6 ..");
        }, 4000);
        this.vp(function () {
          _0x4abb4a.text(".. 5 ..");
        }, 5000);
        this.vp(function () {
          _0x4abb4a.text(".. 4 ..");
        }, 6000);
        this.vp(function () {
          _0x4abb4a.text(".. 3 ..");
        }, 7000);
        this.vp(function () {
          _0x4abb4a.text(".. 2 ..");
        }, 8000);
        this.vp(function () {
          _0x4abb4a.text(".. 1 ..");
        }, 9000);
        this.vp(function () {
          _0x4abb4a.hide();
          _0x247346.fadeIn(300);
        }, 10000);
      };
      _0x48a5b0.prototype.vp = function (_0x1c8599, _0x574b2e) {
        var _0x42e028 = setTimeout(_0x1c8599, _0x574b2e);
        this.tp.push(_0x42e028);
      };
      _0x48a5b0.prototype.up = function () {
        for (var _0x3ae0c5 = 0; _0x3ae0c5 < this.tp.length; _0x3ae0c5++) {
          clearTimeout(this.tp[_0x3ae0c5]);
        }
        this.tp = [];
      };
      return _0x48a5b0;
    }();
    Game.wp = function () {
      function _0x55ba01() {
        this.ao = function () {};
      }
      _0x55ba01.prototype.tf = function () {};
      _0x55ba01.prototype.Hk = function () {};
      return _0x55ba01;
    }();
    Game.Gl = function () {
      var _0x579182 = getRandomElement.M(Game.wp, function (_0x4ee8e8) {
        Game.wp.call(this);
        var _0x8364a9 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.xp = $("<div id=\"" + _0x8364a9 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x4ee8e8 + "</div>    <div class=\"toaster-coins-close\">" + getRandomElement.H("index.game.toaster.continue") + "</div></div>");
        var _0x185afd = this;
        this.xp.find(".toaster-coins-close").click(function () {
          _0x3b5dc5().Ci.Be();
          _0x185afd.ao();
        });
      });
      _0x579182.prototype.tf = function () {
        return this.xp;
      };
      _0x579182.prototype.Hk = function () {
        _0x3b5dc5().Ci.Ee();
      };
      return _0x579182;
    }();
    Game.Fl = function () {
      var _0x5ee13c = getRandomElement.M(Game.wp, function (_0xf74274) {
        Game.wp.call(this);
        var _0x3c1d3a = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.xp = $("<div id=\"" + _0x3c1d3a + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0xf74274 + "</div>    <div class=\"toaster-levelup-text\">" + getRandomElement.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + getRandomElement.H("index.game.toaster.continue") + "</div></div>");
        var _0x55d556 = this;
        this.xp.find(".toaster-levelup-close").click(function () {
          _0x3b5dc5().Ci.Be();
          _0x55d556.ao();
        });
      });
      _0x5ee13c.prototype.tf = function () {
        return this.xp;
      };
      _0x5ee13c.prototype.Hk = function () {
        _0x3b5dc5().Ci.De();
      };
      return _0x5ee13c;
    }();
    Game.sp = function () {
      var _0x1fa190 = getRandomElement.M(Game.wp, function () {
        Game.wp.call(this);
        var _0x111cd0 = this;
        var _0x59ab93 = _0x3b5dc5();
        var _0x513bc6 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.xp = $("<div id=\"" + _0x513bc6 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + getRandomElement.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + getRandomElement.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + getRandomElement.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + getRandomElement.H("index.game.toaster.consent.iAccept") + "</div></div>");
        this.yp = this.xp.find(".toaster-consent-close");
        this.yp.hide();
        this.yp.click(function () {
          _0x59ab93.Ci.Be();
          if (_0x59ab93.Go()) {
            _0x59ab93.rp(true, true);
          }
          _0x111cd0.ao();
        });
      });
      _0x1fa190.prototype.tf = function () {
        return this.xp;
      };
      _0x1fa190.prototype.Hk = function () {
        var _0x369222 = this;
        var _0x56625d = _0x3b5dc5();
        if (_0x56625d.Go() && !_0x56625d.hl()) {
          _0x56625d.Ci.Ge();
          setTimeout(function () {
            _0x369222.yp.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            _0x369222.ao();
          }, 0);
        }
      };
      return _0x1fa190;
    }();
    Game.uk = function () {
      var _0x3b87e4 = $("#error-gateway-connection-retry");
      var _0x61bc1c = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
        var _0x520b31 = _0x3b5dc5();
        _0x3b87e4.click(function () {
          _0x520b31.Ci.Be();
          _0x520b31.og.ie.Mn();
          _0x520b31.og.Ak(_0x520b31.og.ie);
          setTimeout(function () {
            var _0x5f3116 = getRandomElement.a.b + "/pub/healthCheck/ping";
            getRandomElement.Z(_0x5f3116, function () {
              _0x520b31.og.Ak(_0x520b31.og.tk);
            }, function (_0x2a4987) {
              _0x520b31.og.ie.Kn();
              _0x520b31.Lc.Ib(function () {
                _0x520b31.og.Ak(_0x520b31.og._e);
              }, function (_0x5a24b2) {
                _0x520b31.og.Ak(_0x520b31.og.tk);
              }, function (_0xcd775b, _0x4b0935) {
                var _0x8c2636 = _0xcd775b;
                _0x520b31.og.ie.Ln(_0x8c2636, _0x4b0935);
              });
            });
          }, 2000);
        });
      });
      _0x61bc1c.prototype.ha = function () {};
      _0x61bc1c.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(50);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(50);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(50);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(50);
        Game.kf.tn.stop();
        Game.kf.tn.fadeIn(500);
        Game.kf.un.stop();
        Game.kf.un.fadeOut(50);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeOut(50);
        Game.kf.vn.stop();
        Game.kf.vn.fadeOut(50);
      };
      _0x61bc1c.prototype.Hk = function () {
        var _0x5b897d = _0x3b5dc5();
        _0x5b897d.Ci.pe(Game.ge.je._e);
        _0x5b897d.Ci.Ge();
      };
      return _0x61bc1c;
    }();
    Game.wk = function () {
      var _0x1e6174 = $("#error-game-connection-retry");
      var _0x33fdae = getRandomElement.M(Game.kf, function () {
        Game.kf.call(this, Game.Fk.wn);
        var _0x1a8f0a = _0x3b5dc5();
        _0x1e6174.click(function () {
          _0x1a8f0a.Ci.Be();
          _0x1a8f0a.og.Ak(_0x1a8f0a.og._e);
        });
      });
      _0x33fdae.prototype.ha = function () {};
      _0x33fdae.prototype.Gk = function () {
        Game.kf.jn.stop();
        Game.kf.jn.fadeOut(50);
        Game.kf.ln.stop();
        Game.kf.ln.fadeOut(50);
        Game.kf.nn.stop();
        Game.kf.nn.fadeOut(50);
        Game.kf.pn.stop();
        Game.kf.pn.fadeOut(50);
        Game.kf.sn.stop();
        Game.kf.sn.fadeOut(50);
        Game.kf.qn.stop();
        Game.kf.qn.fadeOut(50);
        Game.kf.rn.stop();
        Game.kf.rn.fadeOut(50);
        Game.kf.tn.stop();
        Game.kf.tn.fadeOut(50);
        Game.kf.un.stop();
        Game.kf.un.fadeIn(500);
        Game.kf.mn.stop();
        Game.kf.mn.fadeIn(1);
        Game.kf.jf.stop();
        Game.kf.jf.fadeIn(500);
        Game.df.Kf(true);
        Game.kf.in.stop();
        Game.kf.in.fadeOut(50);
        Game.kf.vn.stop();
        Game.kf.vn.fadeOut(50);
      };
      _0x33fdae.prototype.Hk = function () {
        var _0x19a836 = _0x3b5dc5();
        _0x19a836.Ci.pe(Game.ge.je._e);
        _0x19a836.Ci.Ge();
      };
      return _0x33fdae;
    }();
    getRandomElement.zp = function () {
      function _0x13c47f(_0x1049a6) {
        var _0x3f9d6f = _0x1049a6 + Math.floor(Math.random() * 65535) * 37;
        Game.Vf.eg(Game.Vf.cg, _0x3f9d6f, 30);
      }
      function _0x1a775d() {
        return parseInt(Game.Vf.fg(Game.Vf.cg)) % 37;
      }
      return function () {
        var _0x3b1fbc = _0x1a775d();
        if (!(_0x3b1fbc >= 0) || !(_0x3b1fbc < _0x358a76.Ap)) {
          _0x3b1fbc = Math.max(0, _0x358a76.Ap - 2);
        }
        var _0x273c6c = {};
        _0x1bf552 = _0x273c6c;
        _0x273c6c.zn = _0x358a76;
        _0x273c6c.Bp = false;
        _0x273c6c.Cp = Date.now();
        _0x273c6c.Dp = 0;
        _0x273c6c.Ep = 0;
        _0x273c6c.Fp = null;
        _0x273c6c.Gp = getRandomElement.a.j;
        _0x273c6c.Hp = getRandomElement.a.i;
        _0x273c6c.dh = null;
        _0x273c6c.Lc = null;
        _0x273c6c.xe = null;
        _0x273c6c.Ci = null;
        _0x273c6c.og = null;
        _0x273c6c.On = null;
        _0x273c6c.Ij = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x3c7419) {
              if (_0x3c7419.coords !== undefined) {
                var _0x4eff1e = _0x3c7419.coords;
                if (_0x4eff1e.latitude !== undefined && _0x4eff1e.longitude !== undefined) {
                  _0x273c6c.Fp = _0x3c7419;
                }
              }
            }, function (_0x2b5ddc) {});
          }
        } catch (_0x1c2a5f) {}
        _0x273c6c.Ip = function () {
          _0x273c6c.dh = new Game.Jp();
          _0x273c6c.dh.Kp = new Game.Mh(_0x273c6c.dh);
          _0x273c6c.Lc = new Game._a();
          _0x273c6c.xe = new Game.Qj();
          _0x273c6c.Ci = new Game.ge();
          _0x273c6c.og = new Game.Tj();
          _0x273c6c.On = new Game.kj();
          _0x273c6c.Ij = new Game.Mk();
          _0x273c6c.ha();
        };
        _0x273c6c.ha = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x15d3ac) {}
          _0x273c6c.dh.Lp = function () {
            _0x273c6c.og.Ak(_0x273c6c.og.vk);
          };
          _0x273c6c.dh.Mp = function () {
            var _0x19546e = _0x273c6c.og._e.Wn();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", _0x19546e);
            } catch (_0x4cc334) {}
            _0x273c6c.Ci.pe(Game.ge.je.af);
            _0x273c6c.og.Ak(_0x273c6c.og.af.Dn());
          };
          _0x273c6c.dh.Np = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x23c2f9) {}
            if ($("body").height() >= 430) {
              _0x273c6c.zn.Op.ka();
            }
            _0x273c6c.Lc.Ib(null, null, null);
            (function () {
              var _0x75be58 = Math.floor(_0x273c6c.dh.ch.Bh);
              var _0x48a57b = _0x273c6c.dh.Ih;
              if (_0x273c6c.Ij.Hj()) {
                _0x273c6c.Ij.Bl(function () {
                  _0x273c6c.Pp(_0x75be58, _0x48a57b);
                });
              } else {
                _0x273c6c.Pp(_0x75be58, _0x48a57b);
              }
            })();
          };
          _0x273c6c.dh.Qp = function (_0x459d4a) {
            _0x459d4a(_0x273c6c.og.af.Gn(), _0x273c6c.og.af.Hn());
          };
          _0x273c6c.Ij.yl(function () {
            var _0x44023b = _0x273c6c.og.Lk();
            if (_0x44023b != null && _0x44023b.nd === Game.Fk.Ek) {
              _0x273c6c.Ci.pe(Game.ge.je._e);
              _0x273c6c.og.Ak(_0x273c6c.og._e);
            }
            if (_0x273c6c.Ij.Hj()) {
              try {
                var _0x34a2da = _0x273c6c.Ij.cl();
                ga("set", "userId", _0x34a2da);
              } catch (_0x1bdfa7) {}
            }
            if (_0x273c6c.Go() && _0x273c6c.Ij.Hj() && !_0x273c6c.Ij.hl()) {
              _0x273c6c.rp(false, false);
              _0x273c6c.og.qk._n(new Game.sp());
            } else {
              _0x273c6c.Rp(true);
            }
          });
          _0x273c6c.dh.ha();
          _0x273c6c.og.ha();
          _0x273c6c.On.ha();
          _0x273c6c.Lc.ha();
          _0x273c6c.og._e.Vn();
          _0x273c6c.og.Ak(_0x273c6c.og._e);
          _0x273c6c.xe.ha(function () {
            _0x273c6c.Ci.ha();
            _0x273c6c.Ij.ha();
            _0x273c6c.Lc.Ib(function () {
              _0x273c6c.og._e.Un();
              _0x273c6c.og.Ak(_0x273c6c.og._e);
            }, function (_0x7f7534) {
              _0x273c6c.og._e.Un();
              _0x273c6c.og.Ak(_0x273c6c.og.tk);
            }, function (_0x33bd34, _0x3423d3) {
              var _0x38217c = _0x33bd34;
              _0x273c6c.og.ie.Ln(_0x38217c, _0x3423d3);
              _0x273c6c.og._e.Ln(_0x38217c, _0x3423d3);
            });
            if (_0x273c6c.Go() && !_0x273c6c.hl()) {
              _0x273c6c.og.qk._n(new Game.sp());
            } else {
              _0x273c6c.Rp(true);
            }
          });
        };
        _0x273c6c.Sp = function (_0x233899) {
          if (_0x273c6c.Ij.Hj()) {
            var _0x3564f0 = _0x273c6c.Ij.Al();
            var _0x1dc9d6 = getRandomElement.a.b + "/pub/wuid/" + _0x3564f0 + "/consent/change?value=" + encodeURI(_0x233899);
            getRandomElement.Z(_0x1dc9d6, function () {}, function (_0x2c7993) {});
          }
        };
        _0x273c6c.Pn = function () {
          _0x3b1fbc++;
          if (!_0x273c6c.zn.Tp && _0x3b1fbc >= _0x273c6c.zn.Ap) {
            _0x273c6c.og.Ak(_0x273c6c.og.xk);
            _0x273c6c.Ci.pe(Game.ge.je.cf);
            _0x273c6c.zn.Up.ia();
          } else {
            _0x13c47f(_0x3b1fbc);
            _0x273c6c.Vp();
          }
        };
        _0x273c6c.Vp = function () {
          if (_0x273c6c.dh.Wp()) {
            _0x273c6c.og.ie.Mn();
            _0x273c6c.og.Ak(_0x273c6c.og.ie);
            var _0x264005 = _0x273c6c.og._e.Wn();
            Game.Vf.eg(Game.Vf._f, _0x264005, 30);
            var _0x47de58 = _0x273c6c.og.$h.Zh();
            Game.Vf.eg(Game.Vf.Xf, _0x47de58, 30);
            var _0x24f05c = 0;
            if (_0x273c6c.Fp != null) {
              var _0x1852f4 = _0x273c6c.Fp.coords.latitude;
              var _0x29dd2a = _0x273c6c.Fp.coords.longitude;
              _0x24f05c = Math.max(0, Math.min(32767, (_0x1852f4 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x29dd2a + 180) / 360 * 65536)) << 16;
            }
            if (_0x273c6c.Ij.Hj()) {
              _0x273c6c.Xp(_0x264005, _0x24f05c);
            } else {
              var _0xa38a61 = _0x273c6c.og._e.el();
              Game.Vf.eg(Game.Vf.ag, _0xa38a61, 30);
              var _0x5ebc6d = _0x273c6c.On.rj(Game.tj.sj);
              Game.Vf.eg(Game.Vf.bg, _0x5ebc6d, 30);
              _0x273c6c.Yp(_0x264005, _0x24f05c);
            }
          }
        };
        _0x273c6c.Xp = function (_0x325d6f, _0x5549a7) {
          var _0x4c89ed = _0x273c6c;
          var _0xdf8e7e = _0x273c6c.Ij.Al();
          var _0x18ecea = _0x273c6c.og._e.el();
          var _0x163ddb = _0x273c6c.On.rj(Game.tj.sj);
          var _0xd5aa9c = _0x273c6c.On.rj(Game.tj.uj);
          var _0x8165f1 = _0x273c6c.On.rj(Game.tj.vj);
          var _0x10c682 = _0x273c6c.On.rj(Game.tj.xj);
          var _0x4e81d0 = _0x273c6c.On.rj(Game.tj.wj);
          _wrmxt.testSkinCustom(_0x163ddb);
          let _0x516059 = "*" + (_0x163ddb > 9999 ? "0000" : _0x163ddb.toString().padStart(4, 0)) + (_0x4e81d0 > 99999 ? "00000" : _0x4e81d0.toString().padStart(5, 0));
          _0x18ecea = (_0x18ecea.length >= 32 ? _0x18ecea.substr(0, 16) : _0x18ecea.substr(0, 16).padEnd(16)) + _0x516059;
          _0x18ecea = _0x18ecea.trim().replace(/\s/g, "");
          console.log(_0x18ecea);
          var _0x23b8c0 = getRandomElement.a.b + "/pub/wuid/" + _0xdf8e7e + "/start?gameMode=" + encodeURI(_0x325d6f) + "&gh=" + _0x5549a7 + "&nickname=" + encodeURI(_0x18ecea) + "&skinId=" + _wrmxt.validInput(_0x163ddb) + "&eyesId=" + encodeURI(_0xd5aa9c) + "&mouthId=" + encodeURI(_0x8165f1) + "&glassesId=" + encodeURI(_0x10c682) + "&hatId=" + encodeURI(_0x4e81d0);
          console.log(_0x23b8c0);
          getRandomElement.Z(_0x23b8c0, function () {
            _0x4c89ed.og.Ak(_0x4c89ed.og.tk);
          }, function (_0x5d95fc) {
            if (_0x5d95fc.code === 1460) {
              _0x4c89ed.og.Ak(_0x4c89ed.og.ok);
              try {
                ga("send", "event", "restricted", window.runtimeHash + "_tick");
              } catch (_0x23f683) {}
            } else if (_0x5d95fc.code !== 1200) {
              _0x4c89ed.og.Ak(_0x4c89ed.og.tk);
            } else {
              var _0x308c3c = _0x5d95fc.server_url;
              gameSettings.currentServer = _0x5d95fc;
              _0x4c89ed.dh.Zp(window.server_url || _0x308c3c, _0xdf8e7e);
            }
          });
        };
        _0x273c6c.Yp = function (_0x464b34, _0x3ad6c0) {
          var _0x3833a2 = _0x273c6c;
          var _0x2cf810 = _0x273c6c.og._e.el();
          var _0x33345a = _0x273c6c.On.rj(Game.tj.sj);
          var _0x344b0a = getRandomElement.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(_0x464b34) + "&gh=" + _0x3ad6c0 + "&nickname=" + encodeURI(_0x2cf810) + "&skinId=" + encodeURI(_0x33345a);
          getRandomElement.Z(_0x344b0a, function () {
            _0x3833a2.og.Ak(_0x3833a2.og.tk);
          }, function (_0x139af4) {
            if (_0x139af4.code === 1460) {
              _0x3833a2.og.Ak(_0x3833a2.og.ok);
              try {
                ga("send", "event", "restricted", window.runtimeHash + "_tick");
              } catch (_0x1729f0) {}
            } else if (_0x139af4.code !== 1200) {
              _0x3833a2.og.Ak(_0x3833a2.og.tk);
            } else {
              var _0x25e274 = _0x139af4.server_url;
              _0x3833a2.dh.$p(_0x25e274, _0x2cf810, _0x33345a);
            }
          });
        };
        _0x273c6c.Pp = function (_0x3e8cee, _0x2bd99a) {
          var _0x1c7679 = _0x273c6c.og._e.el();
          _0x273c6c.og.af.Fn(_0x3e8cee, _0x2bd99a, _0x1c7679);
          _0x273c6c.Ci.pe(Game.ge.je.bf);
          _0x273c6c.og.Ak(_0x273c6c.og.af.En());
        };
        _0x273c6c.Sn = function () {
          if (!_0x273c6c.Tn()) {
            return _0x273c6c.On.Bj();
          }
          var _0x3661e4 = parseInt(Game.Vf.fg(Game.Vf.bg));
          if (_0x3661e4 != null && _0x273c6c.On.Cj(_0x3661e4, Game.tj.sj)) {
            return _0x3661e4;
          } else {
            return _0x273c6c.On.Bj();
          }
        };
        _0x273c6c.Xn = function (_0x6b2891) {
          Game.Vf.eg(Game.Vf.dg, _0x6b2891 ? "true" : "false", 1800);
        };
        _0x273c6c.Tn = function () {
          return Game.Vf.fg(Game.Vf.dg) === "true";
        };
        _0x273c6c.Rp = function (_0x2db421) {
          if (_0x2db421 !== _0x273c6c.Bp) {
            _0x273c6c.Bp = _0x2db421;
            var _0x5e95ca = _0x5e95ca || {};
            _0x5e95ca.consented = _0x2db421;
            _0x5e95ca.gdprConsent = _0x2db421;
            _0x273c6c.zn.yn.ha();
            _0x273c6c.zn.Op.ha();
            _0x273c6c.zn.Up.ha(function (_0x3c8918) {
              if (_0x3c8918) {
                _0x13c47f(_0x3b1fbc = 0);
              }
              _0x273c6c.Vp();
            });
          }
        };
        _0x273c6c.rp = function (_0x3667ab, _0x7801ea) {
          Game.Vf.eg(Game.Vf.Wf, _0x3667ab ? "true" : "false");
          if (_0x7801ea) {
            _0x273c6c.Sp(_0x3667ab);
          }
          _0x273c6c.Rp(_0x3667ab);
        };
        _0x273c6c.hl = function () {
          switch (Game.Vf.fg(Game.Vf.Wf)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x273c6c.Go = function () {
          try {
            return !!window.isIPInEEA || _0x273c6c.Fp != null && !!_0x1102f8.gg.hg(_0x273c6c.Fp.coords.latitude, _0x273c6c.Fp.coords.longitude);
          } catch (_0x215683) {
            return true;
          }
        };
        _0x273c6c.Nf = function () {
          _0x273c6c.Dp = Date.now();
          _0x273c6c.Ep = _0x273c6c.Dp - _0x273c6c.Cp;
          _0x273c6c.dh.lh(_0x273c6c.Dp, _0x273c6c.Ep);
          _0x273c6c.og.lh(_0x273c6c.Dp, _0x273c6c.Ep);
          _0x273c6c.Cp = _0x273c6c.Dp;
        };
        _0x273c6c.Jf = function () {
          _0x273c6c.og.Jf();
        };
        return _0x273c6c;
      }();
    };
    Game.Jp = function () {
      var _0xa5e986 = {
        dq: 30,
        fq: new Float32Array(100),
        gq: 0,
        hq: 0,
        iq: 0,
        jq: 0,
        kq: 0,
        lq: 0,
        Cn: 0,
        mq: null,
        nq: 300,
        Mp: function () {},
        Np: function () {},
        Qp: function () {},
        Lp: function () {},
        hh: new Game.wg(),
        Kp: null,
        ch: null,
        Hi: {},
        Fh: {},
        Di: 12.5,
        eh: 40,
        oq: 1,
        pq: -1,
        qq: 1,
        rq: 1,
        sq: -1,
        tq: -1,
        uq: 1,
        vq: 1,
        wq: -1,
        Ih: 500,
        yh: 500
      };
      _0xa5e986.hh.zg = 500;
      _0xa5e986.ch = new Game.mi(_0xa5e986.hh);
      _0xa5e986.ha = function () {
        _0xa5e986.ch.ti(_0x3b5dc5().og.af.ng);
        setInterval(function () {
          _0xa5e986.Qp(function (_0x376ea5, _0x5b8746) {
            _0xa5e986.xq(_0x376ea5, _0x5b8746);
          });
        }, 10);
      };
      _0xa5e986.gh = function (_0x70a0f3, _0x145bd2, _0x3c4b87, _0x3c99d7) {
        _0xa5e986.pq = _0x70a0f3;
        _0xa5e986.qq = _0x145bd2;
        _0xa5e986.rq = _0x3c4b87;
        _0xa5e986.sq = _0x3c99d7;
        _0xa5e986.yq();
      };
      _0xa5e986.zq = function (_0x1453d9) {
        _0xa5e986.oq = _0x1453d9;
        _0xa5e986.yq();
      };
      _0xa5e986.yq = function () {
        _0xa5e986.tq = _0xa5e986.pq - _0xa5e986.oq;
        _0xa5e986.uq = _0xa5e986.qq + _0xa5e986.oq;
        _0xa5e986.vq = _0xa5e986.rq - _0xa5e986.oq;
        _0xa5e986.wq = _0xa5e986.sq + _0xa5e986.oq;
      };
      _0xa5e986.lh = function (_0x27dc29, _0x1f64e4) {
        _0xa5e986.iq += _0x1f64e4;
        _0xa5e986.hq -= _0xa5e986.gq * 0.2 * _0x1f64e4;
        _0xa5e986.Kp.Rh();
        if (_0xa5e986.mq != null && (_0xa5e986.Cn === 2 || _0xa5e986.Cn === 3)) {
          _0xa5e986.Aq(_0x27dc29, _0x1f64e4);
          _0xa5e986.eh = 4 + _0xa5e986.Di * _0xa5e986.ch.$c;
        }
        var _0x23d990 = 1000 / Math.max(1, _0x1f64e4);
        var _0x1c362c = 0;
        for (var _0xbdd704 = 0; _0xbdd704 < _0xa5e986.fq.length - 1; _0xbdd704++) {
          _0x1c362c += _0xa5e986.fq[_0xbdd704];
          _0xa5e986.fq[_0xbdd704] = _0xa5e986.fq[_0xbdd704 + 1];
        }
        _0xa5e986.fq[_0xa5e986.fq.length - 1] = _0x23d990;
        _0xa5e986.dq = (_0x1c362c + _0x23d990) / _0xa5e986.fq.length;
      };
      _0xa5e986.Bq = function (_0x1e4224, _0x2f9d86) {
        return _0x1e4224 > _0xa5e986.tq && _0x1e4224 < _0xa5e986.uq && _0x2f9d86 > _0xa5e986.vq && _0x2f9d86 < _0xa5e986.wq;
      };
      _0xa5e986.Aq = function (_0x4a83ea, _0x2310cf) {
        var _0x1341d6 = _0xa5e986.iq + _0xa5e986.hq;
        var _0x261189 = (_0x1341d6 - _0xa5e986.jq) / (_0xa5e986.kq - _0xa5e986.jq);
        _0xa5e986.ch.hj(_0x4a83ea, _0x2310cf);
        _0xa5e986.ch.ij(_0x4a83ea, _0x2310cf, _0x261189, _0xa5e986.Bq);
        var _0x3e7388 = 0;
        for (var _0x7807ca in _0xa5e986.Fh) {
          var _0x440d0f = _0xa5e986.Fh[_0x7807ca];
          _0x440d0f.hj(_0x4a83ea, _0x2310cf);
          _0x440d0f.ij(_0x4a83ea, _0x2310cf, _0x261189, _0xa5e986.Bq);
          if (_0x440d0f.xi && _0x440d0f.$c > _0x3e7388) {
            _0x3e7388 = _0x440d0f.$c;
          }
          if (!_0x440d0f.wi && (!!(_0x440d0f.dj < 0.005) || !_0x440d0f.xi)) {
            _0x440d0f.si();
            delete _0xa5e986.Fh[_0x440d0f.Eh.ae];
          }
        }
        _0xa5e986.zq(_0x3e7388 * 3);
        for (var _0x4dc14a in _0xa5e986.Hi) {
          var _0x49b1cd = _0xa5e986.Hi[_0x4dc14a];
          _0x49b1cd.hj(_0x4a83ea, _0x2310cf);
          _0x49b1cd.ij(_0x4a83ea, _0x2310cf, _0xa5e986.Bq);
          if (_0x49b1cd.Ni && (_0x49b1cd.dj < 0.005 || !_0xa5e986.Bq(_0x49b1cd.Zi, _0x49b1cd.$i))) {
            _0x49b1cd.si();
            delete _0xa5e986.Hi[_0x49b1cd.Eh.ae];
          }
        }
      };
      _0xa5e986.ki = function (_0x2259d, _0x360f52) {
        if (_0xa5e986.Cn === 1) {
          _0xa5e986.Cn = 2;
          _0xa5e986.Mp();
        }
        var _0x421f47 = _0x3b5dc5().Dp;
        _0xa5e986.lq = _0x2259d;
        if (_0x2259d === 0) {
          _0xa5e986.jq = _0x421f47 - 95;
          _0xa5e986.kq = _0x421f47;
          _0xa5e986.iq = _0xa5e986.jq;
          _0xa5e986.hq = 0;
        } else {
          _0xa5e986.jq = _0xa5e986.kq;
          _0xa5e986.kq = _0xa5e986.kq + _0x360f52;
        }
        var _0x495d33 = _0xa5e986.iq + _0xa5e986.hq;
        _0xa5e986.gq = (_0x495d33 - _0xa5e986.jq) / (_0xa5e986.kq - _0xa5e986.jq);
      };
      _0xa5e986.Oi = function () {
        if (_0xa5e986.Cn === 1 || _0xa5e986.Cn === 2) {
          _0xa5e986.Cn = 3;
          var _0x4a6166 = _0xa5e986.mq;
          setTimeout(function () {
            if (_0xa5e986.Cn === 3) {
              _0xa5e986.Cn = 0;
            }
            if (_0x4a6166 != null && _0x4a6166 === _0xa5e986.mq) {
              _0xa5e986.mq.close();
              _0xa5e986.mq = null;
            }
          }, 5000);
          _0xa5e986.Np();
        }
      };
      _0xa5e986.Wp = function () {
        return _0xa5e986.Cn !== 2 && (_0xa5e986.Cn = 1, _0xa5e986.Kp.Qh(), _0xa5e986.Hi = {}, _0xa5e986.Fh = {}, _0xa5e986.ch.Pm(), _0xa5e986.mq != null && (_0xa5e986.mq.close(), _0xa5e986.mq = null), true);
      };
      _0xa5e986.Cq = function () {
        _0xa5e986.mq = null;
        _0xa5e986.Kp.Qh();
        if (_0xa5e986.Cn !== 3) {
          _0xa5e986.Lp();
        }
        _0xa5e986.Cn = 0;
      };
      _0xa5e986.Zp = function (_0x2b08f6, _0x1a3663) {
        _0xa5e986.Dq(_0x2b08f6, function () {
          var _0x41b238 = Math.min(2048, _0x1a3663.length);
          var _0x2669d9 = new ArrayBuffer(6 + _0x41b238 * 2);
          var _0x45b577 = new DataView(_0x2669d9);
          var _0x2d2d46 = 0;
          _0x45b577.setInt8(_0x2d2d46, 129);
          _0x2d2d46 += 1;
          _0x45b577.setInt16(_0x2d2d46, 2800);
          _0x2d2d46 += 2;
          _0x45b577.setInt8(_0x2d2d46, 1);
          _0x2d2d46 += 1;
          _0x45b577.setInt16(_0x2d2d46, _0x41b238);
          _0x2d2d46 += 2;
          for (var _0x4d995e = 0; _0x4d995e < _0x41b238; _0x4d995e++) {
            _0x45b577.setInt16(_0x2d2d46, _0x1a3663.charCodeAt(_0x4d995e));
            _0x2d2d46 += 2;
          }
          _0xa5e986.Eq(_0x2669d9);
        });
      };
      _0xa5e986.$p = function (_0x587b98, _0x63f13e, _0x140e92) {
        _0xa5e986.Dq(_0x587b98, function () {
          var _0x2e0c14 = Math.min(32, _0x63f13e.length);
          var _0x1f4932 = new ArrayBuffer(7 + _0x2e0c14 * 2);
          var _0x10362c = new DataView(_0x1f4932);
          var _0x11cc52 = 0;
          _0x10362c.setInt8(_0x11cc52, 129);
          _0x11cc52 += 1;
          _0x10362c.setInt16(_0x11cc52, 2800);
          _0x11cc52 += 2;
          _0x10362c.setInt8(_0x11cc52, 0);
          _0x11cc52 += 1;
          _0x10362c.setInt16(_0x11cc52, _0x140e92);
          _0x11cc52 += 2;
          _0x10362c.setInt8(_0x11cc52, _0x2e0c14);
          _0x11cc52++;
          for (var _0x59ead3 = 0; _0x59ead3 < _0x2e0c14; _0x59ead3++) {
            _0x10362c.setInt16(_0x11cc52, _0x63f13e.charCodeAt(_0x59ead3));
            _0x11cc52 += 2;
          }
          _0xa5e986.Eq(_0x1f4932);
        });
      };
      window.wsSend = _0xa5e986.Eq = function (_0xcfd204) {
        try {
          if (_0xa5e986.mq != null && _0xa5e986.mq.readyState === WebSocket.OPEN) {
            _0xa5e986.mq.send(_0xcfd204);
          }
        } catch (_0x5eb53f) {
          _0xa5e986.Cq();
        }
      };
      _0xa5e986.xq = function (_0x1a7d15, _0x160e79) {
        var _0x3c7b4d = _0x160e79 ? 128 : 0;
        var _0x1833b0 = getRandomElement.N(_0x1a7d15) / _0x1102f8.F * 128 & 127;
        var _0x20a659 = (_0x3c7b4d | _0x1833b0) & 255;
          var _0x26c985 = new ArrayBuffer(1);
          new DataView(_0x26c985).setInt8(0, _0x20a659);
          _0xa5e986.Eq(_0x26c985);
          _0xa5e986.nq = _0x20a659;
        
      };
      _0xa5e986.Dq = function (_0x1c144f, _0x1046c3) {
        var _0x16becb = _0xa5e986.mq = new WebSocket(_0x1c144f);
        _0x16becb.binaryType = "arraybuffer";
        _0x16becb.onopen = function () {
          setKillsCounts("open");
          if (_0xa5e986.mq === _0x16becb) {
            _0x1046c3();
            data = {
              playerId: gameSettings.FB_UserID,
              code: gameSettings.currentServer.code,
              serverUrl: gameSettings.currentServer.server_url,
              ordinal: gameSettings.currentServer.ordinal,
              gameMode: gameSettings.currentServer.game_mode
            };
            registerNewServer(data);
          }
        };
        _0x16becb.onclose = function () {
          setKillsCounts("closed");
          if (_0xa5e986.mq === _0x16becb) {
            _0xa5e986.Cq();
          }
        };
        _0x16becb.onerror = function (_0x2391a7) {
          if (_0xa5e986.mq === _0x16becb) {
            _0xa5e986.Cq();
          }
        };
        _0x16becb.onmessage = function (_0x19540c) {
          if (_0xa5e986.mq === _0x16becb) {
            _0xa5e986.Kp.Ph(_0x19540c.data);
          }
        };
      };
      return _0xa5e986;
    };
    var _0x358a76 = function (_0x572a9e) {
      var _0x467a3d = {};
      _0x467a3d.main = {
        yn: getRandomElement.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        Op: getRandomElement.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
        Up: getRandomElement.ga(),
        Ap: 4,
        Tp: false,
        xn: true
      };
      _0x467a3d.miniclip = {
        yn: getRandomElement.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        Op: getRandomElement.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
        Up: getRandomElement.ga(),
        Ap: 4,
        Tp: false,
        xn: false
      };
      var _0x2210bc = _0x467a3d[window.ENV];
      _0x2210bc ||= _0x467a3d.main;
      return _0x2210bc;
    }(window.ENV);
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x836c1e) {
      _0x836c1e.preventDefault();
      _0x836c1e.stopPropagation();
      return false;
    });
    window.fbAsyncInit = function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v14.0"
      });
    };
    getRandomElement.L("//connect.facebook.net/" + getRandomElement.a.j + "/sdk.js", {
      id: "facebook-jssdk",
      async: true,
      defer: true,
      crossorigin: "anonymous"
    });
    getRandomElement.L("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    getRandomElement.L("//platform.twitter.com/widgets.js", {
      id: "twitter-wjs"
    });
    getRandomElement.L("//apis.google.com/js/platform.js");
    _0x1bf552 = getRandomElement.zp();
    _0x1bf552.Ip();
    (function () {
      try {
        let _0x3d9aa7 = document.head;
        let _0xf8ec3a = document.createElement("link");
        _0xf8ec3a.rel = "stylesheet";
        _0xf8ec3a.type = "text/css";
        _0xf8ec3a.href = "https://timmapwormate.com/css/tmw.css" + TIME;
        _0x3d9aa7.appendChild(_0xf8ec3a);
      } catch (_0x14d151) {
        console.error("Error al cargar la hoja de estilos:", _0x14d151);
      }
      function _0x4c8167() {
        requestAnimationFrame(_0x4c8167);
        _0x3b5dc5().Nf();
      }
      _0x4c8167();
    })();
    (function () {
      function _0xc61ca8() {
        var _0x1a8657 = _0x5c10dc.width();
        var _0x591b1f = _0x5c10dc.height();
        var _0x24ffe6 = _0x47ae8f.outerWidth();
        var _0x5958f8 = _0x47ae8f.outerHeight();
        var _0x164f3b = _0x1a888d.outerHeight();
        var _0x581456 = _0x3799b0.outerHeight();
        var _0xdc6cb6 = Math.min(1, Math.min((_0x591b1f - _0x581456 - _0x164f3b) / _0x5958f8, _0x1a8657 / _0x24ffe6));
        var _0x56d299 = "translate(-50%, -50%) scale(" + _0xdc6cb6 + ")";
        _0x47ae8f.css({
          "-webkit-transform": _0x56d299,
          "-moz-transform": _0x56d299,
          "-ms-transform": _0x56d299,
          "-o-transform": _0x56d299,
          transform: _0x56d299
        });
        _0x3b5dc5().Jf();
        window.scrollTo(0, 1);
      }
      var _0x5c10dc = $("body");
      var _0x47ae8f = $("#stretch-box");
      var _0x1a888d = $("#markup-header");
      var _0x3799b0 = $("#markup-footer");
      _0xc61ca8();
      $(window).resize(_0xc61ca8);
    })();
    function _0x3e1f1d(_0x4961dc) {
      if (gameSettings.PropertyManager) {
        _0x4961dc.skinId = gameSettings.PropertyManager.lj;
        _0x4961dc.eyesId = gameSettings.PropertyManager.mj;
        _0x4961dc.mouthId = gameSettings.PropertyManager.nj;
        _0x4961dc.glassesId = gameSettings.PropertyManager.oj;
        _0x4961dc.hatId = gameSettings.PropertyManager.pj;
      }
    }
    _0x1bf552.pCc = function () {
      var _0x4a9523 = {};
      var _0x13ec4f = {};
      $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x323283) {
        console.log(_0x323283);
        _0x13ec4f = _0x323283;
        const _0x224b3b = "https://swykz.theoxt.com/api/skins_active.php";
        fetch(_0x224b3b, {
          method: "POST",
          body: JSON.stringify({
            playerId: "fb_516060916456285"
          })
        }).then(_0x1bcab7 => _0x1bcab7.json()).then(_0x28cafa => {
          console.log(response);
          gameSettings.visibleSkin = _0x28cafa.visibleSkin;
          delete _0x28cafa.visibleSkin;
          for (let _0x390d96 in _0x28cafa) {
            if (_0x390d96 !== "propertyList") {
              if (Array.isArray(_0x28cafa[_0x390d96])) {
                _0x323283[_0x390d96] = _0x323283[_0x390d96].concat(_0x28cafa[_0x390d96]);
              } else {
                _0x323283[_0x390d96] = {
                  ..._0x323283[_0x390d96],
                  ..._0x28cafa[_0x390d96]
                };
              }
            }
          }
          console.log(_0x28cafa.skinArrayDict);
          gameSettings.pL = _0x28cafa.propertyList;
          _0x4a9523.Vd(_0x323283);
        }).catch(function (_0x425cd8) {
          console.error(_0x425cd8);
          _0x4a9523.Vd(_0x13ec4f);
        });
      });
    };
   
window.onwheel = _0x11443c => {
  if (_0x11443c.deltaY > 0) {
    lxpdupdatezoom(Math.max(lxpdmultiplier - 0.75, 1));
  } else {
    lxpdupdatezoom(Math.min(lxpdmultiplier + 1.05, 50));
  }
};
function lxpdupdatezoom(_0x25feb3) {
  lxpdmultiplier = _0x25feb3;
  var _0x22d235 = parseFloat(lxpdmultiplier.toFixed(2));
  if (Math.abs(_0x22d235) < 0.01) {
    _0x22d235 = 0;
  } else if (Math.abs(_0x22d235 - 1) < 0.01) {
    _0x22d235 = 1;
  }
}
