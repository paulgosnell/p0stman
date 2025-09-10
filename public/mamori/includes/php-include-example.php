<?php
/**
 * Example PHP include system for Mamori MVP
 * This works locally and on web servers that support PHP
 */

// Configuration
$baseUrl = '';
$pageConfig = [];

// Function to load and process includes
function loadInclude($filename, $baseUrl = '', $pageConfig = []) {
    $filepath = __DIR__ . '/' . $filename . '.html';
    
    if (!file_exists($filepath)) {
        return "<!-- Include file not found: $filename -->";
    }
    
    $content = file_get_contents($filepath);
    
    // Replace template variables
    $content = str_replace('{{BASE_URL}}', $baseUrl, $content);
    $content = str_replace('{{CATEGORIES_ACTIVE}}', $pageConfig['categoriesActive'] ?? '', $content);
    $content = str_replace('{{ABOUT_ACTIVE}}', $pageConfig['aboutActive'] ?? '', $content);
    $content = str_replace('{{EVIDENCE_ACTIVE}}', $pageConfig['evidenceActive'] ?? '', $content);
    $content = str_replace('{{CATEGORIES_MOBILE_ACTIVE}}', $pageConfig['categoriesMobileActive'] ?? '', $content);
    $content = str_replace('{{ABOUT_MOBILE_ACTIVE}}', $pageConfig['aboutMobileActive'] ?? '', $content);
    $content = str_replace('{{EVIDENCE_MOBILE_ACTIVE}}', $pageConfig['evidenceMobileActive'] ?? '', $content);
    
    return $content;
}
?>

<!-- Example usage in a PHP page: -->
<?php
// Page configuration
$baseUrl = '';
$pageConfig = [
    'categoriesActive' => 'nav-link--active',
    'categoriesMobileActive' => 'mobile-nav-link--active'
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mamori - Categories</title>
    <!-- styles here -->
</head>
<body>
    <!-- Header Include -->
    <?php echo loadInclude('header', $baseUrl, $pageConfig); ?>
    
    <!-- Page content here -->
    
    <!-- Footer Include -->
    <?php echo loadInclude('footer', $baseUrl, $pageConfig); ?>
    
    <!-- Scripts Include -->
    <?php echo loadInclude('scripts', $baseUrl, $pageConfig); ?>
</body>
</html>