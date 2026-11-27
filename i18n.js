/* Taktak website translations: en (default), hi, ja */
(function(){
const T={
 title:{en:"Taktak – Voice Party & New Friends",hi:"Taktak – वॉइस पार्टी और नए दोस्त",ja:"Taktak – ボイスパーティーで新しい友だち"},
 desc:{en:"Taktak – make new friends in voice party rooms, send gifts and earn as a host. A safe 18+ social app.",hi:"Taktak – वॉइस पार्टी रूम में नए दोस्त बनाइए, गिफ्ट भेजिए और होस्ट बनकर कमाइए। 18+ सुरक्षित सोशल ऐप।",ja:"Taktak – ボイスパーティールームで新しい友だちを作り、ギフトを贈り、ホストとして稼ごう。安心の18歳以上向けソーシャルアプリ。"},
 "nav.home":{en:"Home",hi:"होम",ja:"ホーム"},
 "nav.preview":{en:"Preview",hi:"झलक",ja:"プレビュー"},
 "nav.features":{en:"Features",hi:"फीचर",ja:"機能"},
 "nav.host":{en:"Become a Host",hi:"होस्ट बनें",ja:"ホスト募集"},
 "nav.about":{en:"About Us",hi:"हमारे बारे में",ja:"私たちについて"},
 "m.preview":{en:"📱 Preview",hi:"📱 झलक",ja:"📱 プレビュー"},
 "m.features":{en:"✨ Features",hi:"✨ फीचर",ja:"✨ 機能"},
 "m.host":{en:"💎 Become a Host",hi:"💎 होस्ट बनें",ja:"💎 ホスト募集"},
 "m.about":{en:"🦉 About Us",hi:"🦉 हमारे बारे में",ja:"🦉 私たちについて"},
 "m.download":{en:"⬇ Download the App",hi:"⬇ ऐप डाउनलोड करें",ja:"⬇ アプリをダウンロード"},
 "menu":{en:"Menu",hi:"मेन्यू",ja:"メニュー"},
 sticker:{en:"Voice Party App",hi:"वॉइस पार्टी ऐप",ja:"ボイスパーティーアプリ"},
 h1:{en:'New <span class="hl">friends</span>,<br>real <span class="pk">talks.</span>',hi:'नए <span class="hl">दोस्त</span>,<br>असली <span class="pk">बातें।</span>',ja:'新しい<span class="hl">友だち</span>、<br>本当の<span class="pk">会話。</span>'},
 "hero.p":{en:"Join party rooms, chat, play games and connect with people you like – all with your voice.",hi:"पार्टी रूम में बैठिए, बात कीजिए, गेम खेलिए और अपनी पसंद के लोगों से जुड़िए – सब कुछ आवाज़ से।",ja:"パーティールームに参加して、話して、ゲームで遊んで、気の合う仲間とつながろう — すべて声で。"},
 "store.gp":{en:"GET IT ON · で入手",hi:"GET IT ON · で入手",ja:"で入手"},
 "store.apk":{en:"Direct download · ダウンロード",hi:"सीधे डाउनलोड · ダウンロード",ja:"直接ダウンロード"},
 "chip.free":{en:"🆓 Totally free",hi:"🆓 बिल्कुल फ्री",ja:"🆓 完全無料"},
 "chip.safe":{en:"🔒 Safe & 18+",hi:"🔒 सुरक्षित और 18+",ja:"🔒 安心・18歳以上"},
 "chip.rooms":{en:"🎙️ 24×7 party rooms",hi:"🎙️ 24×7 पार्टी रूम",ja:"🎙️ 24時間パーティールーム"},
 band:{en:'Voice Party<span>✦</span><em class="jp">パーティー</em><span>✦</span>New Friends<span>✦</span>Video Live – Soon<span>✦</span>Gifts<span>✦</span>Games<span>✦</span>Become a Host<span>✦</span>',
       hi:'वॉइस पार्टी<span>✦</span><em class="jp">パーティー</em><span>✦</span>नए दोस्त<span>✦</span>वीडियो लाइव – जल्द<span>✦</span>गिफ्ट<span>✦</span>गेम<span>✦</span>होस्ट बनो<span>✦</span>',
       ja:'ボイスパーティー<span>✦</span>新しい友だち<span>✦</span>ビデオライブ・近日公開<span>✦</span>ギフト<span>✦</span>ゲーム<span>✦</span>ホスト募集<span>✦</span>'},
 "scr.h":{en:"App Preview",hi:"ऐप की झलक",ja:"アプリのプレビュー"},
 "scr.p":{en:"Swipe left and right to see what's inside Taktak.",hi:"बाएँ-दाएँ खिसकाकर देखिए, Taktak के अंदर क्या-क्या है।",ja:"左右にスワイプして、Taktakの中身をチェック。"},
 "cap.party":{en:"🎉 Party Room",hi:"🎉 पार्टी रूम",ja:"🎉 パーティールーム"},
 "cap.profile":{en:"🪪 Real Profiles",hi:"🪪 असली प्रोफ़ाइल",ja:"🪪 リアルなプロフィール"},
 "cap.live":{en:"💬 24h Live Chat",hi:"💬 24 घंटे लाइव चैट",ja:"💬 24時間ライブチャット"},
 "cap.chat":{en:"✉️ Private Chat",hi:"✉️ प्राइवेट चैट",ja:"✉️ プライベートチャット"},
 "cap.moments":{en:"📸 Share your moments",hi:"📸 अपने पल शेयर करें",ja:"📸 瞬間をシェア"},
 "ft.h":{en:"What's in Taktak?",hi:"Taktak में क्या है?",ja:"Taktakでできること"},
 "ft.p":{en:"The most fun ways to talk, listen and meet new people.",hi:"बात करने, सुनने और नए लोगों से जुड़ने के सबसे मज़ेदार तरीके।",ja:"話す・聴く・出会う、いちばん楽しい方法。"},
 "f1.h":{en:"Voice Party Room",hi:"वॉइस पार्टी रूम",ja:"ボイスパーティールーム"},
 "f1.p":{en:"Create your own room or take a seat in someone's room and chat.",hi:"अपना रूम बनाइए या किसी के रूम में सीट लेकर बात कीजिए।",ja:"自分のルームを作るか、誰かのルームで席に座って話そう。"},
 soon:{en:"Coming soon",hi:"जल्द आ रहा है",ja:"近日公開"},
 "f2.h":{en:"Video Live",hi:"वीडियो लाइव",ja:"ビデオライブ"},
 "f2.p":{en:"Going live on video is coming soon. Enjoy voice parties for now.",hi:"वीडियो पर लाइव जाने का फीचर जल्द आ रहा है। अभी वॉइस पार्टी का मज़ा लीजिए।",ja:"ビデオ配信は近日公開。今はボイスパーティーを楽しもう。"},
 "f3.h":{en:"Amazing Gifts",hi:"शानदार गिफ्ट",ja:"すてきなギフト"},
 "f3.p":{en:"Send animated gifts to your favourite hosts.",hi:"पसंदीदा होस्ट को एनिमेटेड गिफ्ट भेजिए।",ja:"お気に入りのホストにアニメーションギフトを贈ろう。"},
 "f4.h":{en:"Private Chat",hi:"प्राइवेट चैट",ja:"プライベートチャット"},
 "f4.p":{en:"Connect directly by message with people you enjoyed talking to.",hi:"जिनसे बात अच्छी लगी, उनसे सीधे मैसेज में जुड़िए।",ja:"話が合った人と、メッセージで直接つながろう。"},
 "f5.h":{en:"Room Games",hi:"रूम गेम",ja:"ルームゲーム"},
 "f5.p":{en:"Play fun games with friends at the party.",hi:"पार्टी में दोस्तों के साथ मज़ेदार गेम खेलिए।",ja:"パーティーで友だちと楽しいゲームを。"},
 "f6.h":{en:"Moments",hi:"मोमेंट्स",ja:"モーメント"},
 "f6.p":{en:"Share your photos and moments, get likes and comments.",hi:"अपनी फ़ोटो और पल शेयर कीजिए, लाइक-कमेंट पाइए।",ja:"写真や瞬間をシェアして、いいねやコメントをもらおう。"},
 "s1":{en:"Adults only",hi:"सिर्फ़ बालिग़ों के लिए",ja:"18歳以上限定"},
 "s2":{en:"Moderation team",hi:"मॉडरेशन टीम",ja:"見守りチーム"},
 "s3":{en:"Report & block",hi:"रिपोर्ट और ब्लॉक",ja:"通報・ブロック"},
 "s4":{en:"Your data is safe",hi:"आपका डेटा सुरक्षित",ja:"データは安全"},
 "host.t1":{en:"Become a host,",hi:"होस्ट बनिए,",ja:"ホストになって、"},
 "host.t2":{en:"earn",hi:"कमाई",ja:"稼ごう"},
 "host.t3":{en:" big",hi:" कीजिए",ja:"！"},
 "host.p":{en:"Talk, receive gifts, collect diamonds and withdraw money. Join an agency to earn even more.",hi:"बात कीजिए, गिफ्ट पाइए, डायमंड जमा कीजिए और पैसे निकालिए। एजेंसी से जुड़कर और ज़्यादा कमाइए।",ja:"話して、ギフトをもらい、ダイヤを貯めて換金。エージェンシーに参加すればもっと稼げる。"},
 "host.btn":{en:"Start now →",hi:"अभी शुरू करें →",ja:"今すぐ始める →"},
 "st1":{en:"Download the app",hi:"ऐप डाउनलोड करें",ja:"アプリをダウンロード"},
 "st2":{en:"Talk in rooms",hi:"रूम में बात करें",ja:"ルームで話す"},
 "st3":{en:"Earn with gifts",hi:"गिफ्ट से कमाएँ",ja:"ギフトで稼ぐ"},
 "dl.h":{en:"Join the party!",hi:"पार्टी में आ जाइए!",ja:"パーティーに参加しよう！"},
 "dl.p":{en:"Download Taktak today – totally free.",hi:"आज ही Taktak डाउनलोड कीजिए, बिल्कुल फ्री।",ja:"今すぐTaktakを無料でダウンロード。"},
 "fo.terms":{en:"Terms & Conditions",hi:"नियम व शर्तें",ja:"利用規約"},
 "fo.privacy":{en:"Privacy",hi:"प्राइवेसी",ja:"プライバシー"},
 "fo.policies":{en:"Policies ▴",hi:"पॉलिसी ▴",ja:"ポリシー ▴"},
 "fo.guide":{en:"Community Guidelines",hi:"कम्युनिटी नियम",ja:"コミュニティガイドライン"},
 "fo.pp":{en:"Privacy Policy",hi:"प्राइवेसी पॉलिसी",ja:"プライバシーポリシー"},
 "fo.ua":{en:"User Agreement",hi:"यूज़र एग्रीमेंट",ja:"ユーザー規約"},
 "fo.del":{en:"Delete Account",hi:"अकाउंट डिलीट",ja:"アカウント削除"},
 "fo.about":{en:"About Taktak",hi:"Taktak के बारे में",ja:"Taktakについて"},
 "fo.contact":{en:"Contact Us",hi:"संपर्क करें",ja:"お問い合わせ"},
 "fo.copy":{en:'© 2026 Taktak. All rights reserved. <span class="ja">全著作権所有</span> • 18+ users only • support@taktakchat.com',hi:'© 2026 Taktak. सर्वाधिकार सुरक्षित। <span class="ja">全著作権所有</span> • सिर्फ़ 18+ यूज़र्स के लिए • support@taktakchat.com',ja:"© 2026 Taktak. 全著作権所有 • 18歳以上限定 • support@taktakchat.com"}
};
const LANGS={en:"EN",hi:"हिंदी",ja:"日本語"};
function pick(){
 try{const s=localStorage.getItem("tt_lang");if(s&&T.title[s])return s}catch(e){}
 const ls=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]).map(l=>String(l).toLowerCase());
 for(const l of ls){if(l.startsWith("hi"))return"hi";if(l.startsWith("ja"))return"ja";if(l.startsWith("en"))return"en"}
 return"en";
}
function apply(lang){
 document.documentElement.lang=lang;document.documentElement.dataset.lang=lang;
 document.title=T.title[lang];
 const md=document.querySelector('meta[name="description"]');if(md)md.content=T.desc[lang];
 document.querySelectorAll("[data-i]").forEach(el=>{const v=T[el.dataset.i];if(v)el.textContent=v[lang]});
 document.querySelectorAll("[data-ih]").forEach(el=>{const v=T[el.dataset.ih];if(v)el.innerHTML=v[lang]});
 document.querySelectorAll("[data-ia]").forEach(el=>{const v=T[el.dataset.ia];if(v)el.setAttribute("aria-label",v[lang])});
 document.querySelectorAll(".lang-cur").forEach(el=>el.textContent=LANGS[lang]);
 document.querySelectorAll("[data-l]").forEach(b=>b.classList.toggle("on",b.dataset.l===lang));
}
window.ttSetLang=function(l){try{localStorage.setItem("tt_lang",l)}catch(e){}apply(l)};
document.addEventListener("click",e=>{const b=e.target.closest("[data-l]");if(b){e.preventDefault();window.ttSetLang(b.dataset.l);const p=b.closest(".lang-pick");if(p)p.classList.remove("open")}
 const t=e.target.closest(".lang-toggle");if(t){e.preventDefault();t.closest(".lang-pick").classList.toggle("open")}
 else if(!e.target.closest(".lang-pick"))document.querySelectorAll(".lang-pick.open").forEach(p=>p.classList.remove("open"))});
apply(pick());
})();
