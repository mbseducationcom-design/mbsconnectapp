<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>MBS Connect</title>

<!-- ===== PWA : installable sur iOS et Android ===== -->
<meta name="description" content="Plateforme étudiante MBS : actualités, événements, forum et annonces.">
<link rel="manifest" href="./manifest.webmanifest">
<meta name="theme-color" content="#28313F">

<!-- Icônes (Android / Chrome utilisent le manifest, ceci sert de repli) -->
<link rel="icon" type="image/png" sizes="192x192" href="./icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="./icon-512.png">

<!-- iOS : Safari ignore le manifest pour l'icône d'écran d'accueil, il faut ces balises -->
<link rel="apple-touch-icon" href="./apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="MBS Connect">

  
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&family=Zilla+Slab:wght@400;600;700&display=swap');


  
:root{
  --ink:#28313F;
  --ink-800:#1B222C;
  --ink-soft:#707A88;
  --accent:#FF5E1A;
  --accent-dark:#D9490D;
  --accent-soft:#FFE6D6;
  --bg:#F3F4F7;
  --surface:#FFFFFF;
  --line:#E5E7ED;
  --flag:#E5484D;
  --ok:#1E9E6B;
  --ok-soft:#DDF3E9;

  
  --shadow: 0 1px 2px rgba(27,34,44,0.04), 0 8px 24px -12px rgba(27,34,44,0.18);
  --shadow-hover: 0 4px 10px rgba(27,34,44,0.06), 0 16px 32px -14px rgba(27,34,44,0.24);
  --radius:14px;
}

*{box-sizing:border-box;}


html,body{margin:0;padding:0;}
body{
  background:var(--bg);
  color:var(--ink);
  font-family:'Inter',sans-serif;
  -webkit-font-smoothing:antialiased;
  min-height:100vh;
}

h1,h2,h3,.display{




  font-family:'Inter',sans-serif;


  font-weight:600;


  letter-spacing:-0.015em;


  margin:0;

}
.mono{font-family:'Zilla Slab',serif;}




a{color:inherit;}
button{font-family:'Inter',sans-serif;cursor:pointer;}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
@media (prefers-reduced-motion: reduce){
  *{animation-duration:0.01ms !important; transition-duration:0.01ms !important;}
}

/* ---------- Layout shell ---------- */


.app{max-width:1180px;margin:0 auto;padding:0 clamp(14px,4vw,24px) 48px;}

.topbar{


  display:flex;align-items:center;justify-content:space-between;
  padding:22px 0 20px;
  gap:20px;flex-wrap:wrap;
  font-family:'Inter',sans-serif;
}
.brand{display:flex;align-items:center;gap:11px;}
.brand-name{font-family:'Inter',sans-serif;font-weight:700;font-size:21px;color:var(--ink);}
.brand-name span{color:var(--accent);}

.nav{
  display:flex;gap:2px;background:var(--surface);padding:5px;border-radius:14px;box-shadow:var(--shadow);
  max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;
}
.nav::-webkit-scrollbar{display:none;}
.nav button{
  border:none;background:transparent;padding:10px 18px;border-radius:10px;
  font-size:13.5px;font-weight:600;color:var(--ink-soft);white-space:nowrap;flex-shrink:0;
  transition:background .15s,color .15s;
}
.nav button.active{background:var(--ink);color:#fff;}
.nav button:not(.active):hover{color:var(--ink);}

.cta-ask{
  background:var(--accent);color:#fff;border:none;padding:11px 20px;
  border-radius:12px;font-weight:700;font-size:13.5px;
  display:flex;align-items:center;justify-content:center;gap:8px;
  box-shadow:0 8px 18px -8px rgba(255,94,26,0.55);
  transition:background .15s,transform .15s;
}
.cta-ask:hover{background:var(--accent-dark);transform:translateY(-1px);}

.topbar-right{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.auth-area{display:flex;align-items:center;}
.btn-login{
  border:1.5px solid var(--line);background:var(--surface);color:var(--ink);
  padding:10px 18px;border-radius:12px;font-weight:700;font-size:13.5px;
  box-shadow:var(--shadow);transition:.15s;
}
.btn-login:hover{border-color:var(--accent);color:var(--accent-dark);}
.user-pill{
  display:flex;align-items:center;gap:10px;background:var(--surface);
  padding:6px 8px 6px 16px;border-radius:999px;box-shadow:var(--shadow);
}
.user-pill-name{font-size:13px;font-weight:700;color:var(--ink);white-space:nowrap;}
.user-pill-logout{
  border:none;background:var(--bg);color:var(--ink-soft);font-size:11.5px;font-weight:600;
  padding:7px 13px;border-radius:999px;transition:.15s;white-space:nowrap;
}
.user-pill-logout:hover{background:var(--flag);color:#fff;}



/* ---------- Mobile hamburger trigger (hidden on desktop) ---------- */



.hamburger-btn{


  display:none;
  width:44px;height:44px;border-radius:12px;border:1.5px solid var(--line);
  background:var(--surface);box-shadow:var(--shadow);
  align-items:center;justify-content:center;flex-shrink:0;
  flex-direction:column;gap:4px;
  transition:border-color .15s, transform .15s;
}
.hamburger-btn span{
  display:block;width:19px;height:2px;border-radius:2px;background:var(--ink);
  transition:transform .25s ease, opacity .2s ease;
}
.hamburger-btn.open span:nth-child(1){transform:translateY(6px) rotate(45deg);}
.hamburger-btn.open span:nth-child(2){opacity:0;}
.hamburger-btn.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);}

/* ---------- Mobile drawer menu (signature-consistent, modern) ---------- */


.mobile-menu-overlay{


  position:fixed;inset:0;background:rgba(27,34,44,0.55);
  display:none;z-index:60;backdrop-filter:blur(2px);

  
}
.mobile-menu-overlay.open{display:block;}


.mobile-menu{

  position:absolute;top:0;right:0;height:100%;width:min(84vw,360px);
  background:var(--surface);box-shadow:-16px 0 40px -12px rgba(27,34,44,0.35);
  display:flex;flex-direction:column;
  padding:20px 18px calc(20px + env(safe-area-inset-bottom));
  transform:translateX(100%);transition:transform .32s cubic-bezier(.32,.72,0,1);
  overflow-y:auto;
}

.mobile-menu-overlay.open .mobile-menu{transform:translateX(0);}

.mobile-menu-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;}
.mobile-menu-close{
  width:38px;height:38px;border-radius:10px;border:none;background:var(--bg);
  color:var(--ink-soft);font-size:16px;display:flex;align-items:center;justify-content:center;
  transition:.15s;
}
.mobile-menu-close:hover{background:var(--flag);color:#fff;}
.mobile-menu-section-label{
  font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;
  color:var(--ink-soft);margin:18px 0 10px;
}
.mobile-menu-section-label:first-of-type{margin-top:0;}
.mobile-nav{display:flex;flex-direction:column;gap:6px;}
.mobile-nav button{
  border:none;background:var(--bg);text-align:left;padding:14px 16px;border-radius:12px;
  font-size:14.5px;font-weight:600;color:var(--ink);display:flex;align-items:center;
  justify-content:space-between;transition:background .15s,color .15s;
}
.mobile-nav button .arrow-i{color:var(--ink-soft);font-size:13px;transition:transform .15s;}
.mobile-nav button.active{background:var(--ink);color:#fff;}
.mobile-nav button.active .arrow-i{color:var(--accent);transform:translateX(2px);}
.mobile-menu-auth{margin-top:6px;}
.mobile-menu-auth .btn-login{width:100%;text-align:center;display:block;}
.mobile-menu-auth .user-pill{width:100%;justify-content:space-between;padding:10px 8px 10px 16px;}
.mobile-menu .cta-ask{width:100%;margin-top:14px;min-height:48px;}

/* ---------- Departure board (signature element) ---------- */


.board-wrap{


  margin:26px 0 40px;
  background-color:var(--surface);
  border-radius:18px;overflow:hidden;box-shadow:var(--shadow);


}
.board-head{


  background:var(--ink-800);
  color:white;
  font-family:'Inter',sans-serif;font-size:14px;letter-spacing:.14em;
  text-transform:uppercase;
  padding:17px 20px;display:flex;
  justify-content:space-between;
  border-bottom:1px solid rgba(255,255,255,0.1);


}
.board{
  background:var(--surface);
  padding:6px 0;
}
.board-row{

  display:grid;grid-template-columns:110px 1fr 150px 40px;
  align-items:center;gap:12px;
  padding:13px 20px;
  font-family:'Zilla Slab',serif;
  color:var(--ink);font-size:13px;
  border-bottom:1px solid var(--line);
}
.board-row:last-child{border-bottom:none;}
.board-row .flip{
  animation:flip .5s ease-out both;
}
@keyframes flip{
  0%{opacity:0;transform:rotateX(60deg);}
  100%{opacity:1;transform:rotateX(0);}
}
.board-date{
  color:var(--accent);font-weight:800;
  font-family:'Inter',sans-serif;
}
.board-name{

  color:var(--ink);

  font-family:'Inter',sans-serif;
  font-weight:600;font-size:13.5px;
}
.board-place{
  color:var(--ink-soft);text-align:left;
  font-family:'Inter',sans-serif;
}

/* ---------- Views ---------- */


.view{display:none;}
.view.active{display:block;animation:fadein .3s ease both;}
@keyframes fadein{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:none;}}

.hero{

  display:flex;justify-content:space-between;align-items:flex-end;
  gap:24px;flex-wrap:wrap;margin-bottom:32px;
}
.hero-greeting{font-size:36px;max-width:560px;line-height:1.14;color:var(--ink);}

.hero-date{

  padding-bottom: 20px;
  padding-top: 20px;
  font-family:'Inter',sans-serif;color:var(--accent);font-size:14px;
  text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;font-weight:700;
}

.stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:48px;}
.stat-card{
  background:var(--surface);border-radius:var(--radius);
  padding:20px 22px;box-shadow:var(--shadow);
  transition:transform .15s, box-shadow .15s;
}
.stat-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-hover);}
.stat-num{font-family:'Inter',sans-serif;font-size:34px;font-weight:700;color:var(--accent);}
.stat-label{font-size:12.5px;color:var(--ink-soft);margin-top:3px;font-weight:500;}

.section-head{
  display:flex;justify-content:space-between;align-items:baseline;
  margin:0 0 18px;padding-bottom:0;
  gap:12px;flex-wrap:wrap;
}
.section-head h2{font-size:21px;color:var(--ink);}
.section-head .head-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.section-head .see-all{font-size:12.5px;font-weight:700;color:var(--accent);text-decoration:none;background:none;border:none;padding-bottom:20px;}
.section-head .see-all:hover{color:var(--accent-dark);}
.btn-admin{
  border:none;background:var(--ink);color:#fff;padding:9px 16px;border-radius:10px;
  font-size:12.5px;font-weight:700;display:inline-flex;align-items:center;gap:6px;
  transition:background .15s;
}
.btn-admin:hover{background:var(--accent);}

.section-block{margin-bottom:48px;}

