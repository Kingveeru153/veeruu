<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>MDV Automation | Industrial Automation Experts</title>

    <!-- ===========================
       Change these variables only
       --project-aspect: desktop ratio (e.g. 16/9, 4/3, 3/2, 1/1)
       --project-aspect-tablet: tablet ratio
       --project-aspect-mobile: mobile ratio
       --project-max-width: max width for showcase on large desktops
       ============================ -->
    <style>
        /* Ultra-wide screen support */
        @media (min-width: 1600px) {
            :root {
                --max-width: 1600px;
            }

            body {
                font-size: 18px;
            }

            .headline {
                font-size: clamp(48px, 3vw, 72px);
            }

            .container {
                width: 90%;
                max-width: 1800px;
            }
        }

        @media (min-width: 2560px) {
            :root {
                --max-width: 2000px;
            }

            body {
                font-size: 20px;
            }

            .headline {
                font-size: clamp(60px, 2.5vw, 90px);
            }

            .container {
                width: 88%;
                max-width: 2200px;
            }
        }

        :root {
            --bg: #0a0f1a;
            --card: #0f1626;
            --text: #e6edf6;
            --muted: #9fb3c8;
            --brand: #38bdf8;
            --brand2: #22d3ee;
            --glass: rgba(255, 255, 255, .06);
            --border: rgba(255, 255, 255, .12);
            --shadow: 0 12px 30px rgba(0, 0, 0, .45);
            --radius: 18px;
            --max-width: 1200px;

            /* >>> EDIT THESE to change aspect ratio behavior <<< */
            --project-aspect: 16/9;
            /* desktop ratio (change this) */
            --project-aspect-tablet: 4/3;
            /* tablet ratio override */
            --project-aspect-mobile: 3/2;
            /* mobile ratio override */
            --project-max-width: 1100px;
            /* maximum width for project showcase on large displays */
            --project-card-aspect: 16/9;
            /* cards image aspect - defaults to match desktop */
            --slider-interval: 4200;
        }

        /* Basic reset */
        * {
            box-sizing: border-box
        }

        html,
        body {
            height: 100%;
            margin: 0;
            background: var(--bg);
            color: var(--text);
            font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial;
            scroll-behavior: smooth
        }

        img {
            max-width: 100%;
            height: auto;
            display: block
        }

        a {
            color: inherit;
            text-decoration: none
        }

        .container {
            width: 94%;
            max-width: 1600px;
            /* wider cap for large screens */
            margin-inline: auto;
            padding-bottom: 28px;
        }

        /* NAV */
        header {
            position: sticky;
            top: 0;
            z-index: 100;
            background: linear-gradient(180deg, rgba(10, 15, 26, .95), rgba(10, 15, 26, .7));
            border-bottom: 1px solid var(--border);
            backdrop-filter: blur(8px)
        }

        .nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;
            gap: 12px
        }

        .brand {
            display: flex;
            gap: 12px;
            align-items: center
        }

        .brand-logo {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            font-weight: 800;
            border: 2px solid var(--brand);
            color: var(--brand)
        }

        nav.menu {
            display: flex;
            gap: 16px;
            align-items: center;
            flex-wrap: wrap
        }

        nav.menu a {
            padding: 6px 8px;
            border-radius: 8px;
            transition: background .18s, color .18s;
            font-weight: 600
        }

        nav.menu a:hover {
            background: rgba(255, 255, 255, .02)
        }

        .btn {
            padding: 8px 14px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: linear-gradient(180deg, rgba(255, 255, 255, .02), rgba(255, 255, 255, .01));
            transition: transform .18s
        }

        .btn:hover {
            transform: translateY(-2px)
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--brand), var(--brand2));
            color: #041014;
            border: none;
            box-shadow: 0 10px 30px rgba(56, 189, 248, .18)
        }

        .menu-toggle {
            display: none;
            font-size: 28px;
            background: none;
            border: none;
            color: var(--brand);
            cursor: pointer
        }

        @media (max-width:540px) {
            nav.menu {
                display: none;
                flex-direction: column;
                background: var(--card);
                position: absolute;
                top: 60px;
                right: 10px;
                padding: 12px;
                border-radius: 12px;
                box-shadow: var(--shadow);
                z-index: 200
            }

            nav.menu.show {
                display: flex
            }

            nav.menu a {
                padding: 10px;
                border-bottom: 1px solid var(--border)
            }

            nav.menu a:last-child {
                border-bottom: none
            }

            .menu-toggle {
                display: block
            }
        }

        /* ====== HERO ====== */
        .hero {
            position: relative;
            padding: 45px 0 10px;
            overflow: clip
        }

        .gradient {
            position: absolute;
            inset: -30%;
            background: radial-gradient(60% 60% at 20% 10%, rgba(56, 189, 248, .18), transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(34, 211, 238, .16), transparent 60%), radial-gradient(45% 45% at 50% 100%, rgba(245, 158, 11, .12), transparent 60%);
            filter: blur(40px);
            z-index: -1
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr .9fr;
            gap: 42px;
            align-items: center
        }

        .headline {
            font-size: clamp(28px, 4.6vw, 54px);
            line-height: 1.05;
            margin: 0 0 14px;
            font-weight: 900
        }

        .sub {
            font-size: clamp(14px, 1.6vw, 18px);
            color: var(--muted);
            margin-bottom: 26px
        }

        .badges {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 20px
        }

        .hero-cta {
            display: flex;
            gap: 14px;
            flex-wrap: wrap
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 28px
        }

        .stat {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 16px;
            text-align: center
        }

        .stat h3 {
            margin: 0;
            font-size: 26px
        }

        .stat p {
            margin: 6px 0 0;
            color: var(--muted);
            font-size: 13px
        }

        .rig {
            position: relative;
            aspect-ratio: 4/3;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            background: linear-gradient(180deg, #0b1426, #0b1529);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .03), var(--shadow);
            padding: 22px;
            overflow: hidden
        }

        /* HERO SLIDER */
        .hero-slider {
            position: relative;
            aspect-ratio: 16/9;
            border-radius: var(--radius);
            overflow: hidden;
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
        }

        .hero-slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 1s ease, transform 6s ease;
        }

        .hero-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--radius);
            transform: scale(1.05);
        }

        .hero-slide.active {
            opacity: 1;
            z-index: 1;
        }


        /* ANIMATIONS */
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 900px) {
            .hero-grid {
                grid-template-columns: 1fr;
            }

            .nav-links {
                display: none;
            }
        }

        .project-slider {
            position: relative;
            aspect-ratio: 4/3;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            background: linear-gradient(180deg, #0b1426, #0b1529);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .03), var(--shadow);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }




        .project-slider img {
            flex: 0 0 100%;
            object-fit: cover;
            border-radius: var(--radius);
        }

        @keyframes slideShow {

            0%,
            20% {
                transform: translateX(0%);
            }

            25%,
            45% {
                transform: translateX(-100%);
            }

            50%,
            70% {
                transform: translateX(-200%);
            }

            75%,
            95% {
                transform: translateX(-300%);
            }

            100% {
                transform: translateX(0%);
            }
        }

        /* services Section Styling */
        /* Section Styling */
        #services {
            padding: 3rem 1rem;
            background: #0f2027;
            border-radius: 20px;
            color: #fff;
            position: relative;
            overflow: hidden;
        }

        /* Industrial Background Grid Lines */
        #services::before {
            content: "";
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(to right,
                    rgba(0, 234, 255, 0.05) 0px,
                    rgba(0, 234, 255, 0.05) 1px,
                    transparent 1px,
                    transparent 60px),
                repeating-linear-gradient(to bottom,
                    rgba(0, 234, 255, 0.05) 0px,
                    rgba(0, 234, 255, 0.05) 1px,
                    transparent 1px,
                    transparent 60px);
            animation: gridShift 20s linear infinite;
            z-index: 0;
        }

        @keyframes gridShift {
            from {
                transform: translateY(0);
            }

            to {
                transform: translateY(-60px);
            }
        }

        /* Grid Layout */
        .grid {
            position: relative;
            z-index: 2;
            display: grid;
            gap: 1.2rem;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        /* Card Styling */
        .card {
            position: relative;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 1.5rem;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px rgba(0, 234, 255, 0.25);
        }

        /* Animated Gear Cog */
        .card::before {
            content: "⚙️";
            position: absolute;
            font-size: 70px;
            color: rgba(0, 234, 255, 0.08);
            top: -20px;
            right: -20px;
            animation: rotateGear 20s linear infinite;
        }

        @keyframes rotateGear {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        /* Signal Pulse Effect */
        .card::after {
            content: "";
            position: absolute;
            bottom: 10px;
            left: 10px;
            width: 10px;
            height: 10px;
            background: #00eaff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00eaff;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }

            50% {
                transform: scale(1.8);
                opacity: 0.4;
            }

            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        /* Text on top */
        .card h4,
        .card p {
            position: relative;
            z-index: 2;
        }

        .card h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: #fff;
        }

        .card p {
            font-size: 0.95rem;
            color: #bbb;
            line-height: 1.4;
        }

        /* Add multi-pulse container inside each card */
        .card-indicators {
            position: absolute;
            bottom: 10px;
            left: 10px;
            display: flex;
            gap: 8px;
            z-index: 1;
        }

        .card-indicators span {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #00eaff;
            box-shadow: 0 0 6px #00eaff;
            opacity: 0.3;
            animation: pulseSeq 1.5s infinite;
        }

        /* Sequence delay for each dot */
        .card-indicators span:nth-child(1) {
            animation-delay: 0s;
        }

        .card-indicators span:nth-child(2) {
            animation-delay: 0.3s;
        }

        .card-indicators span:nth-child(3) {
            animation-delay: 0.6s;
        }

        .card-indicators span:nth-child(4) {
            animation-delay: 0.9s;
        }

        .card-indicators span:nth-child(5) {
            animation-delay: 1.2s;
        }

        @keyframes pulseSeq {

            0%,
            100% {
                opacity: 0.3;
                transform: scale(1);
            }

            50% {
                opacity: 1;
                transform: scale(1.3);
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px
        }

        .card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 16px;
            position: relative;
            transition: all .22s
        }

        .card h4 {
            margin: 0 0 8px
        }

        .card p {
            margin: 0;
            color: var(--muted);
            font-size: 14px
        }

        /* Clients */
        .section-head {
            font-family: "Roboto";
            color: #22d3ee;
        }

        .section-title {
            font-family: "Roboto";
        }

        .section-sub {
            font-family: "Roboto";
        }

        .section-sub9 {
            font-family: "Roboto";
            color: #eee;
            font-weight: 500;
            line-height: 1.2;
        }

        .logos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin-top: 30px;
            justify-items: center;
        }

        .logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: var(--glass, rgba(255, 255, 255, 0.05));
            border-radius: 12px;
            padding: 16px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .logo img {
            max-width: 90px;
            height: auto;
            margin-bottom: 8px;
        }

        .logo span {
            font-size: 0.85rem;
            font-weight: 500;
            color: #eee;
            line-height: 1.2;
        }

        .logo:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* ✅ Mobile optimization */
        @media (max-width: 768px) {
            .logos {
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 12px;
            }

            .logo {
                padding: 10px;
                border-radius: 10px;
            }

            .logo img {
                max-width: 60px;
                margin-bottom: 4px;
            }

            .logo span {
                font-size: 0.7rem;
                line-height: 1.1;
            }
        }




        .marquee {
            overflow: hidden;
            position: relative;
            border: 1px solid var(--border);
            border-radius: 16px;
            background: var(--glass)
        }

        .marquee-track {
            display: flex;
            gap: 40px;
            align-items: center;
            white-space: nowrap;
            padding: 18px;
            animation: scroll 12s linear infinite
        }

        @keyframes scroll {
            to {
                transform: translateX(-50%)
            }
        }


        /* CTA & CONTACT */
        .cta {
            display: grid;
            grid-template-columns: 1.2fr .8fr;
            gap: 14px;
            padding: 18px;
            border-radius: 14px;
            background: linear-gradient(135deg, rgba(56, 189, 248, .06), rgba(34, 211, 238, .03));
            border: 1px solid var(--border)
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px
        }

        .contact-card {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 12px
        }

        footer {
            padding: 26px 0;
            border-top: 1px solid var(--border);
            color: var(--muted);
            text-align: center
        }

        /* ======================
       PROJECT SHOWCASE SLIDER
       Uses CSS variables to control aspect ratio.
       Change --project-aspect in :root above.
       ====================== */
        .project-section {
            padding-top: 22px;
            padding-bottom: 22px
        }

        .project-slider {
            position: relative;
            border-radius: var(--radius);
            overflow: hidden;
            border: 1px solid var(--border);
            background: linear-gradient(180deg, #0b1426, #0b1529);
            box-shadow: var(--shadow);
            width: 100%;
            max-width: var(--project-max-width);
            margin-inline: auto;
            aspect-ratio: var(--project-aspect);
            /* <-- the key. change via CSS var */
        }

        /* slider internals - fill the container height */
        .slider-stage {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center
        }

        .slider-track {
            display: flex;
            height: 100%;
            transition: transform .6s cubic-bezier(.2, .9, .2, 1);
            will-change: transform
        }

        .slider-track img {
            flex: 0 0 100%;
            height: 100%;
            object-fit: cover;
            display: block
        }

        .slider-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: rgba(255, 255, 255, .03);
            border: 1px solid rgba(255, 255, 255, .06);
            cursor: pointer;
            z-index: 40
        }

        .slider-arrow.left {
            left: 12px
        }

        .slider-arrow.right {
            right: 12px
        }

        .slider-arrow .icon {
            font-size: 20px;
            color: var(--brand)
        }

        .slider-arrow:hover {
            transform: translateY(-50%) scale(1.05)
        }

        .controls {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 40
        }

        .dots {
            display: flex;
            gap: 8px
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: rgba(255, 255, 255, .06);
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, .03);
            transition: all .18s
        }

        .dot.active {
            background: var(--brand);
            box-shadow: 0 8px 20px rgba(56, 189, 248, .12)
        }

        .stepper {
            padding: 6px 10px;
            border-radius: 10px;
            background: rgba(0, 0, 0, .22);
            border: 1px solid rgba(255, 255, 255, .03);
            color: var(--muted);
            font-size: 13px
        }

        /* PROJECT GRID (cards under or beside slider) */
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 14px;
            margin-top: 18px
        }

        .project-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            transition: transform .22s
        }

        .project-card:hover {
            transform: translateY(-6px)
        }

        .project-card img {
            width: 100%;
            height: auto;
            display: block;
            aspect-ratio: var(--project-card-aspect);
            object-fit: cover
        }

        /* 🔧 Mobile view fixes for project cards */
        @media (max-width:540px) {
            .project-grid {
                grid-template-columns: repeat(2, 1fr);
                /* 2 cards side by side */
                gap: 10px;
            }

            .project-card {
                border-radius: 10px;
                padding: 3px;
            }

            .project-card img {
                aspect-ratio: 4/3;
                /* more compact than 16/9 */
                border-bottom: 1px solid var(--border);
            }

            .project-card .meta {
                padding: 8px;
            }

            .project-card h4 {
                font-size: 14px;
                margin-bottom: 2px;
            }

            .project-card p {
                font-size: 5px;
                line-height: 0.9;
            }
        }


        /* card images follow aspect var */
        ..projects-carousel {
            padding: 1rem;
            color: white;
            position: relative;
        }

        .projects-carousel h2 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }

        .carousel-wrapper {
            position: relative;
        }

        .carousel {
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding: 1rem 0;
        }

        .project-card {
            min-width: 250px;
            /* Bigger cards */
            flex: 0 0 auto;
            background: #111827;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
            scroll-snap-align: start;
            transition: transform 0.3s;
        }

        .project-card:hover {
            transform: scale(1.05);
        }

        /* Images inside cards */
        .project-card img {
            width: 100%;
            height: 160px;
            /* Fixed height for uniform look */
            object-fit: cover;
            display: block;
        }

        .project-card h3 {
            margin: 0.5rem;
            font-size: 1.1rem;
        }

        .project-card p {
            margin: 0 0.5rem 1rem;
            font-size: 0.9rem;
            color: #bbb;
        }

        /* Arrows */
        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.6);
            color: white;
            border: none;
            font-size: 2rem;
            padding: 0.5rem;
            cursor: pointer;
            border-radius: 50%;
            z-index: 5;
        }

        .arrow.left {
            left: 0;
        }

        .arrow.right {
            right: 0;
        }

        .arrow:hover {
            background: rgba(0, 0, 0, 0.9);
        }

        .industries-section ul {
            list-style: none;
            /* remove default bullets */
            padding: 0;
        }

        .industries-section li {
            margin-bottom: 15px;
            /* space between items */
        }

        /* interactive hover glow */
        .interactive {
            cursor: pointer;
            transition: all .22s
        }

        .interactive:hover,
        .interactive.is-active {
            background: linear-gradient(180deg, rgba(56, 189, 248, 0.10), rgba(34, 211, 238, 0.03));
            border-color: rgba(56, 189, 248, 0.36);
            box-shadow: 0 8px 28px rgba(56, 189, 248, 0.16);
            transform: translateY(-6px)
        }

        /* Responsive adjustments: override aspect ratio variables at breakpoints */
        @media (max-width:1024px) {
            :root {
                --project-aspect: var(--project-aspect-tablet);
                --project-card-aspect: var(--project-aspect-tablet);
            }

            .hero-grid {
                grid-template-columns: 1fr
            }

            .cta {
                grid-template-columns: 1fr
            }

            .contact-grid {
                grid-template-columns: 1fr
            }
        }

        @media (max-width:540px) {
            :root {
                --project-aspect: var(--project-aspect-mobile);
                --project-card-aspect: var(--project-aspect-mobile);
            }

            nav.menu {
                display: none
            }

            .brand-logo {
                width: 40px;
                height: 40px
            }

            .slider-arrow {
                width: 36px;
                height: 36px
            }

            .grid {
                grid-template-columns: 1fr
            }
        }

        /* small accessibility focus styles */
        .slider-arrow:focus {
            outline: 3px solid rgba(56, 189, 248, .12)
        }

        a:focus {
            outline: 2px dashed rgba(255, 255, 255, .06);
            outline-offset: 3px
        }

        /* ===== Sales & Brands Styling ===== */
        #sales {
            padding: 60px 20px;
            background: #0b0f1a;
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
        }

        #sales .section-head {
            text-align: center;
            margin-bottom: 40px;
        }

        #sales .section-title {
            font-size: 2rem;
            font-weight: 700;
            color: #00b4ff;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        #sales .section-sub {
            font-size: 1rem;
            color: #aaa;
        }

        #sales .sales {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 20px;
            justify-items: center;
        }

        /* Brand Cards */
        #sales .brand-card {
            background: #151a26;
            color: #fff;
            padding: 25px 20px;
            border-radius: 14px;
            text-align: center;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            transition: all 0.35s ease-in-out;
            width: 100%;
            max-width: 220px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeUp 0.8s forwards;
        }

        /* Hover / Tap Glow */
        #sales .brand-card:hover,
        #sales .brand-card:active {
            transform: translateY(-8px) scale(1.05);
            background: #1b2233;
            box-shadow: 0 10px 25px rgba(0, 180, 255, 0.6);
            color: #00b4ff;
            text-shadow: 0 0 10px rgba(0, 180, 255, 0.8);
        }

        /* Brand Name */
        #sales .brand-card h5 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: 700;
            transition: color 0.3s ease-in-out;
        }

        #sales .brand-card:hover h5,
        #sales .brand-card:active h5 {
            color: #00d0ff;
        }

        /* Scroll Animation */
        @keyframes fadeUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Sales & Brands buttons layout */
        .sales-brands {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 12px;
            margin: 0 auto;
            max-width: 100%;
            padding: 10px;
        }

        .sales-brands button {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            border-radius: 10px;
            background: #111827;
            color: #fff;
            border: none;
            text-align: center;
            font-weight: 600;
        }

        .sales-brands button {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            border-radius: 10px;
            background: #111827;
            color: #fff;
            border: none;
            text-align: center;
            font-weight: 600;
            transition: all 0.3s ease-in-out;
            position: relative;
            overflow: hidden;
        }

        /* Glow aura on hover/touch */
        .sales-brands button:hover,
        .sales-brands button:focus {
            box-shadow: 0 0 15px 5px rgba(0, 132, 255, 0.7);
            transform: translateY(-3px) scale(1.03);
            background: #1e293b;
        }

        /* Ripple aura effect */
        .sales-brands button::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(0, 132, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.5s ease, height 0.5s ease, opacity 0.5s ease;
            z-index: 0;
        }

        .sales-brands button:hover::after,
        .sales-brands button:focus::after {
            width: 250%;
            height: 250%;
            opacity: 0;
        }

        .sales-brands button span {
            position: relative;
            z-index: 1;
        }

        /* Mobile specific: 2 per row */
        @media (max-width: 768px) {
            .sales-brands {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* ===== Responsive Fixes ===== */
        @media (max-width: 768px) {
            #sales {
                padding: 40px 15px;
            }

            #sales .section-title {
                font-size: 1.6rem;
            }

            #sales .brand-card {
                font-size: 1rem;
                max-width: 100%;
            }
        }

        /* Default: hide on mobile */
        .image-closer {
            display: none;
        }

        /* Show only on desktop (>= 1024px width, adjust breakpoint if needed) */
        @media (min-width: 1024px) {
            .image-closer {
                display: flex;
                /* or block, depending on your layout */
                justify-content: center;
                gap: 20px;
                /* spacing between images */
            }
        }

        /* Stats Section */
        .stats-section {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
            flex-wrap: wrap;
        }

        .stat-card {
            background: #0d1b2a;
            color: #00e5ff;
            text-align: center;
            border-radius: 12px;
            padding: 12px 18px;
            min-width: 120px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .stat-card:hover {
            transform: scale(1.08);
            /* pop-up effect */
            box-shadow: 0 8px 18px rgba(0, 229, 255, 0.5);
            /* glowing aura */
        }



        .stat-card h2 {
            font-size: 22px;
            margin: 0;
            display: inline-block;
        }

        .stat-card span {
            font-size: 14px;
            margin-left: 2px;
        }

        .stat-card p {
            font-size: 12px;
            margin-top: 4px;
            color: #ccc;
        }

        /* Mobile View */
        @media (max-width: 768px) {
            .stats-section {
                flex-direction: row;
                gap: 12px;
            }

            .stat-card {
                flex: 1;
                min-width: 100px;
                padding: 10px 12px;
            }

            .stat-card h2 {
                font-size: 18px;
            }

            .stat-card p {
                font-size: 11px;
            }
        }

        button,
        a.btn {
            display: inline-block;
            padding: 8px 14px;
            /* smaller padding */
            font-size: 14px;
            /* smaller font */
            border-radius: 8px;
            /* smooth rounded corners */
            background: #0ea5e9;
            /* blue background */
            color: black;
            text-decoration: none;
            font-weight: 500;
            box-shadow: none;
            /* remove big glow/shadow */
        }

        button:hover,
        a.btn:hover {
            background: #0284c7;
            /* darker on hover */
        }
    </style>
<link rel="stylesheet" href="index.css">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" >
<meta name="robots" content="none,noarchive"/>
</head>

<body>
    <!-- NAV -->
    <header>
        <div class="container nav" role="banner">
            <div class="brand" aria-hidden="false">
                <div class="brand-logo">MDV</div>
                <div>
                    <div style="font-weight:800">MDV AUTOMATION</div>
                    <div style="font-size:12px;color:var(--muted)">Specialized in Industrial Automation</div>
                </div>
            </div>
            <button class="menu-toggle" aria-label="Toggle menu">☰</button>

            <nav class="menu" aria-label="Main navigation">
                <a href="#hero">Home</a>
                <a href="#services">Services</a>
                <a href="#industries">Industries</a>
                <a href="#clients">Clients</a>
                <a href="#projects">Projects</a>
                <a href="#sales">Sales</a>
                <a href="#contact" class="btn btn-primary">Contact / Call</a>
            </nav>
        </div>
    </header>

    <!-- HERO -->
    <main>
        <section id="hero" class="hero">
            <div class="container hero-grid">
                <div>
                    <h1 class="headline">Industrial Automation that runs
                        <span style="background:linear-gradient(135deg,#38bdf8,#22d3ee);
          -webkit-background-clip:text;background-clip:text;color:transparent">
                            24×7 flawlessly
                        </span>
                    </h1>
                    <p class="sub">We design, build and maintain robust automation systems for seafood & process industries. Trusted by industry leaders.</p>
                    <div style="display:flex;gap:14px;flex-wrap:wrap">
                        <a href="#contact" class="btn">👉 Get Contact Details</a>
                        <a href="#services" class="btn">Explore Services</a>
                    </div>
                    <section class="stats-section">
                        <div class="stat-card">
                            <h2 class="counter" data-target="7">0</h2><span>+ yrs</span>
                            <p>Combined Expertise</p>
                        </div>
                        <div class="stat-card">
                            <h2 class="counter" data-target="90">0</h2><span>+</span>
                            <p>Projects Delivered</p>
                        </div>
                    </section>
                </div>
                <div class="image-closer">
                    <div class="hero-slider">
                        <div class="hero-slide active">
                            <img src="https://i.ibb.co/T5spZWx/5fbf008ac1251cc-file-00000000390c61fda492175ca78a83b1-wm.png" alt="Project 1">
                        </div>
                        <div class="hero-slide">
                            <img src="https://i.ibb.co/7d5nkdPb/file-000000008728624686a1b1e84a4ca3ed-1.png" alt="Project 2">
                        </div>
                        <div class="hero-slide">
                            <img src="https://i.ibb.co/PvSrsfpQ/file-00000000480061f99ac998329e3b18f1.png" alt="Project 3">
                        </div>
                        <div class="hero-slide">
                            <img src="https://i.ibb.co/T5spZWx/5fbf008ac1251cc-file-00000000390c61fda492175ca78a83b1-wm.png" alt="Project 4">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- SERVICES -->
        <section id="services" class="section container" aria-label="Services">
            <div class="section-head">
                <div>
                    <h2 class="section-title">Core Services We Provide</h2>
                    <p class="section-sub9">End-to-end engineering, commissioning & lifetime support</p>
                </div>
                <span class="pill">24×7 Support</span>
            </div>
            <div class="grid">
                <div class="card interactive" data-interactive tabindex="0">
                    <div class="corner" aria-hidden="true"></div>
                    <h4>PLC Programming</h4>
                    <p>Siemens, Delta, Allen-Bradley – robust logic, I/O mapping, interlocks, safety, drive interfacing.</p>
                </div>
                <div class="card interactive" data-interactive tabindex="0">
                    <div class="corner" aria-hidden="true"></div>
                    <h4>HMI & SCADA</h4>
                    <p>Intuitive operator screens, alarms, trends, recipes, and historian integration for visibility.</p>
                </div>
                <div class="card interactive" data-interactive tabindex="0">
                    <div class="corner" aria-hidden="true"></div>
                    <h4>VFD Integration</h4>
                    <p>Drive sizing, commissioning, fieldbus (Modbus/Profibus/Profinet), energy-efficient tuning.</p>
                </div>
                <div class="card interactive" data-interactive tabindex="0">
                    <div class="corner" aria-hidden="true"></div>
                    <h4>Control Panels</h4>
                    <p>PCC & MCC design, fabrication, FAT/SAT, documentation and on-site commissioning.</p>
                </div>
                <div class="card interactive" data-interactive tabindex="0">
                    <div class="corner" aria-hidden="true"></div>
                    <h4>Panel Wiring & Cabling</h4>
                    <p>Wiring schedules, termination, marking and test documentation for robust installs.</p>
                </div>
                <div class="card interactive" data-interactive tabindex="0">
                    <div class="corner" aria-hidden="true"></div>
                    <h4>Service & Spares</h4>
                    <p>Lifetime support, spare supply and fast response field service.</p>
                </div>


            </div>
        </section>
        <!-- PROJECT SHOWCASE (slider + cards) -->
        <section id="projects" class="section container project-section" aria-label="Project Showcase">
            <div class="section-head">
                <div>
                    <h2 class="section-title">Project Showcase</h2>
                    <p class="section-sub9">Selected installations, panels and HMI/SCADA screenshots.</p>
                </div>
                <span class="pill">Recent Work</span>
            </div>

            <!-- Slider (aspect controlled by CSS var) -->
            <div class="project-slider" aria-roledescription="carousel" aria-label="Project showcase carousel">
                <div class="slider-stage">
                    <div class="slider-track" id="sliderTrack" aria-live="polite">
                        <!-- use appropriately sized images matching the ratio you set -->
                        <img src="https://i.ibb.co/DHz1TBCm/retouch-2025091014425101.jpg" alt="Project 1">
                        <img src="https://i.ibb.co/svysKY1v/retouch-2025091014305268.jpg" alt="Project 2">
                        <img src="https://i.ibb.co/PvSrsfpQ/file-00000000480061f99ac998329e3b18f1.png" alt="Project 3">
                        <img src="https://i.ibb.co/T5spZWx/5fbf008ac1251cc-file-00000000390c61fda492175ca78a83b1-wm.png" alt="Project 4">
                        <img src="https://i.ibb.co/DHz1TBCm/retouch-2025091014425101.jpg" alt="Project 1">
                        <img src="https://i.ibb.co/svysKY1v/retouch-2025091014305268.jpg" alt="Project 2">
                        <img src="https://i.ibb.co/PvSrsfpQ/file-00000000480061f99ac998329e3b18f1.png" alt="Project 3">
                        <img src="https://i.ibb.co/T5spZWx/5fbf008ac1251cc-file-00000000390c61fda492175ca78a83b1-wm.png" alt="Project 4">
                    </div>

                    <!-- arrows -->
                    <button class="slider-arrow left" id="prevBtn" aria-label="Previous slide" title="Previous"><span class="icon" aria-hidden="true">&#10094;</span></button>
                    <button class="slider-arrow right" id="nextBtn" aria-label="Next slide" title="Next"><span class="icon" aria-hidden="true">&#10095;</span></button>

                    <!-- dots + stepper -->
                    <div class="controls" role="group" aria-label="Carousel controls">
                        <div class="stepper" id="stepper" aria-hidden="true">1 / 4</div>
                        <div class="dots" id="dots" aria-hidden="false"></div>
                    </div>
                </div>
            </div>

            <!-- INDUSTRIES -->
            <!-- SERVICES -->
            <section id="services" class="services-section">
                <div class="section-head">
                    <h2 class="section-title">Industrial Automation</h2>
                    <p class="section-sub">
                        Innovative automation solutions driving efficiency, safety & reliability across industries.
                    </p>
                    <span class="pill">Empowering Industries with Industry 4.0 Excellence</span>
                </div>

                <!-- Industries Grid -->
                <div class="industries-grid">
                    <div class="industry-card animate">
                        <div class="icon">🚗</div>
                        <h3>Automotive</h3>
                        <p>Precision & speed in modern manufacturing.</p>
                    </div>
                    <div class="industry-card animate">
                        <div class="icon">💊</div>
                        <h3>Pharma</h3>
                        <p>Compliance, safety & quality control.</p>
                    </div>
                    <div class="industry-card animate">
                        <div class="icon">🍔</div>
                        <h3>Food & Beverage</h3>
                        <p>Hygienic & efficient production.</p>
                    </div>
                    <div class="industry-card animate">
                        <div class="icon">⛽</div>
                        <h3>Oil & Gas</h3>
                        <p>Robust & secure automation.</p>
                    </div>
                    <div class="industry-card animate">
                        <div class="icon">⚡</div>
                        <h3>Power & Energy</h3>
                        <p>Smart systems for monitoring.</p>
                    </div>
                    <div class="industry-card animate">
                        <div class="icon">🏭</div>
                        <h3>Manufacturing</h3>
                        <p>Reliable automation solutions.</p>
                    </div>
                </div>
            </section>

            <!-- CSS -->

            <style>
                .services-section {
                    padding: 50px 5% 60px;
                    /* reduced top padding from 80px → 60px */
                    background: linear-gradient(135deg, #08121f, #0a1b2e 70%);
                    color: #fff;
                    text-align: center;
                }

                /* Section Heading */
                .section-title {
                    font-size: 2rem;
                    /* slightly smaller */
                    font-weight: 800;
                    margin-bottom: 1px;
                    /* reduced from 15px */
                    color: #22d3ee;
                    text-transform: uppercase;
                }

                .section-sub {
                    color: #b5b5b5;
                    font-size: 1rem;
                    /* slightly smaller */
                    max-width: 700px;
                    margin: 0 auto 12px;
                    /* reduced bottom margin from 20px → 12px */
                    line-height: 1.5;
                }

                .pill {
                    display: inline-block;
                    background: #00eaff;
                    color: #08121f;
                    padding: 5px 15px;
                    border-radius: 18px;
                    font-size: 0.85rem;
                    font-weight: bold;
                    margin-top: 10px;
                    /* reduced space */
                    text-transform: uppercase;
                }

                /* Grid */
                .industries-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 25px;
                    max-width: 1200px;
                    margin: 50px auto 0;
                }

                .industry-card {
                    background: rgba(15, 30, 50, 0.9);
                    padding: 25px 20px;
                    border-radius: 14px;
                    border: 1px solid rgba(0, 234, 255, 0.2);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.35s ease;
                    text-align: center;
                    transform: translateY(30px);
                    opacity: 0;
                }

                .industry-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 12px 25px rgba(0, 234, 255, 0.35);
                    border-color: #00eaff;
                }

                .industry-card .icon {
                    font-size: 2rem;
                    margin-bottom: 12px;
                    text-shadow: 0 0 10px #00eaff;
                }

                .industry-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.8px;
                    color: #00eaff;
                    font-weight: 700;
                }

                .industry-card p {
                    font-size: 0.95rem;
                    line-height: 1.2;
                    color: #ddd;
                }


                /* Compact Responsive Adjustments */
                @media (max-width: 768px) {
                    .services-section {
                        padding: 45px 6% 60px;
                        /* tighter on mobile */
                    }

                    .section-title {
                        font-size: 1.6rem;
                        color: #22d3ee;
                    }


                    .section-sub {
                        font-size: 0.9rem;
                        margin-bottom: 10px;
                    }
                }

                @media (max-width: 768px) {
                    .industries-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 18px;
                    }

                    .industry-card {
                        padding: 1.5px 7.5px;
                    }

                    .industry-card h3 {
                        font-size: 1.05rem;
                    }

                    .industry-card p {
                        font-size: 0.85rem;
                    }
                }

                /* Scroll Animations */
                .animate.show {
                    transform: translateY(0);
                    opacity: 1;
                    transition: all 0.8s ease-out;
                }
            </style>

            <!-- JS for Scroll Animation -->
            <script>
                const cards = document.querySelectorAll('.industry-card');
                const revealOnScroll = () => {
                    cards.forEach(card => {
                        const rect = card.getBoundingClientRect();
                        if (rect.top < window.innerHeight - 70) {
                            card.classList.add('show');
                        }
                    });
                };
                window.addEventListener('scroll', revealOnScroll);
                window.addEventListener('load', revealOnScroll);
            </script>
            <!-- ===== Sales & Brands Section ===== -->
            <section id="sales">
                <div class="section-head">
                    <h2 class="section-title">SALES & BRANDS</h2>
                    <p class="section-sub">Authorized dealers & spare parts</p>
                </div>
                <div class="sales-brands">
                    <button><span>Siemens</span></button>
                    <button><span>Delta</span></button>
                    <button><span>Schneider</span></button>
                    <button><span>Wago</span></button>
                    <button><span>Mitsubishi</span></button>
                </div>
                <!-- Project cards (follow the same ratio) -->

                <section class="projects-carousel">
                    <h2 class="section-title">MDV AUTOMATION</h2>
                    <p class="section-sub">One Stop Solution For All Industrial Sales & Services </p>

                    <div class="carousel-wrapper">
                        <!-- Left arrow -->
                        <button class="arrow left" onclick="scrollCarousel(-1)">&#10094;</button>

                        <!-- Carousel -->
                        <div class="carousel" id="carousel">
                            <div class="project-card">
                                <img src="project1.jpg" alt="Variable Frequency Drive's">
                                <h3>•Siemens •Delta e.t.c..</h3>
                                <p>All brands VFDS sales & services Avilable</p>
                            </div>

                            <div class="project-card">
                                <img src="project2.jpg" alt="PLC">
                                <h3>•Siemens •Delta •Schneider</h3>
                                <p>All brands PLC'S sales & services </p>
                            </div>

                            <div class="project-card">
                                <img src="project3.jpg" alt="VFD Integration">
                                <h3>Project 3</h3>
                                <p>VFD Integration</p>
                            </div>

                            <div class="project-card">
                                <img src="project4.jpg" alt="Conveyor Automation">
                                <h3>Project 4</h3>
                                <p>Conveyor Automation</p>
                            </div>

                            <div class="project-card">
                                <img src="project5.jpg" alt="Extra Project">
                                <h3>Project 5</h3>
                                <p>Extra Project</p>
                            </div>
                        </div>

                        <!-- Right arrow -->
                        <button class="arrow right" onclick="scrollCarousel(1)">&#10095;</button>
                    </div>
                </section>


                <!-- CLIENTS -->
                <section id="clients" class="section container" aria-label="Clients & Partners">
                    <div class="section-head">
                        <div>
                            <h2 class="section-title">Trusted By</h2>
                            <p class="section-sub9">Industry leaders we proudly partner with.</p>
                        </div>
                        <span class="pill">Industry Leaders</span>
                    </div>

                    <div class="logos" aria-label="Reputed clients">
                        <div class="logo">
                            <a href="https://www.nekkantiseafoods.com" target="_blank">
                                <img src="https://nekkantiseafoods.com/wp-content/uploads/2022/10/301x215.png" alt="Nekkanti Sea Foods Ltd">
                                <span>➥ Nekkanti Sea Foods Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://www.deviseafoods.com" target="_blank">
                                <img src="https://uploads-ssl.webflow.com/5f4cb6a82b080e5617bb4a2a/5f4cb850f814fe4462af2722_Logo%402x.png" alt="Devi Sea Foods Ltd">
                                <span>➥ Devi Sea Foods Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://avantifeeds.com/division-frozen/" target="_blank">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAz1BMVEX////z+/7t+P4AvvMwxfQAwPMAu/IAvfLf9P1DyPTP7vxYzfXF6/ts0faB1/eY3fj806f+8+f82LP5mQD5oBum4fn93b35nAD7yZH94sb//fv5pTH5oiX99/X7xIa05/zYZCbXXhfnqJHi8ue138TabTjZaTHWWQXrtqN6yZjE5c/bdUXgimf6rk4ArljdfVNFunUqtGZav4L24NiM0Kb57Oi038Pl7/iiyOdhp9oAic8AgMwAfssAg804ltR3sd620+ya1bDS4/MAh86Ku+Jmj0n6AAABOklEQVR4AY2QBZLDMBTFXrjMjIEyM4SK9z/Tuk7HZc9q2JLpg4MgAlwvyeCiKCrXy4qihTg+LJEg8ttHiVe02E8f1xRukCCeFySJ5wWiSjV9JP+E799MpQGqfwwqk80B+eAI+YsvZHPFEgT6Cinx6cvZXC6XreDXJ6jPFVOIS9+fUK4Wc4Qakrcg+q7rABr0jnRTo1OovHrdMOtIZUlQjpFAhtV69pW23tG7PZSKQaDG0B/giaHeIRgjjIvZSkyTorAmz8GUeFr00CiQQcjAbD548l19qHcNXdenuLOYzy3mR73bFyrL3sgwEbCaz+bMr5//w4L5Boztbm87rucfjiL71WmALQLOvutdLrZtXzzP9a9ntnwEZe8SySCVa+8JF8ehgWgzzbhQPA83XNf5CrlLuD/wGyKR/+MPk+kzMWL2A54AAAAASUVORK5CYII=" alt="Avanthi Frozen Foods Pvt Ltd">
                                <span>➥ Avanthi Frozen Foods Pvt Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://apexfrozenfoods.in/" target="_blank">
                                <img src="https://apexfrozenfoods.in/wp-content/uploads/2017/03/logo-60.png" alt="Apex Frozen Foods Pvt Ltd">
                                <span>➥ Apex Frozen Foods Pvt Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://sandhyaaqua.com/" target="_blank">
                                <img src="https://sandhyaaqua.com/wp-content/uploads/2020/07/SA-Logo-white.png" alt="Sandhya Aqua Exports Pvt Ltd">
                                <span>➥ Sandhya Aqua Exports Pvt Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://www.falconmarine.co.in/" target="_blank">
                                <img src="https://falconmarine.co.in/img/logo.png" alt="Falcon Marine Exports Ltd">
                                <span>➥ Falcon Marine Exports Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://suryamitraexim.com/" target="_blank">
                                <img src="https://suryamitraexim.com/admin/uploads/logo/SME-logo.png" alt="Surya Mytra Exim Pvt Ltd">
                                <span>➥ Surya Mytra Exim Pvt Ltd</span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="https://wellcomefisheries.com/" target="_blank">
                                <img src="https://i.ibb.co/mxFSpfc/Picsart-25-09-09-17-28-49-994.png" alt="Wellcome Fisheries Ltd">
                                <span>➥ Wellcome Fisheries Ltd</span>
                            </a>
                        </div>
                        <!-- add more as needed -->
                    </div>

                    <div class="marquee" style="margin-top:16px" aria-hidden="true">
                        <div class="marquee-track">
                            <span>• PLC • HMI • SCADA • VFD Services • Control Panels • MCC Panels • HVAC Drives • Power&Control Cable Scheduling •</span>
                            3 <span>• PLC • HMI • SCADA • VFD Services • Control Panels • MCC Panels • HVAC Drives • Power&Control Cable Scheduling •</span>
                        </div>
                    </div>
                </section>


                <!-- CTA -->
                <section class="section container" aria-label="Get in touch">
                    <div class="cta">
                        <div>
                            <h3 style="margin:0 0 8px">Ready to start your automation project?</h3>
                            <p style="margin:0;color:var(--muted)">Talk with our engineers & sales team for a quick scope, estimate and site plan.</p>
                        </div>
                        <div style="display:flex;align-items:center;justify-content:flex-end;gap:12px">
                            <a class="btn btn-primary" href="#contact">Contact Us</a>
                            <a class="btn" href="tel:+918333025345">Call +91 83330 25345</a>
                        </div>
                    </div>
                </section>

                <!doctype html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Contact</title>
                    <style>
                        /* Contact Section */
                        #contact {
                            padding: 80px 20px;
                            background: radial-gradient(circle at top, #0a1a2f, #000);
                            color: #fff;
                            text-align: center;
                            position: relative;
                            overflow: hidden;
                        }

                        #contact .section-title {
                            font-size: 2.5rem;
                            font-weight: bold;
                            color: #00bfff;
                            margin-bottom: 10px;
                            text-transform: uppercase;
                        }

                        #contact .section-sub {
                            font-size: 1rem;
                            margin-bottom: 25px;
                            color: #ccc;
                        }

                        #contact .pill {
                            display: inline-block;
                            padding: 10px 25px;
                            background: #00bfff;
                            color: #000;
                            font-weight: bold;
                            border-radius: 25px;
                            box-shadow: 0 0 20px #00bfff;
                            animation: pulse 2s infinite;
                        }

                        @keyframes pulse {
                            0% {
                                box-shadow: 0 0 10px #00bfff;
                            }

                            50% {
                                box-shadow: 0 0 25px #00bfff;
                            }

                            100% {
                                box-shadow: 0 0 10px #00bfff;
                            }
                        }

                        #contact .contact-grid {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 25px;
                            margin-top: 40px;
                        }

                        #contact .info-card,
                        #contact .contact-card {
                            background: rgba(255, 255, 255, 0.05);
                            border-radius: 15px;
                            padding: 25px;
                            box-shadow: 0 0 15px rgba(0, 191, 255, 0.3);
                            transition: transform 0.3s;
                        }

                        #contact .info-card:hover,
                        #contact .contact-card:hover {
                            transform: translateY(-8px);
                        }

                        .contact-action {
                            margin-top: 20px;
                        }

                        .contact-action a {
                            display: block;
                            background: #00bfff;
                            color: #000;
                            padding: 15px;
                            margin: 10px 0;
                            border-radius: 10px;
                            font-weight: bold;
                            text-decoration: none;
                            box-shadow: 0 0 12px #00bfff;
                            transition: 0.3s;
                        }

                        .contact-action a:hover {
                            background: #0099cc;
                            box-shadow: 0 0 25px #00bfff;
                        }

                        #contact form input,
                        #contact form textarea {
                            width: 100%;
                            padding: 12px;
                            margin-bottom: 12px;
                            border-radius: 10px;
                            border: 1px solid #333;
                            background: #08121b;
                            color: #fff;
                            box-sizing: border-box;
                        }

                        #contact form button {
                            background: #00bfff;
                            color: #000;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 10px;
                            font-weight: bold;
                            cursor: pointer;
                            box-shadow: 0 0 15px #00bfff;
                            transition: 0.3s;
                        }

                        #contact form button:hover {
                            background: #0099cc;
                            box-shadow: 0 0 25px #00bfff;
                        }

                        /* Responsive Fix */
                        @media (max-width: 768px) {
                            #contact .contact-grid {
                                grid-template-columns: 1fr;
                            }

                            #contact .info-card,
                            #contact .contact-card {
                                width: 100%;
                            }

                            .contact-action a {
                                width: 100%;
                                font-size: 0.95rem;
                                padding: 14px;
                            }
                        }

                        @media (max-width: 480px) {
                            #contact {
                                padding: 40px 12px;
                            }

                            #contact .section-title {
                                font-size: 1.8rem;
                            }

                            #contact .pill {
                                font-size: 0.9rem;
                                padding: 8px 18px;
                            }

                            .contact-action a {
                                font-size: 0.9rem;
                                padding: 12px;
                            }
                        }
                    </style>
                <link rel="stylesheet" href="index.css">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" >
