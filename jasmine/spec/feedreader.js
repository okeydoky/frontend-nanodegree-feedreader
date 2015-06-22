/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Spec: non-empty URLs
        it('have non-empty URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
                expect(feed.url).not.toEqual('');
            });
        });

        // Spec: non-empty names
        it('have non-empty names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
                expect(feed.name).not.toEqual('');
            });
        });
    });

    describe('Menu', function() {
        // Spec: Menu is hidden by default
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); 
        });
        
        // Spec: Menu toggle
        it('will appear/hide when menu icon is clicked', function() {
            var $menuIcon = $('.menu-icon-link');
            // click the first time; menu should appear
            $menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            // click the second time; menu should disappear
            $menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
    describe('Initial Entries', function() {  
        // load a feed before testing
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('have at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
    
    describe('New Feed Selection', function() {
        var oldTitle;

        beforeEach(function(done) {
            // load initial RSS feed
            loadFeed(0, function() {
                // cache old title when it's done
                oldTitle = $('.entry h2').first().text();
                
                // now load a new feed
                loadFeed(1, done);
            });
        });
        
        it('makes content different', function(done) {
            var newTitle = $('.entry h2').first().text();
            expect(newTitle).not.toBe(oldTitle);
            done();
        });
    });
    
    /* Pending Specs for future features
     * Allow users to add RSS feed. Once an RSS feed is added:
     *  1. allFeeds.length should increase by 1
     *  2. the new feed has valid name and url.
     */
    describe('New RSS Feed Addition', function() {
        xit('will increase RSS feeds lenght by 1', function() {
            var oldLength = allFeeds.length;
           
            /* TODO: Add insert RSS feed function here after it is implemented */
           
            var newLength = allFeeds.length;
            exptect(newLenght - oldLength).toBe(1); 
        });
       
        xit('has valid name and url', function() {
           
            /* TODO: Add insert RSS feed function here after it is implemented */
           
            var length = allFeeds.length;
            var newFeed = allFeeds[length -1];
           
            expect(newFeed.url).toBeDefined();
            expect(newFeed.url).not.toBeNull();
            expect(newFeed.url).not.toEqual('');
           
            expect(newFeed.name).toBeDefined();
            expect(newFeed.name).not.toBeNull();
            expect(newFeed.name).not.toEqual('');
        });
    });
}());