/* News */
.news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.news-card{
  background:var(--surface);border-radius:var(--radius);
  padding:20px;display:flex;flex-direction:column;gap:11px;
  box-shadow:var(--shadow);
  transition:transform .15s, box-shadow .15s;
  position:relative;
}
.news-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);}
.tag{
  align-self:flex-start;font-family:'Inter',sans-serif;font-size:10.5px;
  text-transform:uppercase;letter-spacing:.08em;padding:4px 10px;border-radius:999px;
  background:var(--accent-soft);color:var(--accent-dark);font-weight:600;
}
.tag.intl{background:var(--accent);color:#fff;}
.tag.vie{background:var(--ink);color:#fff;}
.tag.acad{background:var(--accent-soft);color:var(--accent-dark);}
.tag.team{background:var(--ink);color:#fff;}
.news-card h3{font-size:16.5px;line-height:1.32;color:var(--ink);font-weight:600;font-family:'Inter',sans-serif;}
.news-meta{font-family:'Zilla Slab',serif;font-size:11.5px;color:var(--ink-soft);}
.news-excerpt{font-size:13.3px;color:var(--ink-soft);line-height:1.55;flex:1;}
.news-cta{
  margin-top:4px;align-self:flex-start;
  display:inline-flex;align-items:center;gap:6px;
  border:1.5px solid var(--accent);color:var(--accent-dark);
  background:none;padding:8px 15px;border-radius:10px;
  font-size:12px;font-weight:700;text-decoration:none;
  transition:background .15s,color .15s;
}
.news-cta:hover{background:var(--accent);color:#fff;}
.card-delete{
  position:absolute;top:14px;right:14px;border:none;background:var(--bg);color:var(--ink-soft);
  width:28px;height:28px;border-radius:8px;font-size:13px;display:flex;align-items:center;justify-content:center;
  transition:.15s;
}
.card-delete:hover{background:var(--flag);color:#fff;}

/* Events */
.events-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.event-card{
  background:var(--surface);border-radius:var(--radius);
  overflow:hidden;display:flex;flex-direction:column;
  box-shadow:var(--shadow);
  transition:transform .15s, box-shadow .15s;
  position:relative;
}
.event-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);}
.event-date-badge{
  background:#28313F;color:#fff;padding:14px 18px;
  display:flex;justify-content:space-between;align-items:center;
}
.event-date-badge .d{font-family:'Inter',sans-serif;font-size:23px;font-weight:700;color:#FFFFFF;}
.event-date-badge .m{font-family:'Inter',sans-serif;font-size:18px;text-transform:uppercase;font-weight:600;color:white;}
.event-body{padding:18px;display:flex;flex-direction:column;gap:9px;flex:1;}
.event-body h3{font-size:15.5px;line-height:1.32;color:var(--ink);font-family:'Inter',sans-serif;}
.event-loc{font-size:12.5px;color:var(--ink-soft);display:flex;align-items:center;gap:6px;}
.event-btn{
  margin-top:auto;align-self:flex-start;border:1.5px solid var(--accent);color:var(--accent-dark);
  background:none;padding:8px 15px;border-radius:10px;font-size:12px;font-weight:700;
  transition:background .15s,color .15s;
}
.event-btn:hover{background:var(--accent);color:#fff;}
.event-btn.joined{background:var(--ink);color:#fff;border-color:var(--ink);}
.event-roster-btn{
  margin-top:4px;align-self:flex-start;border:none;background:none;color:var(--ink-soft);
  font-size:11.5px;font-weight:700;padding:2px 0;text-decoration:underline;text-underline-offset:2px;
  transition:color .15s;
}
.event-roster-btn:hover{color:var(--accent-dark);}
.roster-row{
  display:flex;justify-content:space-between;align-items:flex-start;gap:12px;
  padding:11px 13px;background:var(--bg);border-radius:10px;font-size:13px;
}
.roster-row .who{font-weight:700;color:var(--ink);}
.roster-row .formation{color:var(--ink-soft);font-size:12px;margin-top:2px;}
.roster-row .email{color:var(--ink-soft);font-size:12px;text-align:right;white-space:nowrap;}
.roster-list{display:flex;flex-direction:column;gap:8px;max-height:340px;overflow-y:auto;margin-bottom:6px;}

/* Forum */

.forum-toolbar{display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;align-items:center;justify-content:space-between;}
.filter-row{display:flex;gap:7px;flex-wrap:wrap;}
.filter-chip{
  border:none;background:var(--surface);padding:7px 15px;border-radius:999px;
  font-size:12px;font-weight:700;color:var(--ink-soft);box-shadow:var(--shadow);
}
.filter-chip.active{background:var(--accent);color:#fff;box-shadow:0 8px 16px -8px rgba(255,94,26,0.55);}

.thread{
  background:var(--surface);border-radius:var(--radius);
  margin-bottom:12px;overflow:hidden;box-shadow:var(--shadow);
}
.thread-head{
  display:grid;grid-template-columns:58px 1fr auto;gap:14px;align-items:center;
  padding:18px 20px;
}
.upvote{
  display:flex;flex-direction:column;align-items:center;gap:2px;background:var(--bg);border:none;
  border-radius:11px;padding:7px 0;color:var(--ink-soft);transition:.15s;min-height:44px;justify-content:center;
}
.upvote:hover{background:var(--accent-soft);color:var(--accent-dark);}
.upvote.voted{background:var(--accent);color:#fff;}
.upvote .n{font-family:'Inter',sans-serif;font-weight:700;font-size:13px;}
.upvote .arrow{font-size:11px;}
.thread-main h3{font-size:15.5px;margin-bottom:6px;color:var(--ink);font-family:'Space Grotesk',sans-serif;font-weight:600;}
.thread-meta{font-size:12px;color:var(--ink-soft);display:flex;gap:10px;align-items:center;flex-wrap:wrap;}
.thread-meta .tag{margin-right:2px;}
.thread-actions{display:flex;align-items:center;gap:10px;}
.thread-delete{
  border:none;background:none;color:var(--ink-soft);font-size:12.5px;font-weight:700;
  white-space:nowrap;padding:4px 8px;border-radius:6px;transition:.15s;
}
.thread-delete:hover{background:var(--flag);color:#fff;}
.thread-toggle{
  border:none;background:none;color:var(--accent);font-size:12.5px;font-weight:700;
  white-space:nowrap;
}
.thread-toggle:hover{color:var(--accent-dark);}
.thread-body{border-top:1px solid var(--line);padding:16px 20px 20px 92px;display:none;}
.thread-body.open{display:block;}
.reply{padding:11px 0;border-bottom:1px dashed var(--line);font-size:13.3px;line-height:1.55;color:var(--ink);display:flex;justify-content:space-between;align-items:flex-start;gap:12px;}
.reply:last-of-type{border-bottom:none;}
.reply-vote{
  flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:1px;
  background:var(--bg);border:none;border-radius:8px;padding:5px 9px;color:var(--ink-soft);transition:.15s;
}
.reply-vote:hover{background:var(--accent-soft);color:var(--accent-dark);}
.reply-vote.voted{background:var(--accent);color:#fff;}
.reply-vote .n{font-family:'Inter',sans-serif;font-weight:700;font-size:11.5px;}
.reply-vote .arrow{font-size:9px;}
.reply-content{flex:1;min-width:0;}
.reply .who{font-weight:700;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--accent-dark);display:flex;align-items:center;gap:6px;margin-bottom:3px;}
.reply .who .tag{padding:2px 8px;font-size:9px;}
.reply-delete{

  flex-shrink:0;border:none;background:none;color:var(--ink-soft);font-size:11.5px;font-weight:600;
  padding:3px 8px;border-radius:6px;white-space:nowrap;transition:.15s;
}
.reply-delete:hover{background:var(--flag);color:#fff;}
.reply-form{display:flex;gap:8px;margin-top:14px;}
.reply-form input{
  flex:1;border:1.5px solid var(--line);border-radius:10px;padding:10px 13px;font-size:13px;font-family:inherit;background:var(--bg);
}
.reply-form input:focus{border-color:var(--accent);outline:none;}
.reply-form button{
  border:none;background:var(--ink);color:#fff;padding:10px 18px;border-radius:10px;font-size:12.5px;font-weight:700;
}
.reply-form button:hover{background:var(--accent);}

/* Modal */
.modal-overlay{
  position:fixed;inset:0;background:rgba(27,34,44,0.6);display:none;
  align-items:center;justify-content:center;padding:20px;z-index:50;
  backdrop-filter:blur(2px);
}
.modal-overlay.open{display:flex;}
.modal{
  background:var(--surface);border-radius:20px;max-width:460px;width:100%;
  padding:28px;box-shadow:0 30px 60px -20px rgba(27,34,44,0.4);
  max-height:88vh;overflow-y:auto;
}
.modal h2{font-size:20px;margin-bottom:5px;color:var(--ink);}
.modal p.sub{color:var(--ink-soft);font-size:13px;margin:0 0 20px;}
.field{margin-bottom:15px;}
.field label{display:block;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-soft);margin-bottom:7px;}
.field input,.field select,.field textarea{
  width:100%;border:1.5px solid var(--line);border-radius:10px;padding:11px 13px;font-size:13.5px;
  font-family:inherit;background:var(--bg);
}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--accent);outline:none;}
.field textarea{resize:vertical;min-height:80px;}
.modal-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:8px;}
.btn-secondary{border:1.5px solid var(--line);background:none;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:700;color:var(--ink-soft);}
.btn-primary{border:none;background:var(--accent);color:#fff;padding:10px 20px;border-radius:10px;font-size:13px;font-weight:700;box-shadow:0 8px 16px -8px rgba(255,94,26,0.55);}
.btn-primary:hover{background:var(--accent-dark);}
.btn-primary:disabled{opacity:.6;cursor:default;transform:none;}

.empty{
  border:1.5px dashed var(--line);border-radius:var(--radius);padding:28px;text-align:center;color:var(--ink-soft);font-size:13.5px;background:var(--surface);
}

/* Event signup modal specifics */


.signup-event-box{


  background:var(--bg);border-radius:12px;padding:13px 15px;margin-bottom:18px;


}
.signup-event-box .se-title{font-weight:700;font-size:14px;color:var(--ink);}
.signup-event-box .se-meta{font-size:12px;color:var(--ink-soft);margin-top:3px;}
.field-error{border-color:var(--flag) !important;}
.form-msg{
  font-size:12.5px;border-radius:10px;padding:10px 13px;margin-bottom:14px;display:none;
}
.form-msg.show{display:block;}
.form-msg.success{background:var(--ok-soft);color:var(--ok);}
.form-msg.error{background:#FBE1E2;color:var(--flag);}

/* ---------- Auth gate (login / signup landing) ---------- */
.auth-gate{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:24px;
}
.auth-card{
  background:var(--surface);border-radius:22px;box-shadow:var(--shadow-hover);
  width:100%;max-width:440px;padding:32px 30px 28px;
}
.auth-card .brand-name{font-size:22px;margin-bottom:4px;}
.auth-sub{color:var(--ink-soft);font-size:13px;margin:0 0 22px;}
.auth-tabs{
  display:flex;gap:4px;background:var(--bg);padding:5px;border-radius:12px;margin-bottom:22px;
}
.auth-tabs button{
  flex:1;border:none;background:transparent;padding:10px 0;border-radius:9px;
  font-size:13px;font-weight:700;color:var(--ink-soft);transition:.15s;
}
.auth-tabs button.active{background:var(--ink);color:#fff;}
.role-select{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px;}
.role-card{
  border:1.5px solid var(--line);background:var(--bg);border-radius:14px;
  padding:16px 10px;text-align:center;font-size:13px;font-weight:700;color:var(--ink-soft);
  display:flex;flex-direction:column;align-items:center;gap:6px;transition:.15s;
}
.role-card .emoji{font-size:22px;}
.role-card.active{border-color:var(--accent);background:var(--accent-soft);color:var(--accent-dark);}
.auth-panel{display:flex;flex-direction:column;}
.auth-foot-note{font-size:11.5px;color:var(--ink-soft);margin-top:14px;line-height:1.5;text-align:center;}
.link-btn{border:none;background:none;color:var(--accent-dark);font-weight:700;font-size:12.5px;padding:0;}
.link-btn:hover{color:var(--accent);text-decoration:underline;}

@media(max-width:860px){
  .news-grid,.events-grid,.stat-row{grid-template-columns:1fr 1fr;}
  .board-row{grid-template-columns:80px 1fr;}
  .board-place,.board-count{display:none;}
}

/* ---------- Phone adaptation ---------- */


@media(max-width:700px){
  body{font-size:15px;}

  .news-grid,.events-grid,.stat-row{grid-template-columns:1fr;}

  /* Header: brand + hamburger only, nav/auth/cta move into the drawer */


  .topbar{padding:16px 0 14px;gap:12px;}
  .brand-name{font-size:18px;}
  .topbar-right .nav,
  .topbar-right .auth-area,
  .topbar-right .cta-ask{display:none;}
  .hamburger-btn{display:flex;}

  .hero{margin-bottom:22px;}
  .hero-greeting{font-size:24px;line-height:1.22;}
  .hero-date{padding-top:6px;padding-bottom:12px;font-size:13px;}



  /* Departure board: keep only the essentials legible */
  .board-wrap{margin:18px 0 28px;border-radius:14px;}


  .board-head{padding:14px 16px;font-size:12px;}
  .board-row{padding:12px 16px;grid-template-columns:64px 1fr;gap:8px;font-size:12.5px;}
  .board-name{font-size:12.5px;}

  .stat-row{gap:10px;margin-bottom:32px;}
  .stat-card{padding:16px 18px;}
  .stat-num{font-size:28px;}

  .section-block{margin-bottom:36px;}
  .section-head{margin-bottom:14px;}
  .section-head h2{font-size:18px;}


  .news-grid,.events-grid{gap:12px;}
  
  .news-card{padding:16px;}
  .event-body{padding:16px;}


  /* Forum: let the thread header wrap into two clean rows */


  .forum-toolbar{margin-bottom:16px;}


  .filter-row{width:100%;overflow-x:auto;flex-wrap:nowrap;-webkit-overflow-scrolling:touch;padding-bottom:2px;}

  
  .filter-chip{flex-shrink:0;}



  .thread-head{

    grid-template-columns:44px 1fr;


    grid-template-areas:"vote main" "actions actions";


    padding:14px 16px;row-gap:10px;
  }
  .upvote{grid-area:vote;}
  .thread-main{grid-area:main;}
  .thread-actions{grid-area:actions;justify-content:flex-end;flex-wrap:wrap;}

  .thread-body{padding:14px 16px 16px;}

  .reply{flex-wrap:wrap;}

  .reply-form{flex-direction:column;}
  .reply-form button{width:100%;min-height:44px;}

  /* Modals become a bottom sheet: easier to reach with a thumb */


  .modal-overlay{align-items:flex-end;padding:0;}


  .modal{

    max-width:100%;width:100%;border-radius:20px 20px 0 0;
    padding:20px 18px calc(20px + env(safe-area-inset-bottom));
    max-height:92vh;
  }
  .modal-actions{flex-direction:column-reverse;gap:8px;}
  .modal-actions button{width:100%;min-height:46px;}
  .auth-card{padding:26px 20px 22px;border-radius:18px;}
}

@media(max-width:380px){
  .hero-greeting{font-size:21px;}
  .stat-num{font-size:24px;}
  .mobile-menu{width:100vw;}
}
</style>
</head>
<body>

<!-- ================= AUTH GATE ================= -->


<div class="auth-gate" id="authGate">

  <div class="auth-card">

    <div class="brand-name">MBS <span>Connect</span></div>
    <p class="auth-sub">Connecte-toi ou crée un compte pour accéder à la plateforme.</p>

    <div class="auth-tabs" id="authTabs">
      <button data-tab="login" class="active">Connexion</button>
      <button data-tab="signup">Créer un compte</button>
    </div>

    <!-- LOGIN PANEL -->


    <div class="auth-panel" id="authPanelLogin">

      <div class="form-msg" id="gateLoginMsg"></div>

      <div class="field">

        <label for="gateLoginEmail">Email</label>

        <input id="gateLoginEmail" type="email" placeholder="ex. camille.dubois@mail.com">
      </div>

      <div class="field">

        <label for="gateLoginPassword">Mot de passe</label>
        <input id="gateLoginPassword" type="password" placeholder="••••••••">
      </div>
      <button class="btn-primary" id="gateLoginBtn" style="width:100%">Se connecter</button>
      <p class="auth-foot-note"><button type="button" class="link-btn" id="forgotPasswordBtn">Mot de passe oublié ?</button></p>
      <p class="auth-foot-note">Pas encore de compte ? Clique sur « Créer un compte » ci-dessus.</p>
    </div>

    <!-- SIGNUP PANEL -->
    <div class="auth-panel" id="authPanelSignup" style="display:none">
      <div class="role-select" id="roleSelect">
        <button type="button" class="role-card active" data-role="etudiant"><span class="emoji">🎓</span>Étudiant</button>
        <button type="button" class="role-card" data-role="equipe"><span class="emoji">🏫</span>Équipe MBS</button>
      </div>
      <div class="form-msg" id="gateSignupMsg"></div>
      <div class="field">
        <label for="gatePrenom">Prénom</label>
        <input id="gatePrenom" type="text" placeholder="ex. Camille">
      </div>
      <div class="field">
        <label for="gateNom">Nom</label>
        <input id="gateNom" type="text" placeholder="ex. Dubois">
      </div>
      <div class="field">
        <label for="gateEmail">Email</label>
        <input id="gateEmail" type="email" placeholder="ex. camille.dubois@mail.com">
      </div>
      <div class="field">
        <label for="gatePassword">Mot de passe</label>
        <input id="gatePassword" type="password" placeholder="8 caractères minimum">
      </div>
      <div class="field" id="gateFormationField">
        <label for="gateFormation">Formation</label>
        <input id="gateFormation" type="text" placeholder="ex. Bachelor RH">
      </div>
      <button class="btn-primary" id="gateSignupBtn" style="width:100%">Créer mon compte</button>
    </div>

    <!-- RESET PASSWORD PANEL -->
    <div class="auth-panel" id="authPanelReset" style="display:none">
      <p class="auth-sub" style="margin:0 0 18px;">Ce site fonctionne sans serveur d'email : indique ton email, et si un compte correspond, tu pourras définir un nouveau mot de passe directement ici, sur cet appareil.</p>
      <div class="form-msg" id="gateResetMsg"></div>

      <div id="resetStep1">
        <div class="field">
          <label for="resetEmail">Email</label>
          <input id="resetEmail" type="email" placeholder="ex. camille.dubois@mail.com">
        </div>
        <button class="btn-primary" id="resetFindBtn" style="width:100%">Continuer</button>
      </div>

      <div id="resetStep2" style="display:none">
        <div class="field">
          <label for="resetPassword">Nouveau mot de passe</label>
          <input id="resetPassword" type="password" placeholder="6 caractères minimum">
        </div>
        <div class="field">
          <label for="resetPasswordConfirm">Confirmer le mot de passe</label>
          <input id="resetPasswordConfirm" type="password" placeholder="6 caractères minimum">
        </div>
        <button class="btn-primary" id="resetConfirmBtn" style="width:100%">Réinitialiser le mot de passe</button>
      </div>

      <p class="auth-foot-note"><button type="button" class="link-btn" id="backToLoginBtn">← Retour à la connexion</button></p>
    </div>
  </div>
</div>

<div class="app" id="mainApp" style="display:none">

  <div class="topbar">
    <div class="brand">
      <div class="brand-name">Bienvenue sur MBS <span>Connect</span></div>
    </div>

    <div class="topbar-right">
      <nav class="nav" id="nav">
        <button data-view="accueil" class="active">Accueil</button>
        <button data-view="actus">Actualités</button>
        <button data-view="evenements">Événements</button>
        <button data-view="forum">Espace discussion</button>
        <button data-view="annonces">Annonces importantes</button>
        <button data-view="espace">Mon espace</button>
      </nav>

      <div class="auth-area" id="authArea"></div>

      <button class="cta-ask" id="openAskBtn">+ Poser une question</button>
    </div>

    <button class="hamburger-btn" id="hamburgerBtn" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobileMenuOverlay">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- ACCUEIL -->


  <section class="view active" id="view-accueil">

    <div class="hero">
      <div>
        <div class="hero-date" id="heroDate"></div>
        <h1 class="hero-greeting" id="heroGreeting">Bonjour 👋 Voici ce qu'il se passe chez MBS cette semaine</h1>
      </div>
    </div>

    <!-- Annonces équipe MBS (masqué automatiquement s'il n'y en a aucune) -->
    <div class="section-block" id="announcementsSection" style="display:none;">
      <div class="section-head"><h2>📢 Annonces de l'équipe MBS</h2></div>
      <div class="news-grid" id="announcementsList"></div>
    </div>

    <!-- Departure-board signature element -->


    <div class="board-wrap">

      <div class="board-head">

        <span>Prochainement</span>


        <span id="boardClock"></span>


      </div>
      <div class="board" id="board"></div>
    </div>

    <div class="stat-row">

      <div class="stat-card"><div class="stat-num" id="statNews">0</div><div class="stat-label">Actualités cette semaine</div></div>
      <div class="stat-card"><div class="stat-num" id="statEvents">0</div><div class="stat-label">Événements à venir</div></div>
      <div class="stat-card"><div class="stat-num" id="statThreads">0</div><div class="stat-label">Discussions actives</div></div>
    </div>

    <div class="section-block">
      <div class="section-head">
        <h2>Dernières actus</h2>
        <button class="see-all" data-goto="actus">Tout voir →</button>
      </div>
      <div class="news-grid" id="newsPreview"></div>
    </div>

    <div class="section-block">
      <div class="section-head">
        <h2>Prochains événements</h2>
        <button class="see-all" data-goto="evenements">Tout voir →</button>
      </div>
      <div class="events-grid" id="eventsPreview"></div>
    </div>

    <div class="section-block">


      <div class="section-head">


        <h2>Discussions récentes</h2>
        <button class="see-all" data-goto="forum">Tout voir →</button>
      </div>
      <div id="forumPreview"></div>
    </div>
  </section>

  <!-- ACTUS -->


  <section class="view" id="view-actus">
  
    <div class="section-head">

      <h2>Toutes les actualités</h2>
      <div class="head-actions">
        <button class="btn-admin" id="addNewsBtn" style="display:none">+ Ajouter une actu</button>
      </div>
    </div>
    <div class="news-grid" id="newsAll"></div>
  </section>

  <!-- EVENEMENTS -->


  <section class="view" id="view-evenements">
    <div class="section-head">
      <h2>Tous les événements</h2>
      <div class="head-actions">
        <button class="btn-admin" id="addEventBtn" style="display:none">+ Ajouter un événement</button>
      </div>
    </div>
    <div class="events-grid" id="eventsAll"></div>
  </section>

  <!-- FORUM -->


  <section class="view" id="view-forum">
    <div class="section-head"><h2>Forum étudiant</h2></div>
    <div class="forum-toolbar">
      <div class="filter-row" id="filterRow"></div>
    </div>
    <div id="threadList"></div>
  </section>

  <!-- ANNONCES IMPORTANTES -->
  <section class="view" id="view-annonces">
    <div class="section-head">
      <h2>Annonces importantes</h2>
      <div class="head-actions">
        <button class="btn-admin" id="addAnnouncementBtn" style="display:none">+ Publier une annonce</button>
      </div>
    </div>
    <div class="news-grid" id="announcementsAll"></div>
  </section>

  <!-- MON ESPACE -->
  <section class="view" id="view-espace">
    <div class="section-head"><h2 id="espaceTitle">Mon espace</h2></div>
    <div id="espaceContent"></div>
  </section>

</div>

<!-- Mobile drawer menu -->
<div class="mobile-menu-overlay" id="mobileMenuOverlay">
  <div class="mobile-menu">
    <div class="mobile-menu-head">
      <div class="brand"><div class="brand-name">MBS <span>Connect</span></div></div>
      <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Fermer le menu">✕</button>
    </div>

    <div class="mobile-menu-section-label">Navigation</div>

    <nav class="mobile-nav" id="mobileNav">
      <button data-view="accueil" class="active">Accueil <span class="arrow-i">→</span></button>
      <button data-view="actus">Actualités <span class="arrow-i">→</span></button>
      <button data-view="evenements">Événements <span class="arrow-i">→</span></button>
      <button data-view="forum">Espace discussion <span class="arrow-i">→</span></button>
      <button data-view="annonces">Annonces importantes <span class="arrow-i">→</span></button>
      <button data-view="espace">Mon espace <span class="arrow-i">→</span></button>
    </nav>

    <div class="mobile-menu-section-label">Mon compte</div>
    <div class="mobile-menu-auth" id="mobileAuthArea"></div>

    <button class="cta-ask" id="mobileAskBtn">+ Poser une question</button>
  </div>
</div>

<!-- Modal: ask a question -->


<div class="modal-overlay" id="askOverlay">
  <div class="modal">


    <h2>Poser une question</h2>


    <p class="sub">Elle apparaîtra dans le fil du forum, visible par tous les étudiants.</p>
    <p class="sub" id="askAsUser" style="display:none;color:var(--accent-dark);font-weight:600;"></p>

    <div id="askIdentityFields" style="display:none">
      <div class="field">
        <label for="askNom">Votre nom</label>
        <input id="askNom" type="text" placeholder="ex. Dubois">
      </div>
      <div class="field">
        <label for="askPrenom">Votre prénom</label>
        <input id="askPrenom" type="text" placeholder="ex. Camille">
      </div>
      <div class="field">
        <label for="askFormation">Votre formation</label>
        <input id="askFormation" type="text" placeholder="ex. Bachelor RH">
      </div>
    </div>

    <div class="field">
      <label for="askCat">Catégorie</label>
      <select id="askCat">
        <option>Scolarité</option>
        <option>Vie de l'école</option>
        <option>Alternance/Stages</option>
        <option>Autres</option>
      </select>
    </div>
    <div class="field">
      <label for="askTitle">Votre question</label>
      <textarea id="askTitle" placeholder="Décrivez votre question en une phrase claire..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" id="cancelAsk">Annuler</button>
      <button class="btn-primary" id="submitAsk">Publier</button>
    </div>
  </div>
</div>

<!-- Modal: event signup (sends to Google Sheet) -->

<div class="modal-overlay" id="signupOverlay">
  <div class="modal">
   
    <h2>Je m'inscris</h2>


    <p class="sub">Ton inscription est enregistrée automatiquement dans le suivi de l'événement.</p>

    <div class="signup-event-box">


      <div class="se-title" id="signupEventTitle"></div>
      <div class="se-meta" id="signupEventMeta"></div>
    </div>

    <div class="form-msg" id="signupMsg"></div>

    <div class="field">

      <label for="signupPrenom">Prénom</label>
      <input id="signupPrenom" type="text" placeholder="ex. Camille">
    </div>
    <div class="field">

      <label for="signupNom">Nom</label>
      <input id="signupNom" type="text" placeholder="ex. Dubois">
    </div>
    <div class="field">
      <label for="signupEmail">Email</label>
      <input id="signupEmail" type="email" placeholder="ex. camille.dubois@mail.com">
    </div>
    <div class="field">
      <label for="signupFormation">Formation</label>
      <input id="signupFormation" type="text" placeholder="ex. Bachelor RH">
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" id="cancelSignup">Annuler</button>
      <button class="btn-primary" id="submitSignup">S'inscrire</button>
    </div>
  </div>
</div>

<!-- Modal: roster (équipe MBS only) — voir qui s'est inscrit à un événement -->
<div class="modal-overlay" id="rosterOverlay">
  <div class="modal">
    <h2>Liste des inscrits</h2>
    <p class="sub" id="rosterEventTitle"></p>
    <div class="roster-list" id="rosterList"></div>
    <div class="modal-actions">
      <button class="btn-secondary" id="closeRoster">Fermer</button>
    </div>
  </div>
</div>

<!-- Modal: add announcement (équipe MBS only) -->
<div class="modal-overlay" id="announcementOverlay">
  <div class="modal">
    <h2>Ajouter une annonce</h2>
    <p class="sub">Elle apparaîtra dans l'onglet "Annonces importantes", et en haut de l'accueil si elle est marquée urgente.</p>
    <div class="form-msg" id="announcementMsg"></div>
    <div class="field">
      <label for="announcementTitle">Titre</label>
      <input id="announcementTitle" type="text" placeholder="ex. Maintenance informatique ce soir">
    </div>
    <div class="field">
      <label for="announcementText">Message</label>
      <textarea id="announcementText" placeholder="Détails de l'annonce..."></textarea>
    </div>
    <div class="field" style="display:flex;align-items:center;gap:10px;">
      <input id="announcementUrgent" type="checkbox" style="width:auto;">
      <label for="announcementUrgent" style="margin:0;text-transform:none;letter-spacing:normal;font-weight:600;font-size:13px;color:var(--ink);">🚨 Marquer comme urgente (mise en avant sur l'accueil)</label>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" id="cancelAnnouncement">Annuler</button>
      <button class="btn-primary" id="submitAnnouncement">Publier</button>
    </div>
  </div>
</div>

<!-- Modal: add news (équipe MBS only) -->


<div class="modal-overlay" id="newsOverlay">
  <div class="modal">
    <h2>Ajouter une actualité</h2>
    <p class="sub">Elle apparaîtra immédiatement dans l'espace Actualités.</p>
    <div class="form-msg" id="newsMsg"></div>
    <div class="field">
      <label for="newsCat">Catégorie</label>
      <input id="newsCat" type="text" placeholder="ex. Alternance, Vie de l'école...">
    </div>
    <div class="field">
      <label for="newsTitle">Titre</label>
      <input id="newsTitle" type="text" placeholder="Titre de l'actualité">
    </div>
    <div class="field">
      <label for="newsDate">Sous-titre / date</label>
      <input id="newsDate" type="text" placeholder="ex. Tout savoir sur l'alternance">
    </div>
    <div class="field">
      <label for="newsExcerpt">Résumé</label>
      <textarea id="newsExcerpt" placeholder="Quelques phrases de présentation..."></textarea>
    </div>
    <div class="field">
      <label for="newsLink">Lien (optionnel)</label>
      <input id="newsLink" type="text" placeholder="https://...">
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" id="cancelNews">Annuler</button>
      <button class="btn-primary" id="submitNews">Publier</button>
    </div>
  </div>
</div>

<!-- Modal: add event (équipe MBS only) -->
<div class="modal-overlay" id="eventOverlay">


  <div class="modal">
    <h2>Ajouter un événement</h2>
    <p class="sub">Il apparaîtra dans le tableau des prochains événements.</p>
    <div class="form-msg" id="eventMsg"></div>
    <div class="field">
      <label for="eventTitle">Titre</label>
      <input id="eventTitle" type="text" placeholder="ex. Job Dating">
    </div>
    <div class="field">
      <label for="eventDay">Jour</label>
      <input id="eventDay" type="text" placeholder="ex. 15">
    </div>
    <div class="field">
      <label for="eventMonth">Mois (3 lettres)</label>
      <input id="eventMonth" type="text" placeholder="ex. JUIL">
    </div>
    <div class="field">
      <label for="eventLoc">Lieu / horaires</label>
      <input id="eventLoc" type="text" placeholder="ex. 5 rue des Reculettes · 9h–17h">
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" id="cancelEvent">Annuler</button>
      <button class="btn-primary" id="submitEvent">Publier</button>
    </div>
  </div>
</div>

<script>
/* =========================================================================
   INTÉGRATION GOOGLE SHEET
   1. Crée un Google Sheet.
   2. Dans le Sheet : Extensions > Apps Script, colle ce code :

      function doPost(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        sheet.appendRow([
          new Date(), data.evenement, data.date, data.lieu,
          data.prenom, data.nom, data.email, data.formation
        ]);
        return ContentService.createTextOutput(JSON.stringify({result:"success"}))
          .setMimeType(ContentService.MimeType.JSON);
      }

   3. Déployer > Nouveau déploiement > Type "Application Web".
      - Exécuter en tant que : Moi
      - Qui a accès : Tout le monde
   4. Colle l'URL du déploiement ci-dessous, à la place de "PASTE_YOUR_APPS_SCRIPT_URL_HERE".
   Tant que ce n'est pas configuré, les inscriptions restent fonctionnelles
   dans la page mais ne sont pas envoyées vers un Sheet.
   ========================================================================= */
const GOOGLE_SHEET_ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";

/* =========================================================================
   COMPTES & CONNEXION
   Il n'y a pas de serveur derrière ce site : les comptes sont stockés dans
   le navigateur (localStorage). C'est pratique pour une petite plateforme
   étudiante mais ce n'est PAS un stockage sécurisé (les mots de passe ne
   sont pas chiffrés sérieusement, juste légèrement encodés). Ne réutilise
   pas de mot de passe sensible ici, et si tu veux un vrai niveau de
   sécurité un jour, il faudra un backend avec une vraie base de données.

   ========================================================================= */

function obfuscate(pw){

  try { return btoa(unescape(encodeURIComponent(pw))); }
  catch(e){ return pw; }
}

function loadAccounts(){
  try { return JSON.parse(localStorage.getItem('mbs_accounts') || '[]'); }
  catch(e){ return []; }
}
function saveAccounts(list){
  localStorage.setItem('mbs_accounts', JSON.stringify(list));
}
function findAccountByEmail(email){
  const e = (email || '').trim().toLowerCase();
  return loadAccounts().find(a => a.email === e) || null;
}
function saveSession(account){
  localStorage.setItem('mbs_session', account.id);
}
function clearSession(){
  localStorage.removeItem('mbs_session');
}
function loadSessionAccount(){
  const id = localStorage.getItem('mbs_session');
  if(!id) return null;
  return loadAccounts().find(a => a.id === id) || null;
}
function publicUser(account){
  if(!account) return null;
  const { password, ...rest } = account;
  return rest;
}

/* =========================================================================
   DONNÉES PARTAGÉES (actus, événements, forum)
   Ces données sont maintenant stockées côté serveur via une fonction Netlify
   (Netlify Blobs), afin que ce que publie un membre de l'équipe MBS ou un
   étudiant soit visible par tout le monde, sur n'importe quel appareil —
   et pas seulement dans le navigateur de la personne qui a écrit.
   Voir netlify/functions/store.js pour le détail. Si l'appel réseau échoue
   (site pas encore déployé sur Netlify, par ex.), on retombe simplement sur
   les données par défaut ci-dessous, en local, pour que la page reste
   utilisable.
   ========================================================================= */
const SHARED_API = "/api/store";
let sharedDataReady = false;

async function fetchShared(key){
  try{
    const res = await fetch(`${SHARED_API}?key=${encodeURIComponent(key)}`);
    if(!res.ok) return null;
    return await res.json();
  } catch(e){
    console.warn('fetchShared failed for', key, e);
    return null;
  }
}

async function saveShared(key, value){
  try{
    await fetch(`${SHARED_API}?key=${encodeURIComponent(key)}`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(value)
    });
  } catch(e){
    console.warn('saveShared failed for', key, e);
  }
}

// Sauvegarde le trio news/events/threads, avec un léger anti-rebond pour
// éviter d'enchaîner trop d'appels réseau lors d'actions rapides successives.
let saveSharedTimer = null;
function persistShared(){
  clearTimeout(saveSharedTimer);
  saveSharedTimer = setTimeout(()=>{
    saveShared('news', news);
    saveShared('events', events);
    saveShared('threads', threads);
    saveShared('announcements', announcements);
  }, 250);
}

// Charge les données partagées depuis le serveur au démarrage. Si rien n'a
// encore été publié (première visite du site), on initialise le serveur
// avec les valeurs par défaut ci-dessus pour que tout le monde parte des
// mêmes données.
async function loadSharedData(){
  const [remoteNews, remoteEvents, remoteThreads, remoteAnnouncements] = await Promise.all([
    fetchShared('news'), fetchShared('events'), fetchShared('threads'), fetchShared('announcements')
  ]);
  if(remoteNews !== null){ news = remoteNews; } else { saveShared('news', news); }
  if(remoteEvents !== null){ events = remoteEvents; } else { saveShared('events', events); }
  if(remoteThreads !== null){ threads = remoteThreads; } else { saveShared('threads', threads); }
  if(remoteAnnouncements !== null){ announcements = remoteAnnouncements; } else { saveShared('announcements', announcements); }
  sharedDataReady = true;
}

// Rafraîchit les données partagées en arrière-plan pour que les
// publications d'un autre utilisateur (étudiant ↔ équipe MBS) apparaissent
// sans avoir à recharger la page. On évite de le faire pendant qu'une
// fenêtre modale est ouverte, pour ne pas perturber une saisie en cours.
let anyModalOpen = ()=> !!document.querySelector('.modal-overlay.open');
// Si la personne a le focus dans un champ texte (ex. une réponse en cours
// de rédaction dans le forum, pas encore envoyée), on met en pause le
// rafraîchissement automatique : sinon le re-rendu périodique effaçait ce
// qui était en train d'être tapé, et il fallait recliquer dans le champ.
function isUserTyping(){
  const el = document.activeElement;
  if(!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA';
}
async function refreshSharedData(){
  if(anyModalOpen() || isUserTyping()) return;
  const [remoteNews, remoteEvents, remoteThreads, remoteAnnouncements] = await Promise.all([
    fetchShared('news'), fetchShared('events'), fetchShared('threads'), fetchShared('announcements')
  ]);
  if(remoteNews !== null) news = remoteNews;
  if(remoteEvents !== null) events = remoteEvents;
  if(remoteThreads !== null) threads = remoteThreads;
  if(remoteAnnouncements !== null) announcements = remoteAnnouncements;
  renderHeader();
  renderNews();
  renderEvents();
  renderThreads();
  renderAnnouncements();
  renderBoard();
  if(document.getElementById('view-espace').classList.contains('active')) renderEspace();
}

/* ---------------- Data (valeurs par défaut, utilisées tant que rien
   n'a encore été publié sur le serveur partagé) ---------------- */
let news = [


  {cat:"Alternance", tagClass:"acad", title:"Cap sur l'alternance", date:"Tout savoir sur l'alternance", excerpt:"Avec l'alternance, chaque apprentissage devient une opportunité de construire son avenir professionnel.", link:"https://www.image2url.com/r2/default/documents/1783936132194-048f843f-4fbe-4fef-a25b-bcd6c422fb51.pdf"},












 
];

let events = [

  {day:"15", month:"JUIL", title:"Job Dating", loc:"5 rue des Reculettes · 9h–17h", registrants:[]},


  {day:"18", month:"JUIL", title:"Conférence : Social Entrepreneurship & Leadership", loc:"5 rue des Reculettes · 14h", registrants:[]},

  {day:"22", month:"JUIL", title:"Atelier CV & LinkedIn", loc:"11h", registrants:[]}
];

let threads = [


];

// Annonces publiées par l'équipe MBS (maintenance informatique, alertes,
// infos importantes...), affichées en haut de l'accueil pour tout le monde.
let announcements = [


];



const catClass = {

  "Scolarité":"acad", "Vie de l'école":"vie", "Alternance/Stages":"intl", "Autres":"acad"

};

let activeFilter = "Toutes";
let votedThreads = new Set();
let votedReplies = new Set();
let openThreadIdx = new Set(); // fils actuellement dépliés dans le forum — persiste entre les re-rendus
let currentUser = null;
let pendingEventIdx = null;
let resetTargetAccountId = null;

// Identifiant stable d'un utilisateur pour les droits de suppression : on
// utilise l'email (unique, ne change pas si le prénom/nom est modifié dans
// les paramètres du profil) plutôt que le nom affiché — deux personnes
// pouvant porter le même nom, un identifiant basé sur le nom permettrait
// à tort de supprimer les questions/réponses de quelqu'un d'autre.
function userKey(u){
  if(!u) return null;
  const key = (u.email || '').trim().toLowerCase();
  return key || null;
}
function isTeam(u){
  return !!(u && u.role === 'equipe');
}

/* ---------------- Helpers ---------------- */
function newsCard(n, idx){
  const canManage = isTeam(currentUser);
  return `
  <div class="news-card">
    ${canManage ? `<button class="card-delete" data-del-news="${idx}" title="Supprimer">✕</button>` : ''}
    <span class="tag ${n.tagClass || 'acad'}">${n.cat}</span>
    <h3>${n.title}</h3>
    <div class="news-meta">${n.date || ''}</div>
    <div class="news-excerpt">${n.excerpt || ''}</div>
    ${n.link ? `<a class="news-cta" href="${n.link}" target="_blank" rel="noopener">En savoir plus →</a>` : ''}
  </div>`;
}

function eventCard(e, idx){
  const canManage = isTeam(currentUser);
  const registrants = e.registrants || [];
  const myEmail = currentUser ? (currentUser.email || '').toLowerCase() : null;
  const isJoined = !!(myEmail && registrants.some(r => (r.email || '').toLowerCase() === myEmail));
  return `
  <div class="event-card">
    ${canManage ? `<button class="card-delete" data-del-event="${idx}" title="Supprimer">✕</button>` : ''}
    <div class="event-date-badge"><span class="d">${e.day}</span><span class="m">${e.month}</span></div>
    <div class="event-body">
      <h3>${e.title}</h3>
      <div class="event-loc">📍 ${e.loc}</div>
      <button class="event-btn ${isJoined ? 'joined':''}" data-ev="${idx}">${isJoined ? 'Inscrit ✓' : 'Je participe'}</button>
      ${canManage ? `<button class="event-roster-btn" data-roster="${idx}">👥 ${registrants.length} inscrit${registrants.length===1?'':'s'}</button>` : ''}
    </div>
  </div>`;
}

function roleBadge(role){
  return role === 'equipe' ? `<span class="tag team">Équipe MBS</span>` : '';
}

function replyRow(r, tIdx, ri){
  const key = tIdx + '-' + ri;
  const rVoted = votedReplies.has(key);
  const canDelete = currentUser && (r.ownerKey === userKey(currentUser) || isTeam(currentUser));
  return `
  <div class="reply">
    <button class="reply-vote ${rVoted ? 'voted':''}" data-vote-reply-thread="${tIdx}" data-vote-reply-idx="${ri}">
      <span class="arrow">▲</span><span class="n">${r.votes || 0}</span>
    </button>
    <div class="reply-content"><span class="who">${r.who}${roleBadge(r.role)}</span>${r.text}</div>
    ${canDelete ? `<button class="reply-delete" data-del-thread="${tIdx}" data-del-reply="${ri}">Supprimer</button>` : ''}
  </div>`;
}

function threadCard(t, idx){

  const voted = votedThreads.has(idx);

  const canDelete = currentUser && (t.ownerKey === userKey(currentUser) || isTeam(currentUser));

  const isOpen = openThreadIdx.has(idx);

  return `
  <div class="thread" data-idx="${idx}">

    <div class="thread-head">

      <button class="upvote ${voted ? 'voted':''}" data-vote="${idx}">

        <span class="arrow">▲</span><span class="n">${t.votes}</span>

      </button>

      <div class="thread-main">

        <h3>${t.title}</h3>
        <div class="thread-meta">
          <span class="tag ${catClass[t.cat] || 'acad'}">${t.cat}</span>
          <span>par ${t.author}${t.formation ? ' · ' + t.formation : ''}</span>
          ${roleBadge(t.role)}
          <span>· ${t.replies.length} réponse${t.replies.length>1?'s':''}</span>
        </div>
      </div>
      <div class="thread-actions">
        <button class="thread-toggle" data-toggle="${idx}">${isOpen ? 'Masquer la discussion' : 'Voir la discussion'}</button>
        ${canDelete ? `<button class="thread-delete" data-del-question="${idx}">Supprimer</button>` : ''}
      </div>
    </div>
    <div class="thread-body ${isOpen ? 'open' : ''}">
      ${t.replies.map((r, ri) => replyRow(r, idx, ri)).join('') || '<div class="empty">Aucune réponse pour le moment. Sois le premier à répondre.</div>'}

      <div class="reply-form">
        <input type="text" placeholder="Écrire une réponse...">
        <button data-reply="${idx}">Répondre</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- Render ---------------- */

function renderNews(){

  document.getElementById('newsPreview').innerHTML = news.slice(0,3).map((n)=>newsCard(n, news.indexOf(n))).join('');
  document.getElementById('newsAll').innerHTML = news.length ? news.map((n)=>newsCard(n, news.indexOf(n))).join('') : '<div class="empty">Aucune actualité pour le moment.</div>';
  document.getElementById('statNews').textContent = news.length;
  document.getElementById('addNewsBtn').style.display = isTeam(currentUser) ? 'inline-flex' : 'none';
  attachNewsButtons();
}

/* ---------------- Annonces équipe MBS ---------------- */
function announcementCard(a, idx){
  const canManage = isTeam(currentUser);
  const dateStr = a.at ? new Date(a.at).toLocaleDateString('fr-FR', {day:'numeric', month:'long'}) : '';
  const urgent = !!a.urgent;
  return `
  <div class="news-card" style="border-left:4px solid ${urgent ? 'var(--flag)' : 'var(--accent)'};">
    ${canManage ? `<button class="card-delete" data-del-announcement="${idx}" title="Supprimer">✕</button>` : ''}
    <span class="tag" style="background:${urgent ? 'var(--flag)' : 'var(--accent)'};color:#fff;">${urgent ? '🚨 Annonce urgente' : '📢 Annonce équipe MBS'}</span>
    <h3>${a.title}</h3>
    <div class="news-excerpt">${a.text}</div>
    ${dateStr ? `<div class="news-meta">${dateStr}</div>` : ''}
  </div>`;
}

function renderAnnouncements(){
  const section = document.getElementById('announcementsSection');
  const list = document.getElementById('announcementsList');
  const allList = document.getElementById('announcementsAll');
  const addBtn = document.getElementById('addAnnouncementBtn');

  // Les urgentes remontent toujours en premier, sans changer leur index
  // réel dans le tableau `announcements` (nécessaire pour la suppression).
  const sorted = announcements
    .map((a, i) => ({a, i}))
    .sort((x, y) => (y.a.urgent ? 1 : 0) - (x.a.urgent ? 1 : 0));

  if(section && list){
    const urgentOrRecent = sorted.slice(0, 3);
    if(urgentOrRecent.length){
      section.style.display = '';
      list.innerHTML = urgentOrRecent.map(({a, i}) => announcementCard(a, i)).join('');
    } else {
      section.style.display = 'none';
      list.innerHTML = '';
    }
  }

  if(allList){
    allList.innerHTML = sorted.length
      ? sorted.map(({a, i}) => announcementCard(a, i)).join('')
      : '<div class="empty">Aucune annonce publiée pour le moment.</div>';
  }
  if(addBtn){
    addBtn.style.display = isTeam(currentUser) ? 'inline-flex' : 'none';
  }

  if(list) attachAnnouncementButtons(list);
  if(allList) attachAnnouncementButtons(allList);
}

function attachAnnouncementButtons(scope){
  const root = scope || document;
  root.querySelectorAll('[data-del-announcement]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-del-announcement'));
      announcements.splice(idx, 1);
      renderAnnouncements();
      if(document.getElementById('view-espace').classList.contains('active')) renderEspace();
      persistShared();
    });
  });
}

function attachNewsButtons(){
  document.querySelectorAll('[data-del-news]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-del-news'));
      news.splice(idx, 1);
      renderNews();
      persistShared();
    });
  });
}

function renderEvents(){
  document.getElementById('eventsPreview').innerHTML = events.slice(0,3).map((e)=>eventCard(e, events.indexOf(e))).join('');
  document.getElementById('eventsAll').innerHTML = events.length ? events.map((e)=>eventCard(e, events.indexOf(e))).join('') : '<div class="empty">Aucun événement pour le moment.</div>';
  document.getElementById('statEvents').textContent = events.length;
  document.getElementById('addEventBtn').style.display = isTeam(currentUser) ? 'inline-flex' : 'none';
  attachEventButtons();
}

function attachEventButtons(){


  document.querySelectorAll('.event-btn').forEach(btn=>{


    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-ev'));
      const e = events[idx];
      e.registrants = e.registrants || [];
      const myEmail = currentUser ? (currentUser.email || '').toLowerCase() : null;
      const already = myEmail && e.registrants.some(r => (r.email || '').toLowerCase() === myEmail);
      if(already){
        // Se désinscrire ne nécessite pas de repasser par le formulaire
        e.registrants = e.registrants.filter(r => (r.email || '').toLowerCase() !== myEmail);
        renderEvents();
        renderEspace();
        persistShared();
      } else {
        openSignupModal(idx);
      }
    });
  });
  document.querySelectorAll('[data-roster]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      openRosterModal(parseInt(btn.getAttribute('data-roster')));
    });
  });
  document.querySelectorAll('[data-del-event]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-del-event'));
      events.splice(idx, 1);
      renderEvents();
      renderBoard();
      persistShared();
    });
  });
}

/* ---------------- Roster modal (équipe MBS : voir qui s'est inscrit) ---------------- */
const rosterOverlay = document.getElementById('rosterOverlay');
function openRosterModal(idx){
  const e = events[idx];
  const registrants = e.registrants || [];
  document.getElementById('rosterEventTitle').textContent = `${e.title} · ${e.day} ${e.month}`;
  const list = document.getElementById('rosterList');
  list.innerHTML = registrants.length ? registrants.map(r => `
    <div class="roster-row">
      <div>
        <div class="who">${r.prenom} ${r.nom}</div>
        <div class="formation">${r.formation || 'Formation non précisée'}</div>
      </div>
      <div class="email">${r.email}</div>
    </div>
  `).join('') : '<div class="empty">Personne ne s\'est encore inscrit(e) à cet événement.</div>';
  rosterOverlay.classList.add('open');
}
document.getElementById('closeRoster').addEventListener('click', ()=> rosterOverlay.classList.remove('open'));
rosterOverlay.addEventListener('click', (e)=>{ if(e.target===rosterOverlay) rosterOverlay.classList.remove('open'); });

/* ---------------- Event signup modal ---------------- */
const signupOverlay = document.getElementById('signupOverlay');

function openSignupModal(idx){
  pendingEventIdx = idx;
  const e = events[idx];
  document.getElementById('signupEventTitle').textContent = e.title;
  document.getElementById('signupEventMeta').textContent = `${e.day} ${e.month} · ${e.loc}`;

  const msg = document.getElementById('signupMsg');
  msg.className = 'form-msg';
  msg.textContent = '';

  document.getElementById('signupPrenom').value = currentUser ? (currentUser.prenom || '') : '';
  document.getElementById('signupNom').value = currentUser ? (currentUser.nom || '') : '';
  document.getElementById('signupFormation').value = currentUser ? (currentUser.formation || '') : '';
  document.getElementById('signupEmail').value = currentUser ? (currentUser.email || '') : '';
  ['signupPrenom','signupNom','signupEmail'].forEach(id=>{
    document.getElementById(id).classList.remove('field-error');
  });

  signupOverlay.classList.add('open');
}

function closeSignupModal(){

  signupOverlay.classList.remove('open');
  pendingEventIdx = null;

}

document.getElementById('cancelSignup').addEventListener('click', closeSignupModal);

signupOverlay.addEventListener('click', (e)=>{ if(e.target===signupOverlay) closeSignupModal(); });


document.getElementById('submitSignup').addEventListener('click', async ()=>{

  if(pendingEventIdx === null) return;

  const prenom = document.getElementById('signupPrenom').value.trim();

  const nom = document.getElementById('signupNom').value.trim();

  const email = document.getElementById('signupEmail').value.trim();

  const formation = document.getElementById('signupFormation').value.trim();

  const msg = document.getElementById('signupMsg');

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  let hasError = false;

  [['signupPrenom', prenom], ['signupNom', nom], ['signupEmail', emailOk]].forEach(([id, ok])=>{

    document.getElementById(id).classList.toggle('field-error', !ok);

    if(!ok) hasError = true;

  });
  if(hasError){

    msg.className = 'form-msg error show';

    msg.textContent = 'Merci de renseigner un prénom, un nom et un email valide.';

    return;
  }

  const submitBtn = document.getElementById('submitSignup');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi...';
  msg.className = 'form-msg';
  msg.textContent = '';

  const e = events[pendingEventIdx];
  e.registrants = e.registrants || [];
  const alreadyRegistered = e.registrants.some(r => (r.email || '').toLowerCase() === email.toLowerCase());
  const payload = {
    evenement: e.title,
    date: `${e.day} ${e.month}`,
    lieu: e.loc,
    prenom, nom, email, formation
  };

  const configured = GOOGLE_SHEET_ENDPOINT && GOOGLE_SHEET_ENDPOINT.startsWith('http');

  try{
    if(configured){

      // mode 'no-cors' : Apps Script ne renvoie pas de réponse lisible depuis le navigateur,
      // on considère l'envoi réussi si aucune erreur réseau n'est levée.

      await fetch(GOOGLE_SHEET_ENDPOINT, {

        method:'POST',
        mode:'no-cors',
        headers:{'Content-Type':'text/plain;charset=utf-8'},
        body: JSON.stringify(payload)
      });

    }
    if(!alreadyRegistered){
      e.registrants.push({prenom, nom, email, formation, ownerKey: userKey(currentUser), at: Date.now()});
    }
    renderEvents();
    renderEspace();
    persistShared();
    msg.className = 'form-msg success show';
    msg.textContent = configured
      ? 'Inscription enregistrée et envoyée au Google Sheet ✓'
      : 'Inscription enregistrée sur la page. Ajoute l\'URL Apps Script dans le code pour l\'envoyer aussi vers un Google Sheet.';
    setTimeout(closeSignupModal, 1400);
  } catch(err){
    console.error(err);
    msg.className = 'form-msg error show';
    msg.textContent = "L'envoi vers le Google Sheet a échoué, mais réessaie dans un instant.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "S'inscrire";
  }
});

function renderThreads(){

  const filtered = activeFilter === "Toutes" ? threads : threads.filter(t=>t.cat===activeFilter);
  const list = document.getElementById('threadList');
  list.innerHTML = filtered.length
    ? filtered.map((t)=>threadCard(t, threads.indexOf(t))).join('')
    : `<div class="empty">Aucune discussion dans cette catégorie pour l'instant. Sois le premier à poser une question.</div>`;

  document.getElementById('forumPreview').innerHTML = threads.slice(0,3).map((t)=>threadCard(t, threads.indexOf(t))).join('') || '<div class="empty">Aucune discussion pour le moment.</div>';

  document.getElementById('statThreads').textContent = threads.length;
  attachThreadHandlers();
}

function attachThreadHandlers(){

  document.querySelectorAll('[data-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-toggle'));
      if(openThreadIdx.has(idx)) openThreadIdx.delete(idx);
      else openThreadIdx.add(idx);
      renderThreads();
    });
  });
  document.querySelectorAll('[data-vote]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-vote'));
      if(votedThreads.has(idx)){
        votedThreads.delete(idx);
        threads[idx].votes -= 1;
      } else {
        votedThreads.add(idx);
        threads[idx].votes += 1;
      }
      renderThreads();
      persistShared();
    });
  });
  document.querySelectorAll('[data-vote-reply-idx]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const tIdx = parseInt(btn.getAttribute('data-vote-reply-thread'));
      const rIdx = parseInt(btn.getAttribute('data-vote-reply-idx'));
      const key = tIdx + '-' + rIdx;
      const reply = threads[tIdx].replies[rIdx];
      reply.votes = reply.votes || 0;
      if(votedReplies.has(key)){
        votedReplies.delete(key);
        reply.votes -= 1;
      } else {
        votedReplies.add(key);
        reply.votes += 1;
      }
      renderThreads();
      persistShared();
    });
  });
  function submitReply(btn){
    const idx = parseInt(btn.getAttribute('data-reply'));
    const input = btn.closest('.reply-form').querySelector('input');
    const text = input.value.trim();
    if(!text) return;
    const who = currentUser ? (`${currentUser.prenom} ${currentUser.nom}`.trim() || "Vous") : "Vous";
    threads[idx].replies.push({who, text, votes:0, ownerKey: userKey(currentUser), role: currentUser ? currentUser.role : null});
    renderThreads();
    persistShared();
  }
  document.querySelectorAll('[data-reply]').forEach(btn=>{
    btn.addEventListener('click', ()=> submitReply(btn));
  });
  document.querySelectorAll('.reply-form input').forEach(input=>{
    input.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter'){
        const btn = input.closest('.reply-form').querySelector('[data-reply]');
        if(btn) submitReply(btn);
      }
    });
  });
  document.querySelectorAll('[data-del-reply]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const tIdx = parseInt(btn.getAttribute('data-del-thread'));
      const rIdx = parseInt(btn.getAttribute('data-del-reply'));
      threads[tIdx].replies.splice(rIdx, 1);
      renderThreads();
      persistShared();
    });
  });

  document.querySelectorAll('[data-del-question]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const idx = parseInt(btn.getAttribute('data-del-question'));
      threads.splice(idx, 1);
      // Réaligne les fils actuellement dépliés puisque tous les index
      // après celui supprimé se décalent d'un cran.
      const shifted = new Set();
      openThreadIdx.forEach(i=>{
        if(i < idx) shifted.add(i);
        else if(i > idx) shifted.add(i - 1);
      });
      openThreadIdx = shifted;
      renderThreads();
      persistShared();
    });
  });
}


