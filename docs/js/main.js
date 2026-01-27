/**
 * Accessible Navigation and Interaction Enhancements
 * WCAG 2.2 Compliant
 */

(function() {
    'use strict';

    // Language detection and redirect for Danish users
    function initLanguageDetection() {
        // Only run on English pages (not already in /da/)
        if (window.location.pathname.includes('/da/')) {
            return;
        }

        // Check if user has already made a language choice
        const langPreference = localStorage.getItem('preferredLanguage');
        
        if (langPreference === 'en') {
            // User explicitly chose English, don't redirect
            return;
        }

        if (langPreference === 'da') {
            // User explicitly chose Danish, redirect to Danish version
            redirectToDanish();
            return;
        }

        // No preference set - check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && (browserLang.startsWith('da'))) {
            // First-time Danish user - redirect to Danish version
            redirectToDanish();
        }
    }

    function redirectToDanish() {
        // Get current path and construct Danish equivalent
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        
        // Construct the Danish URL
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        const danishUrl = basePath + '/da/' + currentFile;
        
        // Redirect to Danish version
        window.location.href = danishUrl;
    }

    // Save language preference when clicking language switcher
    function initLanguageSwitcher() {
        const switcher = document.querySelector('.language-switcher');
        if (!switcher) return;

        switcher.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
                // Determine which language was clicked
                const hreflang = link.getAttribute('hreflang');
                if (hreflang) {
                    localStorage.setItem('preferredLanguage', hreflang);
                }
            }
        });

        // Also mark the active language choice
        const activeSpan = switcher.querySelector('.lang-active');
        if (activeSpan) {
            // If on Danish page, save da preference; if on English, save en
            const isOnDanishPage = window.location.pathname.includes('/da/');
            if (isOnDanishPage) {
                localStorage.setItem('preferredLanguage', 'da');
            }
        }
    }

    // Smooth scroll with reduced motion respect
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    
                    if (prefersReducedMotion) {
                        targetElement.scrollIntoView();
                    } else {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }

                    // Set focus to target for keyboard users
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                }
            });
        });
    }

    // Highlight current TOC item while scrolling
    function initTOCHighlight() {
        const tocLinks = document.querySelectorAll('.toc-sidebar a');
        const sections = document.querySelectorAll('section[aria-labelledby]');

        if (sections.length === 0 || tocLinks.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.querySelector('[id]')?.id;
                    if (id) {
                        tocLinks.forEach(link => {
                            const href = link.getAttribute('href');
                            if (href === `#${id}`) {
                                link.setAttribute('aria-current', 'location');
                                link.style.color = 'var(--color-primary)';
                                link.style.fontWeight = '600';
                            } else {
                                link.removeAttribute('aria-current');
                                link.style.color = '';
                                link.style.fontWeight = '';
                            }
                        });
                    }
                }
            });
        }, {
            rootMargin: '-20% 0px -80% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // Keyboard navigation enhancement
    function initKeyboardNav() {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        sidebar.addEventListener('keydown', function(e) {
            const currentLink = document.activeElement;
            
            if (!currentLink.classList.contains('nav-link')) return;

            const allLinks = Array.from(sidebar.querySelectorAll('.nav-link'));
            const currentIndex = allLinks.indexOf(currentLink);

            // Arrow Down: Next link
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % allLinks.length;
                allLinks[nextIndex].focus();
            }

            // Arrow Up: Previous link
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + allLinks.length) % allLinks.length;
                allLinks[prevIndex].focus();
            }

            // Home: First link
            if (e.key === 'Home') {
                e.preventDefault();
                allLinks[0].focus();
            }

            // End: Last link
            if (e.key === 'End') {
                e.preventDefault();
                allLinks[allLinks.length - 1].focus();
            }
        });
    }

    // Announce page changes to screen readers
    function announcePageLoad() {
        const title = document.querySelector('.page-title');
        if (title) {
            // Create live region for announcements
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('role', 'status');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            liveRegion.textContent = `Page loaded: ${title.textContent}`;
            document.body.appendChild(liveRegion);

            // Clean up after announcement
            setTimeout(() => {
                liveRegion.remove();
            }, 1000);
        }
    }

    // Add screen reader only class
    function addSROnlyStyles() {
        if (!document.getElementById('sr-only-styles')) {
            const style = document.createElement('style');
            style.id = 'sr-only-styles';
            style.textContent = `
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Prompt box functionality (Copy, Edit, Revert)
    function initPromptBoxes() {
        const promptBoxes = document.querySelectorAll('.prompt-box');
        
        promptBoxes.forEach(box => {
            const promptCode = box.querySelector('.prompt-code code');
            const copyBtn = box.querySelector('.prompt-copy-btn');
            const actionBtns = box.querySelectorAll('.prompt-action-btn');
            
            if (!promptCode) return;
            
            // Find edit and revert buttons
            let editBtn = null;
            let revertBtn = null;
            
            actionBtns.forEach(btn => {
                const label = btn.getAttribute('aria-label');
                if (label && label.includes('Edit')) {
                    editBtn = btn;
                } else if (label && label.includes('Revert')) {
                    revertBtn = btn;
                }
            });
            
            // Store original content
            const originalContent = promptCode.textContent;
            let isEditing = false;
            
            // Copy functionality
            if (copyBtn) {
                copyBtn.addEventListener('click', async function() {
                    const textContent = promptCode.textContent.trim();
                    
                    try {
                        await navigator.clipboard.writeText(textContent);
                        
                        // Visual feedback
                        const originalHTML = this.innerHTML;
                        
                        this.innerHTML = '<span aria-hidden="true">📋</span> Copied!';
                        
                        setTimeout(() => {
                            this.innerHTML = originalHTML;
                        }, 3000);
                        
                        // Screen reader announcement
                        const announcement = document.createElement('div');
                        announcement.setAttribute('role', 'status');
                        announcement.setAttribute('aria-live', 'polite');
                        announcement.className = 'sr-only';
                        announcement.textContent = 'Prompt copied to clipboard';
                        document.body.appendChild(announcement);
                        setTimeout(() => announcement.remove(), 1000);
                        
                    } catch (err) {
                        console.error('Failed to copy:', err);
                        alert('Failed to copy to clipboard');
                    }
                });
            }
            
            // Edit functionality
            if (editBtn) {
                editBtn.addEventListener('click', function() {
                    if (!isEditing) {
                        // Enter edit mode - light gray background with subtle border
                        promptCode.contentEditable = 'true';
                        promptCode.style.border = '1px solid #d1d5db';
                        promptCode.style.backgroundColor = '#f3f4f6';
                        promptCode.style.borderRadius = '8px';
                        promptCode.style.padding = '1rem';
                        promptCode.style.color = '#1f2937';
                        promptCode.style.cursor = 'text';
                        promptCode.focus();
                        isEditing = true;
                    } else {
                        // Exit edit mode - restore dark background
                        promptCode.contentEditable = 'false';
                        promptCode.style.border = '';
                        promptCode.style.backgroundColor = '';
                        promptCode.style.borderRadius = '';
                        promptCode.style.padding = '';
                        promptCode.style.color = '';
                        promptCode.style.cursor = '';
                        isEditing = false;
                    }
                });
            }
            
            // Revert functionality
            if (revertBtn) {
                revertBtn.addEventListener('click', function() {
                    promptCode.textContent = originalContent;
                    promptCode.contentEditable = 'false';
                    promptCode.style.border = '';
                    promptCode.style.backgroundColor = '';
                    promptCode.style.borderRadius = '';
                    promptCode.style.padding = '';
                    promptCode.style.color = '';
                    promptCode.style.cursor = '';
                    isEditing = false;
                    
                    // Screen reader announcement
                    const announcement = document.createElement('div');
                    announcement.setAttribute('role', 'status');
                    announcement.setAttribute('aria-live', 'polite');
                    announcement.className = 'sr-only';
                    announcement.textContent = 'Prompt reverted to original';
                    document.body.appendChild(announcement);
                    setTimeout(() => announcement.remove(), 1000);
                });
            }
        });
    }

    // Completion Status Management
    const STORAGE_KEY = 'ptpchallenge-completion-status';

    // Get all completion data from localStorage
    function getCompletionData() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error('Failed to read completion data:', e);
            return {};
        }
    }

    // Save completion data to localStorage
    function saveCompletionData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Failed to save completion data:', e);
            return false;
        }
    }

    // Get page ID from current URL
    function getCurrentPageId() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);
        return filename || 'index.html';
    }

    // Check if a page is completed
    function isPageCompleted(pageId) {
        const data = getCompletionData();
        return data[pageId] === true;
    }

    // Mark page as complete/incomplete
    function togglePageCompletion(pageId, isComplete) {
        const data = getCompletionData();
        data[pageId] = isComplete;
        saveCompletionData(data);
        return isComplete;
    }

    // Update badge UI
    function updateBadgeUI(isComplete) {
        const badge = document.querySelector('.status-badge');
        if (!badge) return;

        if (isComplete) {
            badge.classList.remove('incomplete');
            badge.classList.add('complete');
            
            // Update icon and text
            const icon = badge.querySelector('.status-icon');
            const text = badge.querySelector('span:last-child') || badge;
            if (icon) icon.textContent = '✓';
            if (text.tagName === 'SPAN') {
                text.textContent = 'Complete';
            } else {
                badge.textContent = 'Complete';
            }
        } else {
            badge.classList.remove('complete');
            badge.classList.add('incomplete');
            
            // Update icon and text
            const icon = badge.querySelector('.status-icon');
            const text = badge.querySelector('span:last-child') || badge;
            if (icon) icon.textContent = '✕';
            if (text.tagName === 'SPAN') {
                text.textContent = 'Incomplete';
            } else {
                badge.textContent = 'Incomplete';
            }
        }

        // Announce change to screen readers
        announceCompletion(isComplete);
    }

    // Update sidebar navigation with checkmarks
    function updateSidebarCheckmarks() {
        const data = getCompletionData();
        const navLinks = document.querySelectorAll('.sidebar .nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#')) return;

            const pageId = href.substring(href.lastIndexOf('/') + 1);
            const isComplete = data[pageId] === true;

            // Remove existing checkmark if any
            const existingCheck = link.querySelector('.completion-check');
            if (existingCheck) existingCheck.remove();

            // Add checkmark if complete
            if (isComplete) {
                const checkmark = document.createElement('span');
                checkmark.className = 'completion-check';
                checkmark.setAttribute('aria-label', 'Completed');
                checkmark.textContent = ' ✓';
                link.appendChild(checkmark);
            }
        });
    }

    // Announce completion status to screen readers
    function announceCompletion(isComplete) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = isComplete 
            ? 'Page marked as complete' 
            : 'Page marked as incomplete';
        document.body.appendChild(announcement);

        setTimeout(() => announcement.remove(), 1000);
    }

    // Initialize completion button
    function initCompletionButton() {
        const pageId = getCurrentPageId();
        const isComplete = isPageCompleted(pageId);

        // Update badge on page load
        updateBadgeUI(isComplete);

        // Create completion button at bottom of article
        const article = document.querySelector('article');
        if (!article) return;

        // Check if button already exists
        if (document.querySelector('.completion-toggle-btn')) return;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'completion-button-container';
        buttonContainer.style.cssText = `
            margin-top: var(--spacing-lg);
            margin-bottom: var(--spacing-lg);
            padding-top: var(--spacing-md);
            border-top: 1px solid var(--color-border);
        `;

        const button = document.createElement('button');
        button.className = 'completion-toggle-btn button-primary';
        button.textContent = isComplete ? 'Mark as Incomplete' : 'Mark as Complete';
        button.setAttribute('aria-pressed', isComplete ? 'true' : 'false');

        button.addEventListener('click', function() {
            const currentStatus = isPageCompleted(pageId);
            const newStatus = !currentStatus;
            
            togglePageCompletion(pageId, newStatus);
            updateBadgeUI(newStatus);
            updateSidebarCheckmarks();

            // Update button
            this.textContent = newStatus ? 'Mark as Incomplete' : 'Mark as Complete';
            this.setAttribute('aria-pressed', newStatus ? 'true' : 'false');
        });

        buttonContainer.appendChild(button);
        
        // Insert before page navigation if it exists, otherwise at end
        const pageNav = article.querySelector('.page-navigation');
        if (pageNav) {
            article.insertBefore(buttonContainer, pageNav);
        } else {
            article.appendChild(buttonContainer);
        }
    }

    // Calculate completion progress
    function calculateProgress() {
        // Dynamically get page list from navigation (excluding index and express-version)
        const navLinks = document.querySelectorAll('.sidebar .nav-link');
        const pages = Array.from(navLinks)
            .map(link => link.getAttribute('href'))
            .filter(href => href && !href.startsWith('#') && href !== 'index.html' && href !== 'express-version.html');

        const data = getCompletionData();
        const completed = pages.filter(page => data[page] === true).length;
        const total = pages.length;

        return {
            completed,
            total,
            percentage: Math.round((completed / total) * 100)
        };
    }

    // Add progress indicator to home page
    function initProgressIndicator() {
        // Only add to home page
        const pageId = getCurrentPageId();
        if (pageId !== 'index.html') return;

        const article = document.querySelector('article');
        if (!article) return;

        // Check if already exists
        if (document.querySelector('.progress-indicator')) return;

        const progress = calculateProgress();

        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-indicator';
        progressContainer.style.cssText = `
            margin-top: var(--spacing-xl);
            padding: var(--spacing-md);
            background-color: var(--color-background-alt);
            border-radius: 8px;
            border: 1px solid var(--color-border);
        `;

        const progressTitle = document.createElement('h3');
        progressTitle.textContent = 'Your Progress';
        progressTitle.style.marginTop = '0';
        progressTitle.style.marginBottom = 'var(--spacing-sm)';

        const progressText = document.createElement('p');
        progressText.textContent = `${progress.completed} of ${progress.total} steps completed`;
        progressText.style.marginBottom = 'var(--spacing-sm)';

        const progressBarContainer = document.createElement('div');
        progressBarContainer.style.cssText = `
            width: 100%;
            height: 24px;
            background-color: var(--color-background-alt);
            border-radius: 12px;
            overflow: hidden;
        `;

        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            width: ${progress.percentage}%;
            height: 100%;
            background-color: #8B2635;
            transition: width 0.3s ease;
        `;
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-valuenow', progress.completed);
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', progress.total);
        progressBar.setAttribute('aria-label', `${progress.completed} of ${progress.total} steps completed`);

        progressBarContainer.appendChild(progressBar);

        const resetButton = document.createElement('button');
        resetButton.className = 'button-secondary';
        resetButton.textContent = 'Reset Progress';
        resetButton.style.cssText = `
            margin-top: var(--spacing-sm);
            padding: 0.5rem 1rem;
            font-size: var(--font-size-small);
            background-color: transparent;
            border: 1px solid var(--color-border);
            border-radius: 4px;
            cursor: pointer;
            color: var(--color-text);
        `;

        resetButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                localStorage.removeItem(STORAGE_KEY);
                location.reload();
            }
        });

        progressContainer.appendChild(progressTitle);
        progressContainer.appendChild(progressText);
        progressContainer.appendChild(progressBarContainer);
        progressContainer.appendChild(resetButton);

        // Insert after the first section
        const firstSection = article.querySelector('section');
        if (firstSection) {
            firstSection.insertAdjacentElement('afterend', progressContainer);
        } else {
            article.appendChild(progressContainer);
        }
    }

    // Initialize all features when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initLanguageDetection();
        initLanguageSwitcher();
        addSROnlyStyles();
        initSmoothScroll();
        initTOCHighlight();
        initKeyboardNav();
        announcePageLoad();
        initPromptBoxes();
        initCompletionButton();
        initProgressIndicator();
        updateSidebarCheckmarks();
    }

})();
