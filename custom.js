
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r2yqh9y8ia");



    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=1550432118346679&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));



    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '589910214758872');
    fbq('track', 'PageView');



    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-36173252-5', 'auto');
    ga('send', 'pageview');




  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YKJJEND5P0');



  window.onload = function() {
    window.micAccessTool = new MicAccessTool({
      link: 'https://daffodilvarsity.edu.bd',
      contact: 'mailto:web3@daffodilvarsity.edu.bd',
      buttonPosition: 'right',
      forceLang: 'en'
    });
 // Dynamically load custom CSS
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://daffodilvarsity.edu.bd/acc_toolbar/app/css/custom.css'; // Path to your custom CSS file
            document.getElementsByTagName('head')[0].appendChild(link);
  }



        function updateTimer() {
            future = Date.parse("Feb 8, 2025 09:00:00");
            now = new Date();
            diff = future - now;

            days = Math.floor(diff / (1000 * 60 * 60 * 24));
            hours = Math.floor(diff / (1000 * 60 * 60));
            mins = Math.floor(diff / (1000 * 60));
            secs = Math.floor(diff / 1000);

            d = days;
            h = hours - days * 24;
            m = mins - hours * 60;
            s = secs - mins * 60;

            document.getElementById("timer").innerHTML =
                '<div class="stat"><h6>' + d + '</h6><p>Days</p></div>' +
                '<div class="stat"><h6>' + h + '</h6><p>Hours</p></div>' +
                '<div class="stat"><h6>' + m + '</h6><p>Min</p></div>' +
                '<div class="stat"><h6>' + s + '</h6><p>Sec</p></div>';
        }
        setInterval('updateTimer()', 1000);
    


        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('.subscribe-form');
            // Check if form exists
            if (!form) return;
            // Check for error or success alerts
            const errorAlert = form.querySelector('.alert-danger');
            const successAlert = form.querySelector('.alert-success');

            // Scroll to form if there's an alert
            if (errorAlert || successAlert) {
                form.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    


        document.addEventListener('DOMContentLoaded', function () {
            fetch('/api/visitor-count')
                .then(response => response.json())
                .then(data => {
                    // Populate the footer stats
                    document.getElementById('visitor-today').innerText = data.totalVisitors.today;
                    document.getElementById('visitor-30days').innerText = data.totalVisitors.last30Days;
                })
                .catch(error => console.error('Error fetching stats:', error));
        });
    


    $(document).ready(function() {
        var currentPage = 1;
        var pageSize = 25;
        var searchData = null; // To store the search data
        var linkFieldCheck = false; // To store the search data

        $('.searchable-field').on('input', function() {
            var searchTerm = $(this).val();
            var searchOption = $('#searchOption').val();
            linkFieldCheck = false;
            if (searchTerm == '') {
                $('.search-results').empty();
                $('.pagination-container').empty();
            } else {
                console.log('Bangladesh');
                currentPage = 1;
                performSearch(searchTerm, searchOption, currentPage, pageSize);
            }
        });

        $('#searchOption').change(function() {
            var searchTerm = $('.searchable-field').val();
            var searchOption = $(this).val();
            linkFieldCheck = false;
            currentPage = 1;
            performSearch(searchTerm, searchOption, currentPage, pageSize);
        });

        function performSearch(searchTerm, searchOption, page, size) {
            if (linkFieldCheck) {
                displaySearchResults(searchData, page, size);
                displayPagination(Math.ceil(searchData.length / size), page);
            } else {
                $.ajax({
                    url: 'https://daffodilvarsity.edu.bd/global-search',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        search: searchTerm,
                        searchOption: searchOption
                    },
                    beforeSend: function() {
                        // Show loading indicator or perform any pre-search actions
                    },
                    success: function(data) {
                        searchData = data.results;
                        displaySearchResults(searchData, page, size);
                        displayPagination(Math.ceil(searchData.length / size), page);
                    },
                    error: function() {
                        // Handle errors
                    }
                });
            }
        }

        function displaySearchResults(results, page, size) {
            var startIndex = (page - 1) * size;
            var endIndex = startIndex + size;
            var paginatedResults = results.slice(startIndex, endIndex);

            var resultsContainer = $('.search-results');
            resultsContainer.empty();
            if (paginatedResults.length > 0) {
                paginatedResults.forEach(function(item) {
                    var resultItem = $("<a href='" + item.url + "'>").addClass('searchable-link');
                    item.fields.forEach(function(field, index) {
                        if (item[field]) {
                            var value;
                            if (index === 0) {
                                value = $('<div>').addClass('searchable-title').append($('<h5>').html(item[field]));

                            } else {
                                value = $('<div>').addClass('searchable-fields').html(item[field]);
                            }
                            resultItem.append(value);
                            if (index === 0) {
                                var breadcrumb = $('<div>').addClass('searchable-breadcrumb').append($('<h6>').html(item.breadcrumb));
                                resultItem.append(breadcrumb);
                            }

                        }
                    });
                    resultItem.append($('<hr>'));
                    resultsContainer.append(resultItem);
                });
            } else {
                resultsContainer.text('No results found.');
            }
        }

        function displayPagination(totalPages, currentPage) {
            var paginationContainer = $('.pagination-container');
            linkFieldCheck = true;
            paginationContainer.empty();
            if (totalPages > 1) {
                var pagination = $('<ul>').addClass('pagination');

                // Add previous link
                if (currentPage > 1) {
                    var prevItem = $('<li>').addClass('page-item');
                    var prevLink = $('<a>').addClass('page-link').attr('href', '#').text('<');
                    prevItem.append(prevLink);
                    pagination.append(prevItem);

                    prevLink.click(function(e) {
                        e.preventDefault();
                        currentPage--;
                        displaySearchResults(searchData, currentPage, pageSize);
                        displayPagination(totalPages, currentPage);
                    });
                }

                // Add numbered page links
                for (var i = 1; i <= totalPages; i++) {
                    var pageItem = $('<li>').addClass('page-item');
                    var pageLink = $('<a>').addClass('page-link').attr('href', '#').text(i);
                    pageItem.append(pageLink);
                    pagination.append(pageItem);

                    pageLink.click(function(e) {
                        e.preventDefault();
                        currentPage = parseInt($(this).text());
                        displaySearchResults(searchData, currentPage, pageSize);
                        displayPagination(totalPages, currentPage);
                    });

                    // Add active class to the current page item
                    if (i === currentPage) {
                        pageItem.addClass('active');
                    }
                }

                // Add next link
                if (currentPage < totalPages) {
                    var nextItem = $('<li>').addClass('page-item');
                    var nextLink = $('<a>').addClass('page-link').attr('href', '#').text('>');
                    nextItem.append(nextLink);
                    pagination.append(nextItem);

                    nextLink.click(function(e) {
                        e.preventDefault();
                        currentPage++;
                        displaySearchResults(searchData, currentPage, pageSize);
                        displayPagination(totalPages, currentPage);
                    });
                }

                paginationContainer.append(pagination);
            }
        }

        $('#customSearch').on('hidden.bs.modal', function() {
            // Clear input text
            $('.searchable-field').val('');

            // Clear search results and pagination
            $('.search-results').empty();
            $('.pagination-container').empty();
        });

    });






        async function fetchVisitorCount() {
            try {
                let response = await fetch('https://analyticsdata.googleapis.com/v1beta/properties/G-YKJJEND5P0:runReport', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "dateRanges": [{"startDate": "30daysAgo", "endDate": "today"}],
                        "metrics": [{"name": "activeUsers"}]
                    })
                });

                let data = await response.json();
                if (data && data.rows) {
                    document.getElementById('visitor-count').innerText = 
                        'Total Visitors: ' + data.rows[0].metricValues[0].value;
                } else {
                    document.getElementById('visitor-count').innerText = 'No data available';
                }
            } catch (error) {
                console.error('Error fetching visitor count:', error);
                document.getElementById('visitor-count').innerText = 'Error fetching data';
            }
        }

        fetchVisitorCount();
    