function renderFilters(){
  
  const cats = ["Toutes","Scolarité","Vie de l'école","Alternance/Stages","Autres"];
  document.getElementById('filterRow').innerHTML = cats.map(c=>
    `<button class="filter-chip ${c===activeFilter?'active':''}" data-filter="${c}">${c}</button>`
  ).join('');
  document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeFilter = btn.getAttribute('data-filter');
      renderFilters();
      renderThreads();
    });
  });
}

function renderBoard(){
  const board = document.getElementById('board');
  board.innerHTML = events.length ? events.slice(0,4).map((e,i)=>`
    <div class="board-row flip" style="animation-delay:${i*70}ms">
      <span class="board-date">${e.day} ${e.month}</span>
      <span class="board-name">${e.title}</span>
      <span class="board-place">${e.loc.split(' · ')[0]}</span>
      <span class="board-count">→</span>
    </div>
  `).join('') : '<div class="empty" style="border:none;">Aucun événement à venir.</div>';
}

function renderHeader(){
  const now = new Date();
  const opts = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateStr = now.toLocaleDateString('fr-FR', opts);
  document.getElementById('heroDate').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  document.getElementById('boardClock').textContent = now.toLocaleTimeString('fr-FR', {hour:'2-digit',minute:'2-digit'});
  const greeting = document.getElementById('heroGreeting');
  if(greeting && currentUser){
    greeting.textContent = `Bonjour ${currentUser.prenom || ''} 👋 Voici ce qu'il se passe chez MBS cette semaine`;
  }
}

