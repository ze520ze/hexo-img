document.addEventListener('DOMContentLoaded', function () {
    var sliderbar_ee = document.querySelector('.sliderbar_ee')
    var div_ee = document.querySelector('.con_ee')
    sliderbar_ee.addEventListener('mouseenter', function() {
        // 注意：这里的-160和0都是相对于父元素的偏移量，而不是相对于body的
        animate(div_ee, -180, function() {
            // 注意这里回调函数的实际应用，用于动画结束后的操作     
            sliderbar_ee.children[0].innerHTML = '⇨ '
        })
    })
    sliderbar_ee.addEventListener('mouseleave', function() {
        animate(div_ee, 20, function() {
            sliderbar_ee.children[0].innerHTML = "⇦"
        })
    })
})