<meta name="robots" content="none,noarchive"/>
</head>

                <body>
                    <!-- CONTACT -->
                    <section id="contact">
                        <h2 class="section-title">CONTACT</h2>
                        <p class="section-sub">Reach us for site visits, quotes and support</p>
                        <span class="pill">Connect With Us</span>

                        <div class="contact-grid">
                            <!-- Info -->
                            <div class="info-card">
                                <h3>MDV Automation</h3>
                                <p>Sales & Service — Industrial Automation</p>
                                <div class="contact-action">
                                    <a href="tel:+918333025345">📞 Call Now: +91 83330 25345</a>
                                    <a href="mailto:info@mdv-automation.example">✉️ mdvautomation@gmail.com</a>
                                    <a href="mailto:info@mdv-automation.example">✉️ Email: mdvramana7@gmail.com</a>

                                </div>
                            </div>

                            <!-- Form -->
                            <div class="contact-card">
                                <form id="contactForm" onsubmit="event.preventDefault(); alert('Demo form submitted — replace with your backend endpoint.');">
                                    <input type="text" name="name" placeholder="Name" required>
                                    <input type="email" name="email" placeholder="Email" required>
                                    <textarea name="message" placeholder="Message" rows="4" required></textarea>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </section>
                <script src="index.js"></script>