/* ---------------- Mon espace ---------------- */
function renderEspace(){
  const el = document.getElementById('espaceContent');
  const titleEl = document.getElementById('espaceTitle');
  if(!currentUser){ el.innerHTML=''; return; }

  const fullName = `${currentUser.prenom} ${currentUser.nom}`.trim();

  if(isTeam(currentUser)){
    titleEl.textContent = 'Espace équipe MBS';
    const myThreads = threads.length;
    el.innerHTML = `
      <div class="stat-row" style="margin-bottom:32px;">
        <div class="stat-card"><div class="stat-num">${news.length}</div><div class="stat-label">Actualités publiées</div></div>
        <div class="stat-card"><div class="stat-num">${events.length}</div><div class="stat-label">Événements en ligne</div></div>
        <div class="stat-card"><div class="stat-num">${myThreads}</div><div class="stat-label">Discussions sur le forum</div></div>
      </div>
      <div class="section-block">
        <div class="section-head">
          <h2>Bonjour ${fullName || 'à toi'} — accès Équipe MBS</h2>
          <div class="head-actions">
            <button class="btn-admin" id="espaceAddNewsBtn">+ Ajouter une actu</button>
            <button class="btn-admin" id="espaceAddEventBtn">+ Ajouter un événement</button>
            <button class="btn-admin" id="espaceAddAnnouncementBtn">+ Ajouter une annonce</button>
          </div>
        </div>
        <div class="empty">
          En tant que membre de l'équipe MBS, tu peux publier des actualités, ajouter des événements, publier des annonces et modérer le forum (supprimer n'importe quelle question ou réponse).
        </div>
      </div>
      <div class="section-block">
        <div class="section-head"><h2>Annonces publiées</h2></div>
        <div class="news-grid" id="espaceAnnouncementsList">
          ${announcements.length ? announcements.map((a)=>announcementCard(a, announcements.indexOf(a))).join('') : '<div class="empty">Aucune annonce publiée pour le moment.</div>'}
        </div>
      </div>
      ${profileSettingsBlock()}`;
    document.getElementById('espaceAddNewsBtn').addEventListener('click', ()=> newsOverlay.classList.add('open'));
    document.getElementById('espaceAddEventBtn').addEventListener('click', ()=> eventOverlay.classList.add('open'));
    document.getElementById('espaceAddAnnouncementBtn').addEventListener('click', ()=> announcementOverlay.classList.add('open'));
    attachAnnouncementButtons(document.getElementById('espaceAnnouncementsList'));
    attachProfileSettingsHandlers();
  } else {
    titleEl.textContent = 'Mon espace étudiant';
    const myKey = userKey(currentUser);
    const myThreads = threads.filter(t=>t.ownerKey===myKey);
    const myEmail = (currentUser.email || '').toLowerCase();
    const myEvents = events.filter(e => (e.registrants || []).some(r => (r.email || '').toLowerCase() === myEmail));
    const urgentAnnouncements = announcements.filter(a => a.urgent);
    el.innerHTML = `
      ${urgentAnnouncements.length ? `
      <div class="section-block">
        <div class="section-head"><h2>🚨 Annonces urgentes</h2></div>
        <div class="news-grid">
          ${urgentAnnouncements.map(a => announcementCard(a, announcements.indexOf(a))).join('')}
        </div>
      </div>` : ''}
      <div class="stat-row" style="margin-bottom:32px;">
        <div class="stat-card"><div class="stat-num">${myThreads.length}</div><div class="stat-label">Mes questions posées</div></div>
        <div class="stat-card"><div class="stat-num">${myEvents.length}</div><div class="stat-label">Événements rejoints</div></div>
        <div class="stat-card"><div class="stat-num">${currentUser.formation || '—'}</div><div class="stat-label">Ma formation</div></div>
      </div>
      <div class="section-block">
        <div class="section-head"><h2>Mes questions</h2></div>
        <p class="auth-foot-note" style="text-align:left;margin:-8px 0 14px;">Tu ne peux supprimer que tes propres questions et réponses.</p>
        ${myThreads.length ? `<div>${myThreads.map(t=>threadCard(t, threads.indexOf(t))).join('')}</div>` : "<div class=\"empty\">Tu n'as pas encore posé de question sur le forum.</div>"}
      </div>
      <div class="section-block">
        <div class="section-head"><h2>Mes événements</h2></div>
        ${myEvents.length ? `<div class="events-grid">${myEvents.map(e=>eventCard(e, events.indexOf(e))).join('')}</div>` : "<div class=\"empty\">Tu ne t'es inscrit(e) à aucun événement pour le moment.</div>"}
      </div>
      ${profileSettingsBlock()}`;
    attachThreadHandlers();
    attachEventButtons();
    attachAnnouncementButtons(el);
    attachProfileSettingsHandlers();
  }
}

