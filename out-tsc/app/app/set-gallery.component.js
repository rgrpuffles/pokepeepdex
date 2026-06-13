import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { cardSections, defaultSetId, emptyGallerySet } from './cards-data';
import { GalleryDataService } from './gallery-data.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.src;
function SetGalleryComponent_For_27_Conditional_10_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "figure", 12);
    i0.ɵɵdomElement(1, "img", 13);
    i0.ɵɵdomElementStart(2, "figcaption");
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("src", card_r1.src, i0.ɵɵsanitizeUrl)("alt", card_r1.alt);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r1.name);
} }
function SetGalleryComponent_For_27_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, SetGalleryComponent_For_27_Conditional_10_For_2_Template, 4, 3, "figure", 12, _forTrack1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const cards_r2 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(cards_r2);
} }
function SetGalleryComponent_For_27_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 11)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "span");
    i0.ɵɵtext(4, "Looks like the gallery cabinet is waiting for a new pull.");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const section_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵnextContext();
    const currentSet_r4 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("No ", section_r3.label.toLowerCase(), " cards in ", currentSet_r4.title, " yet.");
} }
function SetGalleryComponent_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdeclareLet(0);
    i0.ɵɵdomElementStart(1, "section", 6)(2, "div", 7)(3, "div")(4, "p", 8);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(8, "span", 9);
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵconditionalCreate(10, SetGalleryComponent_For_27_Conditional_10_Template, 3, 0, "div", 10)(11, SetGalleryComponent_For_27_Conditional_11_Template, 5, 2, "div", 11);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const section_r3 = ctx.$implicit;
    i0.ɵɵnextContext();
    const currentSet_r4 = i0.ɵɵreadContextLet(0);
    const cards_r5 = i0.ɵɵstoreLet(currentSet_r4.cards[section_r3.key]);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(section_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r3.subtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", cards_r5.length, " cards");
    i0.ɵɵadvance();
    i0.ɵɵconditional(cards_r5.length ? 10 : 11);
} }
export class SetGalleryComponent {
    route = inject(ActivatedRoute);
    galleryData = inject(GalleryDataService);
    sections = cardSections;
    manifest = toSignal(this.galleryData.manifest$, { initialValue: null });
    setId = toSignal(this.route.paramMap.pipe(map((params) => params.get('setId') ?? defaultSetId)), { initialValue: defaultSetId });
    set = computed(() => this.manifest()?.sets.find((set) => set.slug === this.setId()) ??
        this.manifest()?.sets.find((set) => set.slug === defaultSetId) ??
        emptyGallerySet, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "set" }] : /* istanbul ignore next */ []));
    totalCards = computed(() => {
        const currentSet = this.set();
        if (!currentSet) {
            return 0;
        }
        return this.sections.reduce((total, section) => total + currentSet.cards[section.key].length, 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCards" }] : /* istanbul ignore next */ []));
    static ɵfac = function SetGalleryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SetGalleryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SetGalleryComponent, selectors: [["app-set-gallery"]], decls: 28, vars: 11, consts: [[1, "set-page"], [1, "hero"], [1, "hero-copy"], [1, "kicker"], [1, "summary"], ["aria-label", "Set stats", 1, "stat-strip"], [1, "section"], [1, "section-head"], [1, "section-label"], [1, "section-count"], [1, "card-grid"], [1, "empty-state"], [1, "card"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"]], template: function SetGalleryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdeclareLet(0);
            i0.ɵɵdomElementStart(1, "main", 0)(2, "section", 1)(3, "div", 2)(4, "p", 3);
            i0.ɵɵtext(5, "Scan mode active");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "p", 4);
            i0.ɵɵtext(9, " Cards are sorted into the familiar Pok\u00E9dex drawers: standard, full art, moment, and ace trainer. ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(10, "aside", 5)(11, "div")(12, "span");
            i0.ɵɵtext(13, "Total cards");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "strong");
            i0.ɵɵtext(15);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(16, "div")(17, "span");
            i0.ɵɵtext(18, "Section count");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(19, "strong");
            i0.ɵɵtext(20);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(21, "div")(22, "span");
            i0.ɵɵtext(23, "Route");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(24, "strong");
            i0.ɵɵtext(25);
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵrepeaterCreate(26, SetGalleryComponent_For_27_Template, 12, 5, "section", 6, _forTrack0);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            const currentSet_r6 = i0.ɵɵstoreLet(ctx.set());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("--accent", currentSet_r6.accent)("--accent-soft", currentSet_r6.accentSoft)("--glow", currentSet_r6.glow);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(currentSet_r6.title);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.totalCards());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.sections.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(currentSet_r6.slug);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.sections);
        } }, dependencies: [CommonModule], styles: ["-shadowcsshost-no-combinator\n  display: block\n\n.set-page\n  width: min(1200px, calc(100% - 1.5rem))\n  margin: 0 auto\n  padding: 1rem 0 4rem\n\n.hero\n  position: relative\n  display: grid\n  grid-template-columns: minmax(0, 1fr) auto\n  gap: 1rem\n  align-items: stretch\n  padding: 1.25rem\n  border: 1px solid rgba(255, 255, 255, 0.1)\n  border-radius: 28px\n  background: linear-gradient(160deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))\n  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28)\n  overflow: hidden\n\n.hero::before\n  content: ''\n  position: absolute\n  inset: auto auto 0 0\n  width: 100%\n  height: 100%\n  background: radial-gradient(circle at top left, var(--accent-soft), transparent 58%)\n  pointer-events: none\n  z-index: 0\n\n.hero-copy,\n.stat-strip,\n.section\n  position: relative\n  z-index: 1\n\n.kicker\n  margin: 0 0 0.35rem\n  color: var(--accent)\n  text-transform: uppercase\n  letter-spacing: 0.26em\n  font-size: 0.72rem\n  font-weight: 800\n\nh2\n  margin: 0\n  font-size: clamp(2rem, 5vw, 4.5rem)\n  line-height: 0.95\n  letter-spacing: -0.06em\n\n.summary\n  margin: 0.85rem 0 0\n  max-width: 42rem\n  color: rgba(242, 246, 255, 0.78)\n  font-size: 1rem\n  line-height: 1.6\n\n.stat-strip\n  display: grid\n  gap: 0.75rem\n  min-width: 230px\n\n.stat-strip div\n  display: grid\n  gap: 0.2rem\n  padding: 0.9rem 1rem\n  border-radius: 20px\n  background: rgba(3, 8, 24, 0.56)\n  border: 1px solid rgba(255, 255, 255, 0.08)\n\n.stat-strip span,\n.section-label\n  color: rgba(241, 245, 255, 0.6)\n  text-transform: uppercase\n  letter-spacing: 0.18em\n  font-size: 0.68rem\n\n.stat-strip strong\n  font-size: 1.35rem\n  color: #fff\n\n.section\n  margin-top: 1.25rem\n  padding: 1rem\n  border-radius: 26px\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  background: linear-gradient(180deg, rgba(8, 15, 31, 0.85), rgba(3, 8, 24, 0.78))\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04)\n\n.section-head\n  display: flex\n  align-items: end\n  justify-content: space-between\n  gap: 1rem\n  margin-bottom: 1rem\n\nh3\n  margin: 0.2rem 0 0\n  font-size: clamp(1.1rem, 2vw, 1.55rem)\n  line-height: 1.15\n\n.section-count\n  padding: 0.55rem 0.8rem\n  border-radius: 999px\n  color: var(--accent)\n  background: rgba(255, 255, 255, 0.04)\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  font-size: 0.85rem\n  white-space: nowrap\n\n.card-grid\n  display: grid\n  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr))\n  gap: 0.9rem\n\n.card\n  margin: 0\n  overflow: hidden\n  border-radius: 22px\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))\n  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24)\n  transform: translateY(0)\n  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease\n\n.card:hover\n  transform: translateY(-4px)\n  border-color: color-mix(in srgb, var(--accent) 60%, white 10%)\n  box-shadow: 0 24px 44px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08) inset\n\n.card img\n  display: block\n  width: 100%\n  aspect-ratio: 0.71\n  object-fit: cover\n  background: rgba(255, 255, 255, 0.05)\n\n.card figcaption\n  padding: 0.75rem 0.8rem 0.9rem\n  font-size: 0.82rem\n  font-weight: 700\n  line-height: 1.35\n  letter-spacing: 0.02em\n  color: rgba(245, 248, 255, 0.92)\n\n.empty-state\n  display: grid\n  gap: 0.2rem\n  padding: 1.25rem 1rem\n  border-radius: 18px\n  border: 1px dashed rgba(255, 255, 255, 0.15)\n  color: rgba(241, 245, 255, 0.76)\n\n.empty-state p,\n.empty-state span\n  margin: 0\n\n@media (max-width: 820px)\n  .hero\n    grid-template-columns: 1fr\n\n  .stat-strip\n    min-width: 0\n    grid-template-columns: repeat(3, minmax(0, 1fr))\n\n  .section-head\n    align-items: start\n    flex-direction: column\n\n@media (max-width: 560px)\n  .set-page\n    width: min(100%, calc(100% - 1rem))\n    padding-top: 0.75rem\n\n  .hero,\n  .section\n    border-radius: 22px\n\n  .stat-strip\n    grid-template-columns: 1fr\n\n  .card-grid\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SetGalleryComponent, [{
        type: Component,
        args: [{ selector: 'app-set-gallery', standalone: true, imports: [CommonModule], template: `
    @let currentSet = set();

    <main
      class="set-page"
      [style.--accent]="currentSet.accent"
      [style.--accent-soft]="currentSet.accentSoft"
      [style.--glow]="currentSet.glow"
    >
      <section class="hero">
        <div class="hero-copy">
          <p class="kicker">Scan mode active</p>
          <h2>{{ currentSet.title }}</h2>
          <p class="summary">
            Cards are sorted into the familiar Pokédex drawers: standard, full art,
            moment, and ace trainer.
          </p>
        </div>

        <aside class="stat-strip" aria-label="Set stats">
          <div>
            <span>Total cards</span>
            <strong>{{ totalCards() }}</strong>
          </div>
          <div>
            <span>Section count</span>
            <strong>{{ sections.length }}</strong>
          </div>
          <div>
            <span>Route</span>
            <strong>{{ currentSet.slug }}</strong>
          </div>
        </aside>
      </section>

      @for (section of sections; track section.key) {
        @let cards = currentSet.cards[section.key];

        <section class="section">
          <div class="section-head">
            <div>
              <p class="section-label">{{ section.label }}</p>
              <h3>{{ section.subtitle }}</h3>
            </div>
            <span class="section-count">{{ cards.length }} cards</span>
          </div>

          @if (cards.length) {
            <div class="card-grid">
              @for (card of cards; track card.src) {
                <figure class="card">
                  <img
                    [src]="card.src"
                    [alt]="card.alt"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{{ card.name }}</figcaption>
                </figure>
              }
            </div>
          } @else {
            <div class="empty-state">
              <p>No {{ section.label.toLowerCase() }} cards in {{ currentSet.title }} yet.</p>
              <span>Looks like the gallery cabinet is waiting for a new pull.</span>
            </div>
          }
        </section>
      }
    </main>
  `, styles: [":host\n  display: block\n\n.set-page\n  width: min(1200px, calc(100% - 1.5rem))\n  margin: 0 auto\n  padding: 1rem 0 4rem\n\n.hero\n  position: relative\n  display: grid\n  grid-template-columns: minmax(0, 1fr) auto\n  gap: 1rem\n  align-items: stretch\n  padding: 1.25rem\n  border: 1px solid rgba(255, 255, 255, 0.1)\n  border-radius: 28px\n  background: linear-gradient(160deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))\n  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28)\n  overflow: hidden\n\n.hero::before\n  content: ''\n  position: absolute\n  inset: auto auto 0 0\n  width: 100%\n  height: 100%\n  background: radial-gradient(circle at top left, var(--accent-soft), transparent 58%)\n  pointer-events: none\n  z-index: 0\n\n.hero-copy,\n.stat-strip,\n.section\n  position: relative\n  z-index: 1\n\n.kicker\n  margin: 0 0 0.35rem\n  color: var(--accent)\n  text-transform: uppercase\n  letter-spacing: 0.26em\n  font-size: 0.72rem\n  font-weight: 800\n\nh2\n  margin: 0\n  font-size: clamp(2rem, 5vw, 4.5rem)\n  line-height: 0.95\n  letter-spacing: -0.06em\n\n.summary\n  margin: 0.85rem 0 0\n  max-width: 42rem\n  color: rgba(242, 246, 255, 0.78)\n  font-size: 1rem\n  line-height: 1.6\n\n.stat-strip\n  display: grid\n  gap: 0.75rem\n  min-width: 230px\n\n.stat-strip div\n  display: grid\n  gap: 0.2rem\n  padding: 0.9rem 1rem\n  border-radius: 20px\n  background: rgba(3, 8, 24, 0.56)\n  border: 1px solid rgba(255, 255, 255, 0.08)\n\n.stat-strip span,\n.section-label\n  color: rgba(241, 245, 255, 0.6)\n  text-transform: uppercase\n  letter-spacing: 0.18em\n  font-size: 0.68rem\n\n.stat-strip strong\n  font-size: 1.35rem\n  color: #fff\n\n.section\n  margin-top: 1.25rem\n  padding: 1rem\n  border-radius: 26px\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  background: linear-gradient(180deg, rgba(8, 15, 31, 0.85), rgba(3, 8, 24, 0.78))\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04)\n\n.section-head\n  display: flex\n  align-items: end\n  justify-content: space-between\n  gap: 1rem\n  margin-bottom: 1rem\n\nh3\n  margin: 0.2rem 0 0\n  font-size: clamp(1.1rem, 2vw, 1.55rem)\n  line-height: 1.15\n\n.section-count\n  padding: 0.55rem 0.8rem\n  border-radius: 999px\n  color: var(--accent)\n  background: rgba(255, 255, 255, 0.04)\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  font-size: 0.85rem\n  white-space: nowrap\n\n.card-grid\n  display: grid\n  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr))\n  gap: 0.9rem\n\n.card\n  margin: 0\n  overflow: hidden\n  border-radius: 22px\n  border: 1px solid rgba(255, 255, 255, 0.08)\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))\n  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24)\n  transform: translateY(0)\n  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease\n\n.card:hover\n  transform: translateY(-4px)\n  border-color: color-mix(in srgb, var(--accent) 60%, white 10%)\n  box-shadow: 0 24px 44px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08) inset\n\n.card img\n  display: block\n  width: 100%\n  aspect-ratio: 0.71\n  object-fit: cover\n  background: rgba(255, 255, 255, 0.05)\n\n.card figcaption\n  padding: 0.75rem 0.8rem 0.9rem\n  font-size: 0.82rem\n  font-weight: 700\n  line-height: 1.35\n  letter-spacing: 0.02em\n  color: rgba(245, 248, 255, 0.92)\n\n.empty-state\n  display: grid\n  gap: 0.2rem\n  padding: 1.25rem 1rem\n  border-radius: 18px\n  border: 1px dashed rgba(255, 255, 255, 0.15)\n  color: rgba(241, 245, 255, 0.76)\n\n.empty-state p,\n.empty-state span\n  margin: 0\n\n@media (max-width: 820px)\n  .hero\n    grid-template-columns: 1fr\n\n  .stat-strip\n    min-width: 0\n    grid-template-columns: repeat(3, minmax(0, 1fr))\n\n  .section-head\n    align-items: start\n    flex-direction: column\n\n@media (max-width: 560px)\n  .set-page\n    width: min(100%, calc(100% - 1rem))\n    padding-top: 0.75rem\n\n  .hero,\n  .section\n    border-radius: 22px\n\n  .stat-strip\n    grid-template-columns: 1fr\n\n  .card-grid\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SetGalleryComponent, { className: "SetGalleryComponent", filePath: "app/set-gallery.component.ts", lineNumber: 87 }); })();