</body>

                </html>


    </main>

    <footer class="container" role="contentinfo">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
            <div style="font-size:13px">© <strong>MDV Automation</strong> — Industrial Automation Experts</div>
            <div style="font-size:13px;color:var(--muted)">Designed to fit laptops & mobiles • Responsive • Fast</div>
            <script>
                function scrollCarousel(direction) {
                    const carousel = document.getElementById("carousel");
                    const cardWidth = carousel.querySelector(".project-card").offsetWidth + 16;
                    carousel.scrollBy({
                        left: direction * cardWidth,
                        behavior: 'smooth'
                    });
                }
            </script>
        </div>
    </footer>

    <!-- JS: slider, dots, stepper, counters, touch & interactions -->
    <script>
        // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', () => {
            document.querySelector('nav.menu').classList.toggle('show');
        });

        /* HERO SLIDER */
        const heroSlides = document.querySelectorAll('.hero-slide');
        let heroIndex = 0;

        function showHeroSlide(i) {
            heroSlides.forEach((s, idx) => s.classList.toggle('active', idx === i));
        }

        setInterval(() => {
            heroIndex = (heroIndex + 1) % heroSlides.length;
            showHeroSlide(heroIndex);
        }, 3000); // 3s per hero slide

        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll(".counter");
            const speed = 50; // lower = faster

            counters.forEach(counter => {
                const animate = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
                    const increment = Math.ceil(target / speed);

                    if (count < target) {
                        counter.innerText = count + increment;
                        setTimeout(animate, 40);
                    } else {
                        counter.innerText = target;
                    }
                };
                animate();
            });
        });

        (function() {
            // Elements
            const track = document.getElementById('sliderTrack');
            const slides = Array.from(track.children);
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const dotsEl = document.getElementById('dots');
            const stepperEl = document.getElementById('stepper');
            const sliderContainer = document.querySelector('.project-slider');

            // state
            let index = 0;
            const total = slides.length;
            let autoTimer = null;
            const interval = Number(getComputedStyle(document.documentElement).getPropertyValue('--slider-interval')) || 4200;
            let isPaused = false;
            let pointer = {
                down: false,
                startX: 0,
                currentX: 0,
                move: false
            };

            // build dots
            function buildDots() {
                if (!dotsEl) return;
                dotsEl.innerHTML = '';
                for (let i = 0; i < total; i++) {
                    const btn = document.createElement('button');
                    btn.className = 'dot';
                    btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
                    btn.dataset.index = i;
                    btn.addEventListener('click', () => {
                        goTo(i);
                        resetAuto();
                    });
                    dotsEl.appendChild(btn);
                }
            }

            // update UI
            function updateUI() {
                track.style.transform = `translateX(-${index * 100}%)`;
                const dots = dotsEl ? dotsEl.querySelectorAll('.dot') : [];
                dots.forEach((d, i) => d.classList.toggle('active', i === index));
                if (stepperEl) stepperEl.textContent = `${index + 1} / ${total}`;
            }

            // navigation
            function goTo(i) {
                index = ((i % total) + total) % total;
                updateUI();
            }
            nextBtn.addEventListener('click', () => {
                goTo(index + 1);
                resetAuto();
            });
            prevBtn.addEventListener('click', () => {
                goTo(index - 1);
                resetAuto();
            });

            // keyboard nav
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') nextBtn.click();
                if (e.key === 'ArrowLeft') prevBtn.click();
            });

            // auto slide
            function startAuto() {
                stopAuto();
                autoTimer = setInterval(() => {
                    if (!isPaused) goTo(index + 1);
                }, interval);
            }

            function stopAuto() {
                if (autoTimer) {
                    clearInterval(autoTimer);
                    autoTimer = null;
                }
            }

            function resetAuto() {
                isPaused = false;
                stopAuto();
                startAuto();
            }

            // pause on hover/focus
            sliderContainer.addEventListener('mouseenter', () => isPaused = true);
            sliderContainer.addEventListener('mouseleave', () => isPaused = false);
            sliderContainer.addEventListener('focusin', () => isPaused = true);
            sliderContainer.addEventListener('focusout', () => isPaused = false);

            // swipe support
            sliderContainer.addEventListener('pointerdown', (e) => {
                pointer.down = true;
                pointer.startX = e.clientX;
                pointer.currentX = e.clientX;
                pointer.move = false;
                sliderContainer.setPointerCapture(e.pointerId);
                track.style.transition = 'none';
                isPaused = true;
            }, {
                passive: true
            });

            sliderContainer.addEventListener('pointermove', (e) => {
                if (!pointer.down) return;
                pointer.currentX = e.clientX;
                pointer.move = true;
                const dx = pointer.currentX - pointer.startX;
                track.style.transform = `translateX(calc(-${index*100}% + ${dx}px))`;
            }, {
                passive: true
            });

            sliderContainer.addEventListener('pointerup', (e) => {
                if (!pointer.down) return;
                pointer.down = false;
                track.style.transition = '';
                const dx = e.clientX - pointer.startX;
                const threshold = Math.max(50, sliderContainer.offsetWidth * 0.12);
                if (dx > threshold) goTo(index - 1);
                else if (dx < -threshold) goTo(index + 1);
                else goTo(index);
                isPaused = false;
                resetAuto();
            });

            // prevent image drag
            track.querySelectorAll('img').forEach(img => img.addEventListener('dragstart', e => e.preventDefault()));

            // interactive elements activation
            const interactives = document.querySelectorAll('[data-interactive]');
            interactives.forEach(el => {
                el.classList.add('interactive');
                let tmr = null;

                function activateTemp() {
                    el.classList.add('is-active');
                    clearTimeout(tmr);
                    tmr = setTimeout(() => el.classList.remove('is-active'), 700);
                }
                el.addEventListener('touchstart', activateTemp, {
                    passive: true
                });
                el.addEventListener('mousedown', () => el.classList.add('is-active'));
                el.addEventListener('mouseup', () => setTimeout(() => el.classList.remove('is-active'), 120));
                el.addEventListener('mouseleave', () => el.classList.remove('is-active'));
                el.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') activateTemp();
                });
            });

            // counters
            const counters = document.querySelectorAll('.counter');
            counters.forEach(c => {
                const target = Number(c.dataset.count) || 0;
                let current = 0;
                const step = Math.max(1, Math.floor(target / 40));
                const id = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        c.textContent = target;
                        clearInterval(id);
                    } else c.textContent = current;
                }, 25);
            });

            // init
            buildDots();
            goTo(0);
            startAuto();

            // ensure images loaded before using layout (prevents jumps)
            const imgs = Array.from(track.querySelectorAll('img'));
            Promise.all(imgs.map(img => new Promise(res => {
                if (img.complete) return res();
                img.onload = img.onerror = res;
            }))).then(() => goTo(0));

            // expose for debug / dev
            window.mdvSlider = {
                goTo,
                startAuto,
                stopAuto
            };
        })();
    </script>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const track = document.querySelector(".slider-track");
            const slides = document.querySelectorAll(".slider-track img");
            const prev = document.querySelector(".slider-arrow.left");
            const next = document.querySelector(".slider-arrow.right");
            const dots = document.querySelectorAll(".dot");
            const stepper = document.querySelector(".stepper");

            let currentIndex = 0;

            function updateSlider() {
                // move the slides
                track.style.transform = translateX(-$ {
                    currentIndex * 100
                } % );

                // update dots
                dots.forEach((dot, i) => {
                    dot.classList.toggle("active", i === currentIndex);
                });

                // update stepper text (1/4, 2/4, …)
                if (stepper) {
                    stepper.textContent = $ {
                        currentIndex + 1
                    }
                    / ${slides.length};
                }
            }

            // Next / Prev button actions
            if (next) {
                next.addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateSlider();
                });
            }

            if (prev) {
                prev.addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    updateSlider();
                });
            }

            // Dot click action
            dots.forEach((dot, i) => {
                dot.addEventListener("click", () => {
                    currentIndex = i;
                    updateSlider();
                });
            });

            // Init
            updateSlider();
        });
    </script>
<script src="index.js"></script>
</body>

</html>