/* ---------------- Paramètres du profil (étudiant & équipe) ---------------- */
function profileSettingsBlock(){
  const isStudent = !isTeam(currentUser);
  return `
    <div class="section-block">
      <div class="section-head"><h2>Paramètres du profil</h2></div>
      <div class="news-card" style="max-width:480px;">
        <div class="form-msg" id="profileMsg"></div>
        <div class="field">
          <label for="profilePrenom">Prénom</label>
          <input id="profilePrenom" type="text" value="${currentUser.prenom || ''}">
        </div>
        <div class="field">
          <label for="profileNom">Nom</label>
          <input id="profileNom" type="text" value="${currentUser.nom || ''}">
        </div>
        ${isStudent ? `
        <div class="field">
          <label for="profileFormation">Formation</label>
          <input id="profileFormation" type="text" value="${currentUser.formation || ''}">
        </div>` : ''}
        <div class="field">
          <label for="profileNewPassword">Nouveau mot de passe (optionnel)</label>
          <input id="profileNewPassword" type="password" placeholder="Laisser vide pour ne pas changer">
        </div>
        <div class="field">
          <label for="profileNewPasswordConfirm">Confirmer le nouveau mot de passe</label>
          <input id="profileNewPasswordConfirm" type="password" placeholder="6 caractères minimum">
        </div>
        <button class="btn-primary" id="saveProfileBtn">Enregistrer les modifications</button>
      </div>
    </div>`;
}

