import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { computed, inject } from '@angular/core';
import { GalleryDataService } from './services/gallery-data.service';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/", a0];
const _c1 = () => ({ exact: true });
const _forTrack0 = ($index, $item) => $item.id;
function App_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const set_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("--link-accent", set_r1.accent)("--link-glow", set_r1.glow);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, set_r1.slug))("routerLinkActiveOptions", i0.ɵɵpureFunction0(10, _c1));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(set_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.totalCards(set_r1), " cards");
} }
export class App {
    galleryData = inject(GalleryDataService);
    manifest = toSignal(this.galleryData.manifest$, { initialValue: null });
    sets = computed(() => this.manifest()?.sets ?? [], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "sets" }] : /* istanbul ignore next */ []));
    totalCards = (set) => set.cards.standard.length + set.cards.fullArt.length + set.cards.moment.length + set.cards.aceTrainer.length;
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "shell"], [1, "chrome"], [1, "brand"], [1, "brand-mark"], [1, "eyebrow"], [1, "tagline"], ["aria-label", "Card sets", 1, "set-nav"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "--link-accent", "--link-glow"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "PX");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div")(6, "p", 4);
            i0.ɵɵtext(7, "pokepeepdex");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1");
            i0.ɵɵtext(9, "Retro card gallery");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 5);
            i0.ɵɵtext(11, " A neon-drenched Pok\u00E9dex for every set in the collection. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "nav", 6);
            i0.ɵɵrepeaterCreate(13, App_For_14_Template, 5, 11, "a", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(15, "router-outlet");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵrepeater(ctx.sets());
        } }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ["-shadowcsshost-no-combinator\n  display: block\n  min-height: 100dvh\n\n.shell\n  min-height: 100dvh\n  display: grid\n  grid-template-rows: auto 1fr\n\n.chrome\n  position: sticky\n  top: 0\n  z-index: 10\n  display: grid\n  gap: 1rem\n  padding: 1rem clamp(1rem, 3vw, 1.5rem)\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08)\n  background: rgba(5, 8, 20, 0.8)\n  backdrop-filter: blur(14px)\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24)\n\n.brand\n  display: flex\n  gap: 0.9rem\n  align-items: center\n\n.brand-mark\n  display: inline-grid\n  place-items: center\n  width: 3rem\n  aspect-ratio: 1\n  border-radius: 1rem\n  border: 1px solid rgba(255, 255, 255, 0.14)\n  background: linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04))\n  color: #fff\n  font-weight: 800\n  letter-spacing: 0.12em\n  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04) inset, 0 0 22px rgba(255, 255, 255, 0.08)\n\n.eyebrow\n  margin: 0\n  color: var(--brand-accent, #ffb347)\n  text-transform: uppercase\n  letter-spacing: 0.24em\n  font-size: 0.7rem\n  font-weight: 800\n\nh1\n  margin: 0.1rem 0 0\n  font-size: clamp(1.5rem, 3vw, 2.4rem)\n  line-height: 1\n  letter-spacing: -0.05em\n\n.tagline\n  margin: 0.45rem 0 0\n  max-width: 40rem\n  color: rgba(241, 245, 255, 0.72)\n  font-size: 0.95rem\n  line-height: 1.5\n\n.set-nav\n  display: flex\n  flex-wrap: wrap\n  gap: 0.75rem\n\n.set-nav a\n  display: grid\n  gap: 0.2rem\n  padding: 0.75rem 0.95rem\n  border-radius: 1rem\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  background: rgba(255, 255, 255, 0.04)\n  text-decoration: none\n  color: inherit\n  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease, background 160ms ease\n\n.set-nav a:hover\n  transform: translateY(-1px)\n  background: rgba(255, 255, 255, 0.06)\n\n.set-nav a.active\n  border-color: var(--link-accent)\n  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12) inset, 0 0 24px var(--link-glow)\n\n.set-nav span\n  font-size: 0.95rem\n  font-weight: 800\n  letter-spacing: 0.02em\n\n.set-nav small\n  color: rgba(241, 245, 255, 0.65)\n  font-size: 0.75rem"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterLink, RouterLinkActive, RouterOutlet], template: `
    <div class="shell">
      <header class="chrome">
        <div class="brand">
          <span class="brand-mark">PX</span>
          <div>
            <p class="eyebrow">pokepeepdex</p>
            <h1>Retro card gallery</h1>
            <p class="tagline">
              A neon-drenched Pokédex for every set in the collection.
            </p>
          </div>
        </div>

        <nav class="set-nav" aria-label="Card sets">
          @for (set of sets(); track set.id) {
            <a
              [routerLink]="['/', set.slug]"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              [style.--link-accent]="set.accent"
              [style.--link-glow]="set.glow"
            >
              <span>{{ set.title }}</span>
              <small>{{ totalCards(set) }} cards</small>
            </a>
          }
        </nav>
      </header>

      <router-outlet />
    </div>
  `, styles: [":host\n  display: block\n  min-height: 100dvh\n\n.shell\n  min-height: 100dvh\n  display: grid\n  grid-template-rows: auto 1fr\n\n.chrome\n  position: sticky\n  top: 0\n  z-index: 10\n  display: grid\n  gap: 1rem\n  padding: 1rem clamp(1rem, 3vw, 1.5rem)\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08)\n  background: rgba(5, 8, 20, 0.8)\n  backdrop-filter: blur(14px)\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24)\n\n.brand\n  display: flex\n  gap: 0.9rem\n  align-items: center\n\n.brand-mark\n  display: inline-grid\n  place-items: center\n  width: 3rem\n  aspect-ratio: 1\n  border-radius: 1rem\n  border: 1px solid rgba(255, 255, 255, 0.14)\n  background: linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04))\n  color: #fff\n  font-weight: 800\n  letter-spacing: 0.12em\n  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04) inset, 0 0 22px rgba(255, 255, 255, 0.08)\n\n.eyebrow\n  margin: 0\n  color: var(--brand-accent, #ffb347)\n  text-transform: uppercase\n  letter-spacing: 0.24em\n  font-size: 0.7rem\n  font-weight: 800\n\nh1\n  margin: 0.1rem 0 0\n  font-size: clamp(1.5rem, 3vw, 2.4rem)\n  line-height: 1\n  letter-spacing: -0.05em\n\n.tagline\n  margin: 0.45rem 0 0\n  max-width: 40rem\n  color: rgba(241, 245, 255, 0.72)\n  font-size: 0.95rem\n  line-height: 1.5\n\n.set-nav\n  display: flex\n  flex-wrap: wrap\n  gap: 0.75rem\n\n.set-nav a\n  display: grid\n  gap: 0.2rem\n  padding: 0.75rem 0.95rem\n  border-radius: 1rem\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  background: rgba(255, 255, 255, 0.04)\n  text-decoration: none\n  color: inherit\n  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease, background 160ms ease\n\n.set-nav a:hover\n  transform: translateY(-1px)\n  background: rgba(255, 255, 255, 0.06)\n\n.set-nav a.active\n  border-color: var(--link-accent)\n  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12) inset, 0 0 24px var(--link-glow)\n\n.set-nav span\n  font-size: 0.95rem\n  font-weight: 800\n  letter-spacing: 0.02em\n\n.set-nav small\n  color: rgba(241, 245, 255, 0.65)\n  font-size: 0.75rem\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 47 }); })();
