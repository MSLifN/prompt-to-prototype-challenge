/**
 * Accessible Navigation and Interaction Enhancements
 * WCAG 2.2 Compliant
 */

(function() {
    'use strict';

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

    // Initialize all features when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        addSROnlyStyles();
        initSmoothScroll();
        initTOCHighlight();
        initKeyboardNav();
        announcePageLoad();
        initPromptBoxes();
    }

})();