function attachProfileSettingsHandlers(){
  const btn = document.getElementById('saveProfileBtn');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const prenom = document.getElementById('profilePrenom').value.trim();
    const nom = document.getElementById('profileNom').value.trim();
    const formationField = document.getElementById('profileFormation');
    const pw1 = document.getElementById('profileNewPassword').value;
    const pw2 = document.getElementById('profileNewPasswordConfirm').value;

    if(!prenom || !nom){
      setGateMsg('profileMsg', 'error', 'Le prénom et le nom sont obligatoires.');
      return;
    }
    if(pw1 || pw2){
      if(pw1.length < 6){
        setGateMsg('profileMsg', 'error', 'Le nouveau mot de passe doit contenir au moins 6 caractères.');
        return;
      }
      if(pw1 !== pw2){
        setGateMsg('profileMsg', 'error', 'Les deux mots de passe ne correspondent pas.');
        return;
      }
    }

    const accounts = loadAccounts();
    const idx = accounts.findIndex(a => a.id === currentUser.id);
    if(idx === -1){
      setGateMsg('profileMsg', 'error', 'Une erreur est survenue, réessaie.');
      return;
    }
    accounts[idx].prenom = prenom;
    accounts[idx].nom = nom;
    if(formationField) accounts[idx].formation = formationField.value.trim();
    if(pw1) accounts[idx].password = obfuscate(pw1);
    saveAccounts(accounts);
    currentUser = publicUser(accounts[idx]);

    setGateMsg('profileMsg', 'success', 'Profil mis à jour ✓');
    renderAuthArea();
    updateAskModalForAuth();
    renderHeader();
    renderEspace();
  });
}

