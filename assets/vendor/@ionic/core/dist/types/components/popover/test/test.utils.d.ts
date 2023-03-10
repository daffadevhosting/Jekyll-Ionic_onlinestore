import type { Locator } from '@playwright/test';
import type { E2EPage } from '@utils/test/playwright';
export declare const openPopover: (page: E2EPage, buttonID: string, useEvalClick?: boolean) => Promise<void>;
export declare const closePopover: (page: E2EPage, popover?: Locator) => Promise<void>;
export declare const screenshotPopover: (page: E2EPage, buttonID: string, testName: string) => Promise<void>;
