import { ref, Ref } from 'vue';

export default class HomeController {
  panel: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);

  panelBtn: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);

  setPanelRef(panel: HTMLElement | null): void {
    this.panel.value = panel;
  }

  setPanelBtnRef(panelBtn: HTMLElement | null): void {
    this.panelBtn.value = panelBtn;
  }

  onPanelClick(): void {
    if (this.panel.value && this.panelBtn.value) {
      if (this.panel.value.classList.contains('closed')) {
        this.panel.value.classList.remove('closed');
        this.panelBtn.value.classList.remove('im-angle-left');
        this.panelBtn.value.classList.add('im-x-mark');
      } else {
        this.panel.value.classList.add('closed');
        this.panelBtn.value.classList.remove('im-x-mark');
        this.panelBtn.value.classList.add('im-angle-left');
      }
    }
  }
}