/* ---------------- Navigation ---------------- */
function switchView(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  document.querySelectorAll('#nav button, #mobileNav button').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-view')===view);
  });
  if(view === 'espace') renderEspace();
  closeMobileMenu();
  window.scrollTo({top:0, behavior:'smooth'});
}

document.getElementById('nav').addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-view]');
  if(btn) switchView(btn.getAttribute('data-view'));
});
document.getElementById('mobileNav').addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-view]');
  if(btn) switchView(btn.getAttribute('data-view'));
});
document.querySelectorAll('[data-goto]').forEach(btn=>{
  btn.addEventListener('click', ()=> switchView(btn.getAttribute('data-goto')));
});

/* ---------------- Mobile drawer menu ---------------- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMobileMenu(){
  mobileMenuOverlay.classList.add('open');
  hamburgerBtn.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu(){
  mobileMenuOverlay.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}
hamburgerBtn.addEventListener('click', ()=>{
  if(mobileMenuOverlay.classList.contains('open')) closeMobileMenu();
  else openMobileMenu();
});
document.getElementById('mobileMenuClose').addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', (e)=>{ if(e.target===mobileMenuOverlay) closeMobileMenu(); });
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){
    closeMobileMenu();
    closeSignupModal();
    rosterOverlay.classList.remove('open');
    announcementOverlay.classList.remove('open');
    document.getElementById('newsOverlay').classList.remove('open');
    document.getElementById('eventOverlay').classList.remove('open');
  }
});

document.getElementById('mobileAskBtn').addEventListener('click', ()=>{
  closeMobileMenu();
  document.getElementById('askOverlay').classList.add('open');
});

/* ---------------- Auth (session inside the app: logout, pill) ---------------- */
function renderAuthArea(){
  if(!currentUser) return;
  const fullName = (`${currentUser.prenom} ${currentUser.nom}`.trim()) || "Étudiant·e";
  const containers = [
    {el: document.getElementById('authArea'), prefix:'d'},
    {el: document.getElementById('mobileAuthArea'), prefix:'m'}
  ];
  containers.forEach(({el, prefix})=>{
    el.innerHTML = `
      <div class="user-pill">
        <span class="user-pill-name">👋 ${fullName}${isTeam(currentUser) ? ' <span class="tag team" style="margin-left:4px;">Équipe</span>' : ''}</span>
        <button class="user-pill-logout" id="logoutBtn-${prefix}">Déconnexion</button>
      </div>`;
    document.getElementById(`logoutBtn-${prefix}`).addEventListener('click', logout);
  });
}

function updateAskModalForAuth(){
  const asUser = document.getElementById('askAsUser');
  if(currentUser){
    const fullName = `${currentUser.prenom} ${currentUser.nom}`.trim() || "Étudiant·e";
    asUser.style.display = 'block';
    asUser.textContent = `Connecté(e) en tant que ${fullName}${currentUser.formation ? ' · ' + currentUser.formation : ''}.`;
  }
}

function updateAskCtaVisibility(){
  const show = !isTeam(currentUser);
  document.getElementById('openAskBtn').style.display = show ? '' : 'none';
  document.getElementById('mobileAskBtn').style.display = show ? '' : 'none';
}

function logout(){
  clearSession();
  currentUser = null;
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('authGate').style.display = 'flex';
  showAuthTab('login');
}

/* ---------------- Auth gate: tabs, role select ---------------- */
function showAuthTab(tab){
  document.getElementById('authTabs').style.display = 'flex';
  document.getElementById('authPanelReset').style.display = 'none';
  document.querySelectorAll('#authTabs button').forEach(b=>b.classList.toggle('active', b.getAttribute('data-tab')===tab));
  document.getElementById('authPanelLogin').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('authPanelSignup').style.display = tab === 'signup' ? 'flex' : 'none';
}
document.getElementById('authTabs').addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-tab]');
  if(btn) showAuthTab(btn.getAttribute('data-tab'));
});

let selectedRole = 'etudiant';
document.getElementById('roleSelect').addEventListener('click', (e)=>{
  const btn = e.target.closest('.role-card');
  if(!btn) return;
  selectedRole = btn.getAttribute('data-role');
  document.querySelectorAll('.role-card').forEach(c=>c.classList.toggle('active', c===btn));
  document.getElementById('gateFormationField').style.display = selectedRole === 'etudiant' ? '' : 'none';
});

function setGateMsg(id, type, text){
  const el = document.getElementById(id);
  el.className = 'form-msg ' + type + ' show';
  el.textContent = text;
}
function clearGateMsg(id){
  const el = document.getElementById(id);
  el.className = 'form-msg';
  el.textContent = '';
}

document.getElementById('gateSignupBtn').addEventListener('click', ()=>{
  const prenom = document.getElementById('gatePrenom').value.trim();
  const nom = document.getElementById('gateNom').value.trim();
  const email = document.getElementById('gateEmail').value.trim().toLowerCase();
  const password = document.getElementById('gatePassword').value;
  const formation = document.getElementById('gateFormation').value.trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if(!prenom || !nom || !emailOk || password.length < 6){
    setGateMsg('gateSignupMsg', 'error', "Merci de renseigner prénom, nom, un email valide et un mot de passe d'au moins 6 caractères.");
    return;
  }
  if(findAccountByEmail(email)){
    setGateMsg('gateSignupMsg', 'error', 'Un compte existe déjà avec cet email. Connecte-toi plutôt.');
    return;
  }

  const account = {
    id: 'u_' + Date.now() + '_' + Math.random().toString(36).slice(2,8),
    prenom, nom, email,
    password: obfuscate(password),
    formation: selectedRole === 'etudiant' ? formation : '',
    role: selectedRole,
    createdAt: Date.now()
  };
  const accounts = loadAccounts();
  accounts.push(account);
  saveAccounts(accounts);
  saveSession(account);
  clearGateMsg('gateSignupMsg');
  enterApp(account);
});

document.getElementById('gateLoginBtn').addEventListener('click', ()=>{
  const email = document.getElementById('gateLoginEmail').value.trim().toLowerCase();
  const password = document.getElementById('gateLoginPassword').value;
  const account = findAccountByEmail(email);
  if(!account || account.password !== obfuscate(password)){
    setGateMsg('gateLoginMsg', 'error', 'Email ou mot de passe incorrect.');
    return;
  }
  saveSession(account);
  clearGateMsg('gateLoginMsg');
  enterApp(account);
});

// Allow pressing Enter inside gate fields
['gateLoginEmail','gateLoginPassword'].forEach(id=>{
  document.getElementById(id).addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('gateLoginBtn').click(); });
});
['gatePrenom','gateNom','gateEmail','gatePassword','gateFormation'].forEach(id=>{
  document.getElementById(id).addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('gateSignupBtn').click(); });
});

/* ---------------- Auth gate: forgot / reset password ---------------- */
function openResetPanel(){
  document.getElementById('authTabs').style.display = 'none';
  document.getElementById('authPanelLogin').style.display = 'none';
  document.getElementById('authPanelSignup').style.display = 'none';
  document.getElementById('authPanelReset').style.display = 'flex';
  document.getElementById('resetStep1').style.display = 'block';
  document.getElementById('resetStep2').style.display = 'none';
  document.getElementById('resetEmail').value = '';
  document.getElementById('resetPassword').value = '';
  document.getElementById('resetPasswordConfirm').value = '';
  resetTargetAccountId = null;
  clearGateMsg('gateResetMsg');
}

document.getElementById('forgotPasswordBtn').addEventListener('click', openResetPanel);
document.getElementById('backToLoginBtn').addEventListener('click', ()=> showAuthTab('login'));

document.getElementById('resetFindBtn').addEventListener('click', ()=>{
  const email = document.getElementById('resetEmail').value.trim().toLowerCase();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!emailOk){
    setGateMsg('gateResetMsg', 'error', 'Merci de renseigner un email valide.');
    return;
  }
  const account = findAccountByEmail(email);
  if(!account){
    setGateMsg('gateResetMsg', 'error', "Aucun compte n'est associé à cet email.");
    return;
  }
  resetTargetAccountId = account.id;
  clearGateMsg('gateResetMsg');
  document.getElementById('resetStep1').style.display = 'none';
  document.getElementById('resetStep2').style.display = 'block';
});

document.getElementById('resetEmail').addEventListener('keydown', e=>{
  if(e.key==='Enter') document.getElementById('resetFindBtn').click();
});

document.getElementById('resetConfirmBtn').addEventListener('click', ()=>{
  if(!resetTargetAccountId) return;
  const pw = document.getElementById('resetPassword').value;
  const pw2 = document.getElementById('resetPasswordConfirm').value;

  if(pw.length < 6){
    setGateMsg('gateResetMsg', 'error', 'Le mot de passe doit contenir au moins 6 caractères.');
    return;
  }
  if(pw !== pw2){
    setGateMsg('gateResetMsg', 'error', 'Les deux mots de passe ne correspondent pas.');
    return;
  }

  const accounts = loadAccounts();
  const idx = accounts.findIndex(a=>a.id===resetTargetAccountId);
  if(idx === -1){
    setGateMsg('gateResetMsg', 'error', 'Une erreur est survenue, réessaie.');
    return;
  }
  accounts[idx].password = obfuscate(pw);
  saveAccounts(accounts);

  setGateMsg('gateResetMsg', 'success', 'Mot de passe mis à jour ✓ Tu peux te connecter.');
  const loggedInEmail = accounts[idx].email;
  setTimeout(()=>{
    showAuthTab('login');
    document.getElementById('gateLoginEmail').value = loggedInEmail;
    document.getElementById('gateLoginPassword').value = '';
    document.getElementById('gateLoginPassword').focus();
  }, 1200);
});

['resetPassword','resetPasswordConfirm'].forEach(id=>{
  document.getElementById(id).addEventListener('keydown', e=>{
    if(e.key==='Enter') document.getElementById('resetConfirmBtn').click();
  });
});

async function enterApp(account){
  currentUser = publicUser(account);
  document.getElementById('authGate').style.display = 'none';
  document.getElementById('mainApp').style.display = 'block';
  renderAuthArea();
  updateAskModalForAuth();
  updateAskCtaVisibility();
  renderHeader();
  // On recharge systématiquement les données partagées à chaque connexion
  // (et pas seulement si sharedDataReady est encore false) : si quelqu'un se
  // déconnecte puis crée un compte dans le même onglet, sans recharger la
  // page, il ne faut surtout pas réutiliser les données déjà en mémoire —
  // elles peuvent être périmées (ex. une annonce publiée entre-temps par
  // l'équipe ne serait sinon pas visible pour ce nouveau compte).
  await loadSharedData();
  renderNews();
  renderEvents();
  renderThreads();
  renderAnnouncements();
  renderEspace();
  renderBoard();
  startSharedPolling();
}

// Rafraîchit les données partagées toutes les 8 secondes pour que ce qui
// est publié dans "Espace équipe" / "Espace étudiant" apparaisse chez tout
// le monde sans recharger la page.
let sharedPollingTimer = null;
function startSharedPolling(){
  if(sharedPollingTimer) return;
  sharedPollingTimer = setInterval(refreshSharedData, 8000);
}

/* ---------------- Ask modal ---------------- */
const overlay = document.getElementById('askOverlay');
document.getElementById('openAskBtn').addEventListener('click', ()=> overlay.classList.add('open'));
document.getElementById('cancelAsk').addEventListener('click', ()=> overlay.classList.remove('open'));
overlay.addEventListener('click', (e)=>{ if(e.target===overlay) overlay.classList.remove('open'); });

document.getElementById('submitAsk').addEventListener('click', ()=>{
  const cat = document.getElementById('askCat').value;
  const title = document.getElementById('askTitle').value.trim();
  if(!title){
    document.getElementById('askTitle').style.borderColor = 'var(--flag)';
    return;
  }
  const author = currentUser ? ((`${currentUser.prenom} ${currentUser.nom}`.trim()) || "Anonyme") : "Anonyme";
  const formation = currentUser ? currentUser.formation : '';
  threads.unshift({cat, author, formation, title, votes:0, replies:[], ownerKey: userKey(currentUser), role: currentUser ? currentUser.role : null});
  document.getElementById('askTitle').value = '';
  document.getElementById('askTitle').style.borderColor = '';
  overlay.classList.remove('open');
  activeFilter = "Toutes";
  renderFilters();
  renderThreads();
  switchView('forum');
  persistShared();
});

/* ---------------- Admin modals: news & events (équipe MBS) ---------------- */
const newsOverlay = document.getElementById('newsOverlay');
const eventOverlay = document.getElementById('eventOverlay');

document.getElementById('addNewsBtn').addEventListener('click', ()=> newsOverlay.classList.add('open'));
document.getElementById('cancelNews').addEventListener('click', ()=> newsOverlay.classList.remove('open'));
newsOverlay.addEventListener('click', (e)=>{ if(e.target===newsOverlay) newsOverlay.classList.remove('open'); });

document.getElementById('submitNews').addEventListener('click', ()=>{
  const cat = document.getElementById('newsCat').value.trim() || "Vie de l'école";
  const title = document.getElementById('newsTitle').value.trim();
  const date = document.getElementById('newsDate').value.trim();
  const excerpt = document.getElementById('newsExcerpt').value.trim();
  const link = document.getElementById('newsLink').value.trim();
  if(!title){
    setGateMsg('newsMsg', 'error', 'Merci de renseigner au moins un titre.');
    return;
  }
  news.unshift({cat, tagClass:'acad', title, date, excerpt, link: link || null});
  ['newsCat','newsTitle','newsDate','newsExcerpt','newsLink'].forEach(id=> document.getElementById(id).value = '');
  clearGateMsg('newsMsg');
  newsOverlay.classList.remove('open');
  renderNews();
  renderEspace();
  persistShared();
});

document.getElementById('addEventBtn').addEventListener('click', ()=> eventOverlay.classList.add('open'));
document.getElementById('cancelEvent').addEventListener('click', ()=> eventOverlay.classList.remove('open'));
eventOverlay.addEventListener('click', (e)=>{ if(e.target===eventOverlay) eventOverlay.classList.remove('open'); });

document.getElementById('submitEvent').addEventListener('click', ()=>{
  const title = document.getElementById('eventTitle').value.trim();
  const day = document.getElementById('eventDay').value.trim();
  const month = document.getElementById('eventMonth').value.trim().toUpperCase();
  const loc = document.getElementById('eventLoc').value.trim();
  if(!title || !day || !month || !loc){
    setGateMsg('eventMsg', 'error', 'Merci de remplir tous les champs.');
    return;
  }
  events.push({day, month, title, loc, registrants:[]});
  ['eventTitle','eventDay','eventMonth','eventLoc'].forEach(id=> document.getElementById(id).value = '');
  clearGateMsg('eventMsg');
  eventOverlay.classList.remove('open');
  renderEvents();
  renderBoard();
  renderEspace();
  persistShared();
});

/* ---------------- Admin modal: annonces (équipe MBS) ---------------- */
const announcementOverlay = document.getElementById('announcementOverlay');
document.getElementById('cancelAnnouncement').addEventListener('click', ()=> announcementOverlay.classList.remove('open'));
announcementOverlay.addEventListener('click', (e)=>{ if(e.target===announcementOverlay) announcementOverlay.classList.remove('open'); });
document.getElementById('addAnnouncementBtn').addEventListener('click', ()=> announcementOverlay.classList.add('open'));

document.getElementById('submitAnnouncement').addEventListener('click', ()=>{
  const title = document.getElementById('announcementTitle').value.trim();
  const text = document.getElementById('announcementText').value.trim();
  const urgent = document.getElementById('announcementUrgent').checked;
  if(!title || !text){
    setGateMsg('announcementMsg', 'error', 'Merci de renseigner un titre et un message.');
    return;
  }
  announcements.unshift({title, text, urgent, at: Date.now()});
  document.getElementById('announcementTitle').value = '';
  document.getElementById('announcementText').value = '';
  document.getElementById('announcementUrgent').checked = false;
  clearGateMsg('announcementMsg');
  announcementOverlay.classList.remove('open');
  renderAnnouncements();
  renderEspace();
  persistShared();
});

/* ---------------- Init ---------------- */
(function init(){
  const existing = loadSessionAccount();
  if(existing){
    enterApp(existing);
  } else {
    document.getElementById('authGate').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
  }
  renderFilters();
  renderBoard();
  setInterval(renderHeader, 30000);
})();



if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("Service Worker enregistré"))
            .catch(err => console.error("Erreur Service Worker :", err));
    });
}


 
</script>

</body>
</html>
